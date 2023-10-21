/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.paypalobjects.com", "www.paypal.com", "i.imgur.com"],
  },
};

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl(nextConfig);
