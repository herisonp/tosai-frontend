import './CardSkeleton.css';

export function CardSkeleton() {
	return (
		<ul className='card-list'>
			<li className='card-skeleton'>
				<div className='card-skeleton__image' />
				<div className='card-skeleton__info'>
					<div className='card-skeleton__text card-skeleton__text_title' />
					<div className='card-skeleton__text card-skeleton__text_description' />
					<div className='card-skeleton__text card-skeleton__text_description' />
				</div>
			</li>
			<li className='card-skeleton'>
				<div className='card-skeleton__image' />
				<div className='card-skeleton__info'>
					<div className='card-skeleton__text card-skeleton__text_title' />
					<div className='card-skeleton__text card-skeleton__text_description' />
					<div className='card-skeleton__text card-skeleton__text_description' />
				</div>
			</li>
			<li className='card-skeleton'>
				<div className='card-skeleton__image' />
				<div className='card-skeleton__info'>
					<div className='card-skeleton__text card-skeleton__text_title' />
					<div className='card-skeleton__text card-skeleton__text_description' />
					<div className='card-skeleton__text card-skeleton__text_description' />
				</div>
			</li>
		</ul>
	);
}
