import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	.number-container{
		display: flex;
		flex-wrap: wrap;
	}
`;

export const Number = styled.div`
	width: 30px;
	height: 30px;
	border: 1px solid black;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 3px;
	background-color: ${props => (props.selected ? '#8d6338' : '#fff')};
	color: ${props => (props.selected ? '#fff' : 'initial')};
	cursor: ${props => (props.selected ? 'default' : 'pointer')}; ;
`;
