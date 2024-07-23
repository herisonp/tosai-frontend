import { Suspense } from "react";
import { CardSkeleton } from "@/components/CardSkeleton/CardSkeleton";
import { CardList } from "@/components/CardList/CardList";
import { Cover } from "@/components/Cover/Cover";
import { getServices } from "@/services/getServices";
import { Services } from "@/types/Services";

export default function Home() {
  return (
    <>
      <Cover />
      <Suspense fallback={<CardSkeleton />}>
        <CardList />
      </Suspense>
    </>
  );
}
