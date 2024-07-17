'use server';
import { Services } from '@/types/Services';
import { api } from './api';

export async function getServices() {
	try {
		// delay
		await new Promise((resolve) => setTimeout(resolve, 2000));
		const { SUPABASE_CLIENT_ANON_KEY } = process.env;
		const { data, error } = await api('/services', {
			headers: {
				apikey: SUPABASE_CLIENT_ANON_KEY,
				Authorization: `Bearer ${SUPABASE_CLIENT_ANON_KEY}`
			}
		});
		if (error) throw new Error(error);
		const services: Services[] = data;
		return {
			data: services
		};
	} catch (error) {
		const err = error as Error;
		console.error(err);
		return {
			error: err.message
		};
	}
}
