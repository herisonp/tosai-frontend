'use client';
import './Modal.css';
import { type ElementRef, MouseEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<'dialog'>>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onClose() {
		router.back();
	}

	function handleCloseOnOverlay(event: MouseEvent<HTMLDialogElement>) {
		if (event.target === event.currentTarget) onClose();
		return;
	}

	return createPortal(
		<div className='modal'>
			<dialog
				ref={dialogRef}
				onClose={onClose}
				onClick={handleCloseOnOverlay}
				className='modal__dialog'
			>
				<div className='modal__content'>
					<button onClick={onClose} className='modal__button-closed'>
						X
					</button>
					{children}
				</div>
			</dialog>
		</div>,
		document.querySelector('#modal-root')!
	);
}
