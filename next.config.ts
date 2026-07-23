import type { NextConfig } from "next";
import { projects } from "./app/data/projects";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return projects.flatMap((project) =>
      project.legacyPaths.map((legacyPath) => ({
        source: legacyPath,
        destination: `/projects/${project.slug}`,
        permanent: true,
      }))
    );
  },
};

export default nextConfig;
