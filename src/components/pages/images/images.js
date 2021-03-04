import { useState } from 'react';
import { Layout } from '../../hocs';
import { useMarsImages, usePageTitle } from '../../../hooks';
import { MarsImage } from '../../common';
import { Container } from './images.style';
import Pagination from '../../ui/pagination';

const Images = () => {
	usePageTitle('Images');
	const [date, setDate] = useState('2020-07-14');
	const [page, setPage] = useState(1);
	const { images, loading } = useMarsImages(date);
	const totalImages = images.length;
	const pageGroup = 10;
	const firstImage = (page - 1) * pageGroup;
	const lastImage = firstImage + pageGroup;
	const selectedImages = images.slice(firstImage, lastImage);

	return (
		<Container>
			<div className="search-box">
				Earth Date:
				<input type="date" value={date} onChange={e => setDate(e.target.value)} />
			</div>
			{loading ? (
				<h2>Loading Images...</h2>
			) : selectedImages.length === 0 ? (
				<h2>No Results.</h2>
			) : (
				<>
					<div className="images">
						{selectedImages.map(img => (
							<MarsImage key={img.id} image={img} />
						))}
					</div>
					<div className="pagination-box">
						<Pagination
							onChange={setPage}
							total={totalImages}
							page={page}
							pageGroup={pageGroup}
						/>
					</div>
				</>
			)}
		</Container>
	);
};

export default Layout(Images);
