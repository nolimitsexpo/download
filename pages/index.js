import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Download Thumbnail From Youtube
        </h1>
        <p className="text-gray-600 box-center">
          Download thumbnails from YouTube videos in various qualities using this straightforward Thumbnail Downloader. Simply enter the YouTube video URL or ID below, select the desired quality, and download the thumbnail.
        </p>
        <p>
          Get free thumbnail images of all YouTube videos in Full HD (1080), HD (720), SD and even small sizes. Currently supported formats: YouTube videos (HD, HQ, 1080p, 4K)
        </p>
        <p>
          What is this YouTube Thumbnail Grabber website for?
          People use this YouTube thumbnail download website to get thumbnails of any YouTube video. This can be used in presentations, animation work, or many other activities.
        </p>
        <p>
          How to use this website to download YouTube thumbnails?
          I have shared some screenshots in which I have explained to you how to use this YouTube downloader website. The first step is pretty simple: simply copy any YouTube link you want a thumbnail for. download YouTube cover You can easily download the cover of your tube
        </p>
        <p>
          Now paste this URL into the input box. As soon as you paste this link, thumbnails of different sizes will be automatically generated. Now click on the download button of the thumbnail and it will be automatically downloaded to your system. If you use an Android phone you need to save these images and if you use an iPhone I don't know how to do it?
        </p>
        <p>
          Is it legal to download YouTube thumbnails?
          Of course, it is 100% legal to download any YouTube video thumbnail, but as you know, thumbnails and videos are copyrighted products, you must obtain copyright permissions to be able to reuse them.
        </p>
        <p>
          Compatibility of this YouTube thumbnail capture website
          This YouTube thumbnail download website will work fine on all devices except iPhone because iPhone does not allow saving images on iPhone. But if you use a jailbroken iPhone, no problem. On the other hand, it will work well on almost all types of Android devices and laptop or desktop systems.
        </p>
        <p>
          Is there a copyright risk in YouTube thumbnails?
          Any YouTube screenshot you upload has the respective copyright of the owner of such videos. If you want to use it in your work, you must request permission.
        </p>
        <p>
          Especially if you are reusing YouTube, this can create problems, but if your plan is external to YouTube. how to use it on a website to create logos or any other type of Photoshop content, no problem. He receives almost no DMCA complaints regarding this particular YouTube thumbnail.
        </p>
        <p>
          Is reusing YouTube thumbnails SEO friendly?
          No, it's not, in short it's not very easy to use because almost all the thumbnails on YouTube are indexed by Google. So Google knows which is unique and which is duplicate. So it's not SEO optimized, as you know. But you can do some things on this thumbnail, I mean get some unique effects using Photoshop or any other software that can make your thumbnail unique again so that it can be reused and make it SEO friendly again.
        </p>
        <p>
          download the thumbnail of a YouTube video
          www.downloadthumbnailfromyt.com - Copyright 2021
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
