import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/drafts/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://leadspire.digital'}/sitemap.xml`,
  }
}
