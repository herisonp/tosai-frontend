'use server';

export async function api(endpoint: RequestInfo | URL, options?: RequestInit) {
	try {
		const { BASE_URL } = process.env;
		const fetchOptions: RequestInit = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			...options
		};
		const res = await fetch(BASE_URL + endpoint, fetchOptions);
		const data = await res.json();
		if (!data) {
			throw new Error('Erro ao carregar os dados...');
		}
		return {
			data
		};
	} catch (error) {
		const err = error as Error;
		console.error(err);
		return {
			error: err.message
		};
	}
}
