/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

import nextPWA from 'next-pwa'

!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

const withPWA = nextPWA({
  dest: 'public',
  scope: '/src/app',
  buildExcludes: ['/chunks/images/.*$/'],
})

/** @type {import("next").NextConfig} */
const config = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
})
export default config
