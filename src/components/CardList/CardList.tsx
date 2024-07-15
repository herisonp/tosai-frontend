import { Card } from '../Card/Card';
import './CardList.css';

export function CardList() {
	return (
		<ul className='card-list'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</ul>
	);
}
