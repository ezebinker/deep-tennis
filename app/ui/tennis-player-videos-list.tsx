import { TennisPlayer, Video } from "../lib/definitions";
import { dummyTennisPlayers } from "../lib/dummy-tennis-players";
import VideoCard from "./video-card";

const getVideos = async (player: TennisPlayer) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return player.videos;
};

export default async function TennisPlayersVideosList({
  player,
}: {
  player: TennisPlayer;
}) {
  const videos = await getVideos(player);

  return (
    <div className="justify-center w-full flex flex-wrap mx-3">
      {videos && videos.map((video: Video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
