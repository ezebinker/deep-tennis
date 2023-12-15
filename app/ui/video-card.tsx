import { Video } from "../lib/definitions";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="w-full lg:w-1/4 border m-5 p-5 flex-wrap rounded-lg">
      <p className="mb-3">{video.title}</p>
      <iframe
        src={video.url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-96"
      ></iframe>
    </div>
  );
}
