import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Placeholder artwork in /public/placeholders is SVG and authored in this repo.
     * Once real photography replaces it, this flag can be removed.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
