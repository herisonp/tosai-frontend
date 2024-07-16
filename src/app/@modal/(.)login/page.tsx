import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { Modal } from '@/components/Modal/Modal';

export default function LoginModal() {
	return (
		<Modal>
			<form className='flex flex-col gap-4'>
				<Input type='text' placeholder='Telefone' />
				<Input type='password' placeholder='Sua senha' />
				<Button type='submit'>Entrar</Button>
			</form>
		</Modal>
	);
}
