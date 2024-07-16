import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'tosaí',
	description: 'O lugar favorito do seu pet!'
};

export default function RootLayout({
	children,
	modal
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={inter.className}>
				{modal}
				<Header />
				<main className='main'>{children}</main>
				<div id='modal-root' />
			</body>
		</html>
	);
}
