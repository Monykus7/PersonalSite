import type { NextConfig } from 'next'

/**
 * GitHub Pages serves the site under the repo name. Set when building for deploy:
 *   SITE_BASE_PATH=/PersonalSite npm run build
 * or use `npm run deploy` (sets it for you).
 * Leave unset for `next dev` and `localhost:3000/` routes.
 */
const siteBasePath = process.env.SITE_BASE_PATH?.trim() ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  ...(siteBasePath ? { basePath: siteBasePath, assetPrefix: `${siteBasePath}/` } : {}),
}

export default nextConfig
