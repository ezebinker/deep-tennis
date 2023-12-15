import { Suspense } from "react";
import TennisPlayersList from "./ui/tennis-players-list";
import Loading from "./(overview)/loading";

export default async function Home() {
  return (
    <div className="mt-20 justify-center w-full flex flex-wrap">
      <Suspense fallback={<Loading />}>
        <TennisPlayersList/>
      </Suspense>
    </div>
  );
}
