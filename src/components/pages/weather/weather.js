import { useState } from 'react';
import { usePageTitle } from '../../../hooks';
import { Layout } from '../../hocs';
import { Pagination } from '../../ui';
import { getWeather } from '../../../services/api';
import { useRequest } from '../../../hooks';
import { Container } from './weather.style';
const Weather = () => {
	usePageTitle('Weather');
	const [page, setPage] = useState(1);
	const { data, loading } = useRequest(getWeather);
	const weatherData = Object.values(data ?? {});

	return (
		<Container>
			{loading ? (
				<h2>Loading Weather Data...</h2>
			) : (
				<>
					<div className="cards">
						{weatherData ? (
							<div>List of cards...</div>
							// weatherData.map((details, i) => <Card key={i} details={details}/>)
						) : (
							<div>No Results...</div>
						)}
					</div>
					{/* <Pagination  /> */}
				</>
			)}
		</Container>
	);
};

export default Layout(Weather);
