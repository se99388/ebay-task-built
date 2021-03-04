import styled from 'styled-components';

export const Container = styled.div`
	.top {
		display: flex;
		margin-bottom: 20px;

		.rover-img {
			min-width: 40%;
			text-align: center;
			> img {
				width: 100%;
				height: auto;
			}

			h4 {
				font-size: 14px;
			}
		}

		.text {
			padding: 0 20px;
		}

		@media only screen and (max-width: 768px) {
			flex-wrap: wrap;
			.text {
				padding: 0;
				margin-top: 20px;
			}
		}

		.nav-buttons {
			display: flex;
			margin-top: 15px;

			button {
				margin-right: 15px;
			}
		}
	}

	.carousel-box {
		h3 {
			> span {
				color: #b19168;
			}

			margin-bottom: 10px;
		}
	}
`;
