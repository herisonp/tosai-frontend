import Link from 'next/link';

import { Dela_Gothic_One } from 'next/font/google';
const delaGotichOne = Dela_Gothic_One({ subsets: ['latin'], weight: '400' });

import './not-found.css';
import '../components/Button/Button.css';

export default function NotFound() {
	return (
		<div className='not-found'>
			<h2 className={`${delaGotichOne.className} not-found__title`}>
				Página não encontrada 😿...
			</h2>
			<p className='not-found__text'>
				Não se preocupe, você acessou uma URL que não existe. Quem nunca?
			</p>
			<Link className='button button_primary' href='/'>
				Voltar para home
			</Link>
		</div>
	);
}
