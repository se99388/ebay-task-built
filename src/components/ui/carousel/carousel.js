import { useState } from 'react';
import { chunk } from 'lodash';

import { Container, CarouselItem } from './carousel.style';

const Carousel = ({ children, groups, itemWidth, spacing }) => {
	const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

	const childrenGroups = chunk(children, groups);
	const carouselItems = childrenGroups.map((childs, i) => (
		<CarouselItem key={i} offset={-currentGroupIndex * 100}>
			{childs}
		</CarouselItem>
	));

	console.log(currentGroupIndex, carouselItems.length);

	const disabledBack = currentGroupIndex === 0;
	const disabledNext = currentGroupIndex + 1 === carouselItems.length;

	const contentWidth = itemWidth * groups + spacing * (groups - 1);

	return (
		<Container contentWidth={contentWidth}>
			<div className="wrapper">
				<button
					disabled={disabledBack}
					onClick={() => {
						setCurrentGroupIndex(currentGroupIndex => currentGroupIndex - 1);
					}}
				>
					<span className="material-icons">keyboard_arrow_left</span>
				</button>
				<div className="carousel-items">{carouselItems}</div>
				<button
					disabled={disabledNext}
					onClick={() => {
						setCurrentGroupIndex(currentGroupIndex => currentGroupIndex + 1);
					}}
				>
					<span className="material-icons">keyboard_arrow_right</span>
				</button>
			</div>
			<div className="pagination">
				Page {currentGroupIndex + 1}/{carouselItems.length}
			</div>
		</Container>
	);
};

export default Carousel;
