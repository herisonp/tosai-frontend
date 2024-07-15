import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './SearchForm.css';

export function SearchForm() {
	return (
		<form className='search-form'>
			<Input type='text' placeholder='Pesquise um serviço' name='search' />
			<Button type='submit' variant='secundary'>
				Pesquisar
			</Button>
		</form>
	);
}
