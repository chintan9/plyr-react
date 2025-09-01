// src/App.jsx

import { useRef } from "react";
import { Plyr } from "plyr-react";

// The source config for a YouTube video
const youtubeVideoSrc = {
  type: "video",
  sources: [
    {
      src: "aqz-KE-bpKQ", // YouTube video ID or URL
      provider: "youtube",
    },
  ],
};

/**
 * Root React component that renders a heading and a Plyr video player configured with `youtubeVideoSrc`.
 *
 * @returns {JSX.Element} The app UI containing a header and the Plyr player.
 */
function App() {
  const ref = useRef(null);

  return (
    <div className="App">
      <h1>Plyr React in GitHub Codespaces</h1>
      <Plyr ref={ref} source={youtubeVideoSrc} />
    </div>
  );
}

export default App;
