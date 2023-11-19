import i18nConfig from './next-i18next.config.js';

const { i18n } = i18nConfig;

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  i18n,
  images: {
    domains: [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
    ],
  },
};

export default config;
