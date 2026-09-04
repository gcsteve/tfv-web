import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  agentRules: false,
  output: isStaticExport ? "export" : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_I18N_LANGUAGES: '["zh-HK","en"]',
    NEXT_PUBLIC_I18N_DEFAULT_LANGUAGE: "zh-HK",
    NEXT_PUBLIC_I18N_NAMESPACES: '["common"]',
    NEXT_PUBLIC_I18N_DEFAULT_NAMESPACE: "common"
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
