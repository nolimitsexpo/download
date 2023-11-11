import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Download Thumbnail From Youtube"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Downloade Thumbnail From Youtube",
          description: "Download high-quality thumbnails from YouTube videos. with Our Youtube Thumbnail Grabber",
          site_name: "Download Thumbnail From Youtube",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
