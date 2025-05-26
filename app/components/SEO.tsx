import Head from 'next/head';
import { metadata, structuredData } from '../metadata';

export function SEO() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={metadata.twitter.card} />
      <meta property="twitter:title" content={metadata.twitter.title} />
      <meta property="twitter:description" content={metadata.twitter.description} />

      {/* Canonical URL */}
      <link rel="canonical" href={metadata.alternates.canonical} />

      {/* Language */}
      <meta property="og:locale" content={metadata.openGraph.locale} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Additional Meta Tags */}
      <meta name="geo.region" content="ET" />
      <meta name="geo.placename" content="Addis Ababa" />
      <meta name="geo.position" content="9.0320;38.7421" />
      <meta name="ICBM" content="9.0320, 38.7421" />
      
      {/* Favicon and other icons should be added here */}
    </Head>
  );
} 