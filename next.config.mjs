import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {};



export default withSentryConfig(nextConfig, {
  org: "Student",
  project: "Rafiq Portfolio",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  transpileClientSDK: true,

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
