import { useState } from 'react';
import { MarsImageContainer } from './common.style';

const MarsImage = ({ image }) => {
	const [info, setInfo] = useState(false);

	const imageInfo = (
		<div className="info">
			<div>{image.camera.full_name}</div>
			<div className="tag">{image.camera.name}</div>
		</div>
	);

	return (
		<MarsImageContainer
			className="mars-image"
			imgSrc={image.img_src}
			showInfo={info}
			onMouseEnter={() => {
				setInfo(true);
			}}
			onMouseLeave={() => {
				setInfo(false);
			}}
		>
			{imageInfo}
		</MarsImageContainer>
	);
};

export default MarsImage;
