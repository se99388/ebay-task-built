import { useCallback } from 'react';
import useRequest from './use-request';
import { getImages } from '../services/api';

const useMarsImages = (earthDate, page) => {
	const reqApi = useCallback(() => {
		return getImages(earthDate, page);
	}, [earthDate, page]);

	const { data, loading, error } = useRequest(reqApi, page);

	const images = (() => {
		if (data) {
			return data.data.photos;
		}

		return [];
	})();

	return {
		images,
		loading,
		error
	};
};

export default useMarsImages;
