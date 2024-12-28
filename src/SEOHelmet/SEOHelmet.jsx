import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

// SEOHelmet Component
const SEOHelmet = ({
  title,
  description,
  keywords,
  ogImage,
  url,
  type = "website", // Default to "website"
}) => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="WHITER - All White All Right" />

    {/* Open Graph Meta Tags for Social Sharing */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description: description,
        url: url,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.whiter.com", // Update with your homepage URL
            },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: url,
            },
          ],
        },
      })}
    </script>
  </Helmet>
);

export default SEOHelmet;

SEOHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string, // Optional
};
