import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO = ({
  title = "NannyBay | Professional Home Services in Nigeria",
  description = "NannyBay provides trusted, vetted home service professionals — housekeeping, nannies, babysitters, chefs, drivers, and elderly care. Simplifying Life, One Home At A Time.",
  keywords = "home services Nigeria, nanny Lagos, housekeeping Lagos, elderly care Nigeria, chef at home, babysitter Lagos, NannyBay",
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph — for WhatsApp, Facebook link previews */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NannyBay" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
