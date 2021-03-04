import { useState, useEffect, useCallback } from 'react';

const useRequest = reqPromise => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const fetchImages = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await reqPromise();
			setData(data);
		} catch (e) {
			setData(null);
			setError(e);
		} finally {
			setLoading(false);
		}
	}, [reqPromise]);

	useEffect(() => {
		fetchImages();
	}, [fetchImages]);

	return {
		loading,
		data,
		error
	};
};

export default useRequest;
