/* eslint-disable */
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: string;
  children?: React.ReactNode;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  author = "Aditya Janjanam",
  image = "/profile.png",
  url = "https://adityajanjanam.com",
  type = "website",
  children,
  canonical,
  noindex = false,
  nofollow = false,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}) => {
  const fullUrl = canonical || url;
  const fullImageUrl = image.startsWith("http")
    ? image
    : `https://adityajanjanam.com${image}`;

  // Enhanced Person structured data
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Janjanam",
    alternateName: "Aditya",
    jobTitle: "Full Stack Developer",
    description: description,
    url: fullUrl,
    image: fullImageUrl,
    sameAs: [
      "https://github.com/adityajanjanam",
      "https://www.linkedin.com/in/janjanamaditya",
      "https://leetcode.com/adityajanjanam",
      "https://twitter.com/adityajanjanam",
    ],
    knowsAbout: [
      "React.js",
      "Node.js",
      "Flutter",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Python",
      "Mobile Development",
      "Web Development",
      "Full Stack Development",
      "Application Packaging",
      "Software Testing",
      "UI/UX Design",
      "AWS",
      "Docker",
      "MongoDB",
      "Express.js",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      description:
        "Develops web and mobile applications using modern technologies",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
    knowsLanguage: ["English", "Telugu", "Hindi", "Tamil", "Kannada"],
    availableForHire: true,
    alumniOf: {
      "@type": "Organization",
      name: "Computer Science Graduate",
    },
  };

  // WebPage structured data
  const webpageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: fullUrl,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Aditya Janjanam Portfolio",
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://adityajanjanam.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: fullUrl,
        },
      ],
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aditya Janjanam Portfolio",
    url: "https://adityajanjanam.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.google.com/search?q={search_term_string}+site:adityajanjanam.com",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aditya Janjanam",
    url: "https://adityajanjanam.com",
    logo: "https://adityajanjanam.com/logo512.png",
    sameAs: personStructuredData.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "janjanamaditya@gmail.com",
        contactType: "customer support",
        availableLanguage: personStructuredData.knowsLanguage,
      },
    ],
  };

  const robotsContent =
    noindex || nofollow
      ? `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content={author} />
        <meta name="robots" content={robotsContent} />
        <meta name="googlebot" content={robotsContent} />
        <meta name="bingbot" content={robotsContent} />
        <meta name="application-name" content="Aditya Janjanam Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Aditya Janjanam" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Additional SEO Meta Tags */}
        <meta name="copyright" content={author} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />

        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />
    <link rel="alternate" hrefLang="en" href={fullUrl} />

        {/* Favicon and Touch Icons */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* NOTE: The apple-touch-icon link should be specified in the static HTML <head>
            (for example, add <link rel="apple-touch-icon" href="/apple-touch-icon.png"> to public/index.html)
            so that it is present in the document head rather than injected at runtime. */}

        {/* Enhanced Open Graph Meta Tags */}
        <meta property="og:site_name" content="Aditya Janjanam Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:locale" content="en_US" />
        {modifiedTime && <meta property="og:updated_time" content={modifiedTime} />}
        {personStructuredData.sameAs.map((profileUrl) => (
          <meta key={profileUrl} property="og:see_also" content={profileUrl} />
        ))}
        {publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {modifiedTime && (
          <meta property="article:modified_time" content={modifiedTime} />
        )}
        {section && <meta property="article:section" content={section} />}
        {tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}

        {/* Enhanced Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adityajanjanam" />
        <meta name="twitter:creator" content="@adityajanjanam" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:url" content={fullUrl} />

        {/* LinkedIn Meta Tags */}
        <meta property="og:image:secure_url" content={fullImageUrl} />
        <meta property="og:image:type" content="image/png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(webpageStructuredData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>

        {/* Preload critical resources */}
        <link rel="preload" href="/profile.png" as="image" />
        <link rel="preload" href="/og-image.png" as="image" />
      </Helmet>
      {children}
    </>
  );
};

export default SEO;
