import { Dela_Gothic_One } from 'next/font/google';

import './Cover.css';
import { SearchForm } from '../SearchForm/SearchForm';

const delaGotichOne = Dela_Gothic_One({ subsets: ['latin'], weight: '400' });

export function Cover() {
	return (
		<section className='cover'>
			<span className='cover__badge'>banho, tosa e muito carinho 💕</span>
			<h1 className={`${delaGotichOne.className} cover__heading`}>
				O lugar favorito do seu pet 🐶{' '}
				<span className='cover__heading-highlight'>!</span>
			</h1>
			<p className='cover__text'>
				Pesquise ou escolha abaixo o serviço e agende online, agora mesmo.
			</p>
			<SearchForm />
		</section>
	);
}
