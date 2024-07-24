'use client';
import { InputHTMLAttributes } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
	return <input className='input' {...props} />;
}
