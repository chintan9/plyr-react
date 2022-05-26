import dynamic from "next/dynamic";

const VideoList = dynamic(() => import("../src/video-list"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Video List</h1>
      <VideoList />
    </div>
  );
}
