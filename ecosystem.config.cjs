// PM2 config for the Square9 public website.
//
// Ports on the VPS: 3030 agent · 3031 portal · 3032 website.
// The site binds to 127.0.0.1 only; Nginx terminates TLS in front of it.
//
// 🔴 interpreter is pinned on purpose. The PM2 daemon on this box runs
//    Node 20 (from nvm), and without this it would launch the site on
//    Node 20 too, while it was built with Node 24 from /opt/node24.
//    Build and run on the same Node.
//
// 🔴 This does NOT deploy to square9.eg. The domain is the client's and is
//    live; publishing there is their decision, with their permission.
module.exports = {
  apps: [
    {
      name: 'square9-web',
      cwd: '/opt/square9-web',
      interpreter: '/opt/node24/bin/node',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3032 -H 127.0.0.1',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        // DATABASE_URL and NEXT_PUBLIC_SITE_URL come from
        // /opt/square9-web/.env.local, which Next reads at build and at run.
        // Never put secrets in this file - it is committed.
      },
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      time: true,
    },
  ],
};
