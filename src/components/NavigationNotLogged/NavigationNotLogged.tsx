import Link from 'next/link';
import { Button } from '../Button/Button';
import './NavigationNotLogged.css';

export function NavigationNotLogged() {
	return (
		<div className='navigation-not-logged'>
			<Link href='/login' className='button button_outline'>
				Login
			</Link>
			<Link href='/register' className='button button_primary'>
				Inscreva-se
			</Link>
		</div>
	);
}
