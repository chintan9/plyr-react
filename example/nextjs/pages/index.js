import dynamic from "next/dynamic";

const VideoList = dynamic(() => import("../src/video-list"), { ssr: false });

/**
 * The function returns a component that displays a heading and a list of videos.
 * @returns The `Home` component is being returned, which contains a `div` element with a heading
 * "Video List" and a `VideoList` component.
 */
export default function Home() {
  return (
    <div>
      <h1>Video List</h1>
      <VideoList />
    </div>
  );
}
