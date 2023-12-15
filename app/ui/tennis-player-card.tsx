import Image from "next/image";
import Link from "next/link";
import { TennisPlayer } from "../lib/definitions";
import ReactCountryFlag from "react-country-flag";

export default function TennisPlayerCard({ player }: { player: TennisPlayer }) {
  return (
    <div className="w-100 border m-5 flex-wrap player-card">
        <Link href={`/players/${player.id}`}>
        <Image src={player.image} alt={player.name} width={300} height={300} />
        <div className="m-2">
          <p className="text-lg font-semibold">{player.name}</p>
          <p className="text-sm">
            {player.country}
            <ReactCountryFlag
              countryCode={player.countryCode}
              className="emojiFlag"
              svg
              style={{
                width: "2em",
                height: "2em",
                marginLeft: "0.5em",
              }}
            />
          </p>
          <p className="text-sm italic">{player.age} years old</p>
        </div>
    </Link>
      </div>
  );
}
