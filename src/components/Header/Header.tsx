import Link from 'next/link';
import { Logo } from '../Logo/Logo';
import { NavigationLogged } from '../NavigationLogged/NavigationLogged';
import { NavigationNotLogged } from '../NavigationNotLogged/NavigationNotLogged';
import './Header.css';

export function Header() {
	const isLoggedIn = true;
	return (
		<header className='header'>
			<Link href='/'>
				<Logo />
			</Link>
			{isLoggedIn ? <NavigationNotLogged /> : <NavigationLogged />}
		</header>
	);
}
