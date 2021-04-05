import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from '../../hocs';
import { useMarsImages, usePageTitle, useBreakpoints } from '../../../hooks';
import { Button, Carousel } from '../../ui';
import { MarsImage, MARS_IMAGE_WIDTH } from '../../common';
import { Container } from './about.style';

const About = () => {
	usePageTitle('About');
	const history = useHistory();
	const { images, loading } = useMarsImages('2020-07-14​');
	const { isXs, isSm, isMd, isLg } = useBreakpoints();

	let groups = 5;
	if (isXs) groups = 1;
	else if (isSm) groups = 2;
	else if (isMd) groups = 3;
	else if (isLg) groups = 4;
	
	return (
		<Container>
			<div className="top">
				<div className="rover-img">
					<img src="./img/rover-big.jpg" alt="" />
					<h4>Curiosity rover image</h4>
				</div>
				<div className="text">
					<div>
						Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and
						most capable rover ever sent to Mars. It launched November 26, 2011 and
						landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6,
						2012). Curiosity set out to answer the question: Did Mars ever have the
						right environmental conditions to support small life forms called microbes?
						Early in its mission, Curiosity's scientific tools found chemical and
						mineral evidence of past habitable environments on Mars. It continues to
						explore the rock record from a time when Mars could have been home to
						microbial life
					</div>
					<div className="nav-buttons">
						<Button onClick={() => history.push('/images')}>View Image By Date</Button>
						<Button onClick={() => history.push('/weather')}>View Weather</Button>
					</div>
				</div>
			</div>
			{loading ? (
				<h2>Loading Carousel...</h2>
			) : (
					<div className="carousel-box">
						<h3>
							Curiosity rover images <span>from today</span>
						</h3>
						<div>
							<Carousel groups={groups} itemWidth={MARS_IMAGE_WIDTH} spacing={10}>
								{images.map(img => (
									<MarsImage key={img.id} image={img} />
								))}
							</Carousel>
						</div>
					</div>
				)}
		</Container>
	);
};

export default Layout(About);
