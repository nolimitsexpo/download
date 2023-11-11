import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const downloadThumbnail = (url, resolution) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `thumbnail_${resolution.replace(/\s+/g, "_")}.jpg`;
    link.click();
  };

  const getYouTubeThumbnail = (url) => {
    // ... (your existing code)

    if (match && match[1].length === 11) {
      // ... (your existing code)

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
      {/* ... (your existing code) */}
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => {
                    copy(option.url);
                    downloadThumbnail(option.url, option.resolution);
                  }}
                >
                  Copy & Download
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
