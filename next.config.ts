import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "kunal-portfolio";
const basePath = isGitHubActions ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
