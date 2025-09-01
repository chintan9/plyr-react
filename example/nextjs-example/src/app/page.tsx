// src/app/page.tsx

"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import type { APITypes } from "plyr-react";

// Dynamically import the Plyr component to ensure it's only loaded on the client-side.
const Plyr = dynamic(() => import("plyr-react").then((mod) => mod.Plyr), {
  ssr: false,
});

// Import the CSS for the player
import "plyr-react/plyr.css";

// Create an array of video sources
const videoSources = [
  {
    type: "video" as const,
    sources: [{ src: "aqz-KE-bpKQ", provider: "youtube" as const }],
  },
  {
    type: "video" as const,
    sources: [{ src: "dSBNtxUVvg8", provider: "youtube" as const }],
  },
  {
    type: "video" as const,
    sources: [{ src: "KLuTLF3x9sA", provider: "youtube" as const }],
  },
];

export default function HomePage() {
  // Create an array of refs, one for each player
  const playerRefs = [
    useRef<APITypes>(null),
    useRef<APITypes>(null),
    useRef<APITypes>(null),
  ];

  const handlePlayAll = () => {
    console.log("Playing all videos...");
    playerRefs.forEach((playerRef) => {
      if (playerRef.current?.plyr) {
        playerRef.current.plyr.play();
      }
    });
  };

  const handlePauseAll = () => {
    console.log("Pausing all videos...");
    playerRefs.forEach((playerRef) => {
      if (playerRef.current?.plyr) {
        playerRef.current.plyr.pause();
      }
    });
  };

  return (
    <main>
      <h1>Plyr React: Multiple Players Example</h1>

      <div className="controls">
        <button onClick={handlePlayAll}>Play All</button>
        <button onClick={handlePauseAll}>Pause All</button>
      </div>

      <div className="video-grid">
        {videoSources.map((source, index) => (
          <div className="player-container" key={source.sources[0].src}>
            <Plyr ref={playerRefs[index]} source={source} />
          </div>
        ))}
      </div>
    </main>
  );
}
