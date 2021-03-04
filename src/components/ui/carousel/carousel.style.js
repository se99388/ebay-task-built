import styled from 'styled-components';

export const Container = styled.div`
	width: ${props => props.contentWidth + 100}px;
	.wrapper {
		display: flex;

		svg {
			fill: red;
		}

		.carousel-items {
			display: flex;
			overflow: hidden;
		}

		button {
			width: 50px;
		}
	}

	.pagination {
		margin-top: 10px;
		text-align: right;
		color: #6b6b6b;
		font-size: 12px;
	}
`;

export const CarouselItem = styled.div`
	flex: 1 0 100%;
	transition: transform 0.5s;
	transform: translateX(${props => props.offset}%);
	display: flex;
	justify-content: space-between;
`;
