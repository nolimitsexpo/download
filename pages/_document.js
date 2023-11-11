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

          {/* Add the provided text */}
          <div>
            <p>
              Get free thumbnail images of all YouTube videos in Full HD (1080),
              HD (720), SD and even small sizes. Currently supported formats:
              YouTube videos (HD, HQ, 1080p, 4K)
            </p>
            <p>
              What is this YouTube Thumbnail Grabber website for? People use this
              YouTube thumbnail download website to get thumbnails of any YouTube
              video. This can be used in presentations, animation work, or many
              other activities.
            </p>
            {/* Add the rest of the text here */}
            {/* ... */}
          </div>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
