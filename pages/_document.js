import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Add your Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-364TCL2H0V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-364TCL2H0V');
            `,
          }}
        />

        {/* Add styles for the menu */}
        <style>{`
          header {
            text-align: center;
          }

          nav {
            display: inline-block;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          li {
            display: inline;
            margin-right: 20px;
          }

          a {
            color: blue;
            font-weight: bold;
            text-decoration: none;
          }
        `}</style>
      </Head>
      <body>
        {/* Add your menu here */}
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        
        <Main />
        <NextScript />
          <center>
          {/* Add the provided text */}
        <div>
          <p>
            Get free thumbnail images of all YouTube videos in Full HD (1080),
            HD (720), SD and even small sizes. Currently supported formats:
            YouTube videos (HD, HQ, 1080p, 4K)
          </p>
           <h2>What is this YouTube Thumbnail Grabber website for? </h2>   
          <p>
            People use this YouTube thumbnail download website to get thumbnails of any YouTube
            video. This can be used in presentations, animation work, or many
            other activities.
          </p>
            <h2>How to use this website to download YouTube thumbnails? </h2>   
          <p>
            I have shared some screenshots in which I have explained to you how to use
            this YouTube downloader website. The first step is pretty simple:
            simply copy any YouTube link you want a thumbnail for. download
            YouTube cover You can easily download the cover of your tube
          </p>
          <p>
            Now paste this URL into the input box. As soon as you paste this
            link, thumbnails of different sizes will be automatically generated.
            Now click on the download button of the thumbnail and it will be
            automatically downloaded to your system. If you use an Android phone
            you need to save these images and if you use an iPhone I don't know
            how to do it?
          </p>
          <h2>Is it legal to download YouTube thumbnails? </h2>
          <p>
            Of course, it is 100% legal to download any YouTube video thumbnail, but as you know,
            thumbnails and videos are copyrighted products, you must obtain
            copyright permissions to be able to reuse them.
          </p>
          <p>
            Compatibility of this YouTube thumbnail capture website This YouTube
            thumbnail download website will work fine on all devices except
            iPhone because iPhone does not allow saving images on iPhone. But if
            you use a jailbroken iPhone, no problem. On the other hand, it will
            work well on almost all types of Android devices and laptop or
            desktop systems.
          </p>
              <h2>Is there a copyright risk in YouTube thumbnails?</h2>
          <p>
            Any YouTube screenshot you upload has the respective copyright of the owner of
            such videos. If you want to use it in your work, you must request
            permission.
          </p>
          <p>
            Especially if you are reusing YouTube, this can create problems, but
            if your plan is external to YouTube. how to use it on a website to
            create logos or any other type of Photoshop content, no problem. He
            receives almost no DMCA complaints regarding this particular YouTube
            thumbnail.
          </p>
          <h2>Is reusing YouTube thumbnails SEO friendly?</h2>
          <p>
             No, it's not, in short
            it's not very easy to use because almost all the thumbnails on
            YouTube are indexed by Google. So Google knows which is unique and
            which is duplicate. So it's not SEO optimized, as you know. But you
            can do some things on this thumbnail, I mean get some unique effects
            using Photoshop or any other software that can make your thumbnail
            unique again so that it can be reused and make it SEO friendly again.
          </p>
          <p>
            download the thumbnail of a YouTube video
            www.downloadthumbnailfromyt.com - Copyright 2021
          </p>
              </div>
              </center>
      </body>
    </Html>
    );
  }
}

export default MyDocument;
