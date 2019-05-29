
import axios from 'axios';

export const loggedAxios = axios.create();
loggedAxios.interceptors.request.use((config) => {
	if (!config.user) {
		throw new Error('User not set');
	}
	config.headers['Authorization'] =`JWT ${config.user.access}`;
	return config;
});

export const unloggedAxios = axios.create();
