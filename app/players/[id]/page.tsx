import Loading from "@/app/(overview)/loading";
import { dummyTennisPlayers } from "@/app/lib/dummy-tennis-players";
import TennisPlayersVideosList from "@/app/ui/tennis-player-videos-list";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const metadata : Metadata = {
  title: "Tennis Player",
  description: "Tennis Player",
};

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const player = dummyTennisPlayers.find((player) => player.id === Number(id));

  if (!player) {
    notFound();
  }

  return (
    <>
      <main className="flex w-full h-full flex-col mt-20 mx-6">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row">
            <Link className={"mr-5"} href="/">
              {"<- "}Back
            </Link>
          </div>
          <p className="md:hidden font-semibold">{player.name}</p>

          <div className="hidden md:block">
            <Image
              src={player.image}
              alt={player.name}
              width={100}
              height={100}
            />
            <p className="font-semibold">{player.name}</p>
            <p>{player.country}</p>
            <>{player.age} years old</>
          </div>
        </div>

        {player.videos && player.videos.length > 0 ? (
          <Suspense fallback={<Loading />}>
            <TennisPlayersVideosList player={player} />
          </Suspense>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <p className="text-2xl font-semibold">No videos found</p>
            <p className="text-lg">Try again later</p>
          </div>
        )}
      </main>
    </>
  );
}
