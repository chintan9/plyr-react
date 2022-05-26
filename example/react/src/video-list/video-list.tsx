import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import contents from "./contents.json";

export default function VideoList() {
  return (
    <ul className="video-list">
      {contents.videos.map((video) => (
        <li key={video.id} className="video-item">
          <Plyr
            source={{
              type: "video",
              // @ts-ignore
              sources: [{ src: video.id, provider: video.source }],
            }}
          />
        </li>
      ))}
    </ul>
  );
}
