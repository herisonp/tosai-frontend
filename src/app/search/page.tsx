import { CardList } from "@/components/CardList/CardList";
import { CardSkeleton } from "@/components/CardSkeleton/CardSkeleton";
import { SearchForm } from "@/components/SearchForm/SearchForm";
import { Suspense } from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  return (
    <>
      <div className="max-w-[540px] mx-auto">
        <SearchForm search={searchParams.search} />
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <CardList search={searchParams.search} />
      </Suspense>
    </>
  );
}
