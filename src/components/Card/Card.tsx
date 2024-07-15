'use client';
import './Card.css';

export function Card() {
	return (
		<li className='card'>
			<div className='card__image' />
			<div className='card__info'>
				<h2 className='card__title'>Título do serviço</h2>
				<p className='card__description'>Descrição do serviço</p>
				<div className='card__price-group'>
					<span className='card__price'>R$ 120,00</span>
					<span className='card__full-price'>R$ 180,00</span>
				</div>
			</div>
		</li>
	);
}
