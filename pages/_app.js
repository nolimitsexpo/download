import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="YouTube Thumbnail Downloader - Download Thumbnails from Youtube in Different Qualities"
        description="Download thumbnails from YouTube videos in different qualities using this simple YouTube Thumbnail Downloader"
        canonical="https://www.downloadthumbnailfromyt.com/"
        openGraph={{
          url: "https://www.downloadthumbnailfromyt.com/",
          title: "YouTube Thumbnail Downloader - Download Thumbnails from Youtube in Different Qualities",
          description: "Download high-quality thumbnails from YouTube videos. with Our Youtube Thumbnail Grabber",
          site_name: "Download Thumbnail From Youtube in Different Qualities",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
