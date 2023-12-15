import { dummyTennisPlayers } from "../lib/dummy-tennis-players";
import TennisPlayerCard from "./tennis-player-card";

const getPlayers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return dummyTennisPlayers;
};

export default async function TennisPlayersList() {
  const players = await getPlayers();

  return (
    <>
      {players.map((player) => (
        <TennisPlayerCard key={player.id} player={player} />
      ))}
    </>
  );
}
