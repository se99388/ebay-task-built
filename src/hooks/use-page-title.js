import { useEffect } from 'react';

const usePageTitle = title => {
	useEffect(() => {
		document.title = `Ebay Mars - ${title}`;
	}, [title]);
};

export default usePageTitle;
