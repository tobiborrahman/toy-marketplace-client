import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		document.title = `Sports Shop | ${title}`;
	}, []);
};

export default useTitle;
