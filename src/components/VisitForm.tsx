'use client';

import { useId, useState } from 'react';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n';
import { VISIT_SLOTS, whatsappUrl } from '@/data/project';
import { todayInCairo, type VisitErrorCode, type VisitFieldName } from '@/lib/visit-validation';
import { IconWhatsapp } from './Icons';

// ============================================================
// فورم حجز الزيارة — نفس حقول الفورم على موقعهم الحالي:
// اسم* · تليفون* · إيميل · تاريخ · واحد من ٤ مواعيد · رسالة.
//
// ده المكوّن الوحيد في الصفحة اللي بيشتغل على المتصفح ('use client').
// التحقق الحقيقي على السيرفر؛ اللي هنا بس عشان العميل يشوف الخطأ بسرعة.
// ============================================================

type FieldErrors = Partial<Record<VisitFieldName, VisitErrorCode>>;
type ServerErrorKey = keyof Dictionary['form']['serverErrors'];

const EMPTY = {
  customerName: '',
  phone: '',
  email: '',
  visitDate: '',
  slot: '',
  message: '',
};

export function VisitForm({ locale, t }: { locale: Locale; t: Dictionary }) {
  const formId = useId();
  const [values, setValues] = useState(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<ServerErrorKey | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const minDate = todayInCairo();

  function update(name: keyof typeof EMPTY, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    // الخطأ بيختفي أول ما العميل يبدأ يصلّح — مش بعد ما يبعت تاني
    setFieldErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setServerError(null);
    setFieldErrors({});

    const payload = {
      ...values,
      // مصيدة البوتات — بتتبعت فاضية دايمًا من بني آدم
      company: (event.currentTarget.elements.namedItem('company') as HTMLInputElement | null)?.value ?? '',
    };

    try {
      const response = await fetch('/api/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('done');
        return;
      }

      const data = (await response.json().catch(() => null)) as
        | { error?: string; fields?: FieldErrors }
        | null;

      if (data?.error === 'invalid' && data.fields) {
        setFieldErrors(data.fields);
        setServerError('invalid');
      } else if (
        data?.error === 'rate_limited' ||
        data?.error === 'unavailable' ||
        data?.error === 'server_error'
      ) {
        setServerError(data.error);
      } else {
        setServerError('server_error');
      }
      setStatus('idle');
    } catch {
      setServerError('network');
      setStatus('idle');
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-3xl border border-gold-400/40 bg-sand-50/5 p-7 sm:p-8">
        <p className="text-2xl font-bold text-gold-400">{t.form.successTitle}</p>
        <p className="mt-3 leading-relaxed text-sand-200">{t.form.successBody}</p>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setStatus('idle');
          }}
          className="mt-6 text-sm font-semibold text-sea-400 underline underline-offset-4"
        >
          {t.form.successAgain}
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-sand-50/15 bg-sand-50/5 p-6 sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea-400">
        {t.visit.kicker}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-sand-50">{t.visit.heading}</h3>
      <p className="mt-3 leading-relaxed text-sand-200">{t.visit.lead}</p>

      <div className="mt-7 space-y-4">
        <Field
          id={`${formId}-name`}
          label={t.form.name}
          error={fieldErrors.customerName}
          t={t}
          requiredMark
        >
          {(props) => (
            <input
              {...props}
              type="text"
              name="customerName"
              autoComplete="name"
              placeholder={t.form.namePlaceholder}
              value={values.customerName}
              onChange={(e) => update('customerName', e.target.value)}
            />
          )}
        </Field>

        <Field
          id={`${formId}-phone`}
          label={t.form.phone}
          error={fieldErrors.phone}
          t={t}
          requiredMark
        >
          {(props) => (
            <input
              {...props}
              type="tel"
              name="phone"
              dir="ltr"
              inputMode="tel"
              autoComplete="tel"
              placeholder={t.form.phonePlaceholder}
              value={values.phone}
              onChange={(e) => update('phone', e.target.value)}
            />
          )}
        </Field>

        <Field id={`${formId}-email`} label={t.form.email} error={fieldErrors.email} t={t}>
          {(props) => (
            <input
              {...props}
              type="email"
              name="email"
              dir="ltr"
              inputMode="email"
              autoComplete="email"
              placeholder={t.form.emailPlaceholder}
              value={values.email}
              onChange={(e) => update('email', e.target.value)}
            />
          )}
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id={`${formId}-date`}
            label={t.form.date}
            error={fieldErrors.visitDate}
            t={t}
            requiredMark
          >
            {(props) => (
              <input
                {...props}
                type="date"
                name="visitDate"
                dir="ltr"
                min={minDate}
                value={values.visitDate}
                onChange={(e) => update('visitDate', e.target.value)}
              />
            )}
          </Field>

          <Field
            id={`${formId}-slot`}
            label={t.form.slot}
            error={fieldErrors.slot}
            t={t}
            requiredMark
          >
            {(props) => (
              <select
                {...props}
                name="slot"
                value={values.slot}
                onChange={(e) => update('slot', e.target.value)}
              >
                <option value="">{t.form.slotPlaceholder}</option>
                {VISIT_SLOTS.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label[locale]}
                  </option>
                ))}
              </select>
            )}
          </Field>
        </div>

        <Field id={`${formId}-message`} label={t.form.message} error={fieldErrors.message} t={t}>
          {(props) => (
            <textarea
              {...props}
              name="message"
              rows={3}
              placeholder={t.form.messagePlaceholder}
              value={values.message}
              onChange={(e) => update('message', e.target.value)}
            />
          )}
        </Field>

        {/* مصيدة البوتات — مخفية عن البني آدم وعن قارئ الشاشة */}
        <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
          <label htmlFor={`${formId}-company`}>Company</label>
          <input id={`${formId}-company`} type="text" name="company" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
      </div>

      {serverError && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200"
        >
          {t.form.serverErrors[serverError]}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 w-full rounded-full bg-gold-400 px-6 py-3.5 font-semibold text-ink-900 transition hover:bg-gold-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? t.form.submitting : t.form.submit}
      </button>

      <p className="mt-4 text-center text-sm text-sand-200/70">
        {t.visit.orWhatsapp}{' '}
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-sea-400 underline underline-offset-4"
        >
          <IconWhatsapp className="h-4 w-4" />
          {t.hero.ctaWhatsapp}
        </a>
      </p>
    </form>
  );
}

// ===== غلاف الحقل: التسمية والخطأ والربط بينهم =====
const CONTROL_CLASS =
  'w-full rounded-xl border border-sand-50/20 bg-ink-800/60 px-4 py-3 text-sand-50 placeholder:text-sand-200/40 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400';

function Field({
  id,
  label,
  error,
  t,
  requiredMark,
  children,
}: {
  id: string;
  label: string;
  error?: VisitErrorCode;
  t: Dictionary;
  requiredMark?: boolean;
  children: (props: {
    id: string;
    className: string;
    'aria-invalid'?: boolean;
    'aria-describedby'?: string;
  }) => React.ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline gap-2 text-sm font-semibold text-sand-100">
        {label}
        <span className="text-xs text-sand-200/50">
          {requiredMark ? `(${t.form.required})` : `(${t.form.optional})`}
        </span>
      </label>

      {children({
        id,
        className: CONTROL_CLASS,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errorId : undefined,
      })}

      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-300">
          {t.form.errors[error]}
        </p>
      )}
    </div>
  );
}
