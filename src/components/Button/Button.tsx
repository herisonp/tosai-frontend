'use client';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import './Button.css';
import Link, { LinkProps } from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secundary' | 'ghost';
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
