export async function GET(): Promise<Response> {
  const headerResponse = {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public',
      's-maxage': '1200',
      'stale-while-revalidate': '600'
    }
  }

  const generateSitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        <url> 
            <loc>${`https://vuhoangtrungportfolio.vercel.app/`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0000</priority>
        </url>
    </urlset>
  `

  return new Response(generateSitemap, headerResponse)
}
