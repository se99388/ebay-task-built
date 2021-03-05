import { useState } from 'react';
import { usePageTitle } from '../../../hooks';
import { Layout } from '../../hocs';
import { Pagination, Chart } from '../../ui';
import { getWeather } from '../../../services/api';
import { useRequest } from '../../../hooks';
import { Container } from './weather.style';

const Weather = () => {
	usePageTitle('Weather');
	const { data, loading } = useRequest(getWeather);
	const weatherData = Object.values(data ?? {});
	const chartData = {
		title: 'Mars weather Data',
		argumentField: 'season',
		series: [
			{ valueField: 'temp', nameField: 'Atmospheric temperature sensor' },
			{ valueField: 'pre', nameField: 'Atmospheric pressure sensor' },
			{ valueField: 'hws', nameField: 'Horizontal wind speed sensor' }
		],
		data: Object.entries(weatherData).map(([key, value]) => {
			return {
				id: key,
				temp: value.AT?.av,
				pre: value.PRE?.av,
				hws: value.HWS?.av,
				season: value.Season
			}
		})
	}
	return (
		<Container>
			{loading ? (
				<h2>Loading Weather Data...</h2>
			) : (
					<div>
						{chartData ? (
							<div>
								<Chart
									dataSource={chartData.data}
									title={chartData.title}
									argumentField={chartData.argumentField}
									series={chartData.series}
								/>
							</div>
						) : (
								<div>No Results...</div>
							)}
					</div>
				)}
		</Container>
	);
};

export default Layout(Weather);
