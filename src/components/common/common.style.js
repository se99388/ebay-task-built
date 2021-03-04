import styled from 'styled-components';

export const MARS_IMAGE_WIDTH = 230;

export const MarsImageContainer = styled.div`
	width: ${MARS_IMAGE_WIDTH}px;
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	background: url(${props => props.imgSrc});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;

	.info {
		color: #fff;
		position: absolute;
		padding: 10px;
		bottom: 0;
		left: 0;
		height: 100px;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		transform: translateY(${props => (props.showInfo ? 0 : 100)}%);
		transition: transform 200ms ease-in;

		.tag {
			position: absolute;
			bottom: 5px;
			left: 5px;
			background-color: red;
			color: white;
			border: 1px solid white;
			padding: 2px 3px;
			border-radius: 3px;
			font-size: 11px;
		}
	}
`;
