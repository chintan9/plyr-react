// src/App.jsx

import { useRef } from "react";
import { Plyr } from "plyr-react";

function VideoGallery() {
  const video1 = {
    type: "video",
    sources: [{ src: "aqz-KE-bpKQ", provider: "youtube" }],
  };
  const video2 = {
    type: "video",
    sources: [{ src: "bTqVqk7FSmY", provider: "youtube" }],
  };

  return (
    <div>
      <h2>Video 1</h2>
      <Plyr source={video1} />

      <h2>Video 2</h2>
      <Plyr source={video2} />
    </div>
  );
}

function App() {
  const ref = useRef(null);

  return (
    <div className="App">
      <h1>Plyr React in GitHub Codespaces</h1>
      <VideoGallery />
    </div>
  );
}

export default App;
