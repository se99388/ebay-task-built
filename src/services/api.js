import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.nasa.gov',
	headers: { 'Content-Type': 'application/json' },
	params: {
		api_key: 'myQUmISVwoGsbxRK4Yndexyq9YN0sGwqa2r8ojq0'
	}
});

export const getImages = (earthDate, page) => {
	return instance.get(
		`/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}${
			page ? `&page=${page}` : ''
		}`
	);
};

export const getWeather = () => {
	// return instance.get(`/insight_weather/?feedtype=json&ver=1.0`);
	return new Promise((resolve, reject) => {
		const weatherResponse = require('./wethear.json');
		resolve(weatherResponse);
	});
};
