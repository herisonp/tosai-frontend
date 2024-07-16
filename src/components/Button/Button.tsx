'use client';
import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secundary' | 'outline' | 'ghost';
}

export function Button({
	children,
	variant = 'primary',
	...props
}: ButtonProps) {
	return (
		<button className={`button button_${variant}`} {...props}>
			{children}
		</button>
	);
}
