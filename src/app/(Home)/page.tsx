import { Suspense } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { CardList } from '@/components/CardList/CardList';
import { Cover } from '@/components/Cover/Cover';

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
