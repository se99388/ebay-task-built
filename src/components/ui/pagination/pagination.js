import { Container, Number } from './pagination.style';

const Pagination = ({ page, total, pageGroup, onChange }) => {
	const numberOfPages = Math.ceil(total / pageGroup);

	const arrayPages = [...Array(numberOfPages)].map((_, i) => i + 1);

	const canGoBack = page > 1;
	const canGoNext = page < arrayPages.length;

	return (
		<Container>
			<button onClick={() => onChange(page - 1)} disabled={!canGoBack}>
				<span className="material-icons">keyboard_arrow_left</span>
			</button>
			<div className="number-container">
				{arrayPages.map(p => (
					<Number
						selected={page === p}
						onClick={() => {
							if (p !== page) {
								onChange(p);
							}
						}}
						key={p}
					>
						{p}
					</Number>
				))}
			</div>
			<button onClick={() => onChange(page + 1)} disabled={!canGoNext}>
				<span className="material-icons">keyboard_arrow_right</span>
			</button>
		</Container>
	);
};

export default Pagination;
