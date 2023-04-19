import { setPhotos, startLoading } from "./photoSlice";

export const getPhotos = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());
		
		const url = `https://via.placeholder.com/600/${page * 10}`;

		const resp = await fetch (url)
		const data= await resp.json();

		dispatch(
			setPhotos({
				getPhotos: data.results,
				page: page + 1,
			})
		);
	};
};
