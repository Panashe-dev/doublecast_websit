import { BUSINESS } from "../data/site";
import { SERVICES } from "../data/services";

const OG_IMAGE = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Double Cast Construction & Civil Works, Class 1 builders in Harare, Zimbabwe",
};

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const meta = (key, name, content) =>
  `<meta ${key}="${name}" content="${escapeAttr(content)}" />`;

export function buildSchema(route, siteUrl) {
  const pageUrl = `${siteUrl}${route.path}`;
  const businessId = `${siteUrl}/#business`;
  const websiteId = `${siteUrl}/#website`;
  const isHome = route.path === "/";

  const graph = [
    {
      "@type": "GeneralContractor",
      "@id": businessId,
      name: BUSINESS.name,
      alternateName: BUSINESS.shortName,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/icon-512.png`,
      image: `${siteUrl}${OG_IMAGE.path}`,
      description: BUSINESS.description,
      email: BUSINESS.email,
      telephone: BUSINESS.phones[0].e164,
      contactPoint: BUSINESS.phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone.e164,
        contactType: "customer service",
        areaServed: "ZW",
      })),
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressCountry: BUSINESS.address.country,
      },
      areaServed: [
        { "@type": "City", name: "Harare" },
        { "@type": "Country", name: "Zimbabwe" },
      ],
      sameAs: BUSINESS.sameAs,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Construction services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.desc,
            url: `${siteUrl}/services/#${service.slug}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: BUSINESS.name,
      publisher: { "@id": businessId },
      inLanguage: "en",
    },
    {
      "@type": route.schemaType,
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: route.title,
      description: route.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      inLanguage: "en",
      ...(isHome ? {} : { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } }),
    },
  ];

  if (!isHome) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: route.name, item: pageUrl },
      ],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function buildHead(route, { siteUrl, verification, fontPreloads = [] }) {
  const pageUrl = `${siteUrl}${route.path}`;
  const imageUrl = `${siteUrl}${OG_IMAGE.path}`;
  const tags = [
    meta("name", "description", route.description),
    meta(
      "name",
      "robots",
      route.noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    ),
  ];

  if (verification) {
    tags.push(meta("name", "google-site-verification", verification));
  }

  fontPreloads.forEach((href) => {
    tags.push(
      `<link rel="preload" href="${escapeAttr(href)}" as="font" type="font/woff2" crossorigin />`,
    );
  });

  if (route.preloadImage) {
    const { src, srcSet, sizes } = route.preloadImage;
    tags.push(
      `<link rel="preload" as="image" href="${escapeAttr(src)}" imagesrcset="${escapeAttr(srcSet)}" imagesizes="${escapeAttr(sizes)}" fetchpriority="high" />`,
    );
  }

  if (route.noindex) return tags.join("\n    ");

  tags.push(
    `<link rel="canonical" href="${escapeAttr(pageUrl)}" />`,
    meta("property", "og:type", "website"),
    meta("property", "og:site_name", BUSINESS.name),
    meta("property", "og:locale", "en_GB"),
    meta("property", "og:title", route.title),
    meta("property", "og:description", route.description),
    meta("property", "og:url", pageUrl),
    meta("property", "og:image", imageUrl),
    meta("property", "og:image:width", OG_IMAGE.width),
    meta("property", "og:image:height", OG_IMAGE.height),
    meta("property", "og:image:alt", OG_IMAGE.alt),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", route.title),
    meta("name", "twitter:description", route.description),
    meta("name", "twitter:image", imageUrl),
    meta("name", "twitter:image:alt", OG_IMAGE.alt),
    `<script type="application/ld+json">${JSON.stringify(
      buildSchema(route, siteUrl),
    ).replace(/</g, "\\u003c")}</script>`,
  );

  return tags.join("\n    ");
}
