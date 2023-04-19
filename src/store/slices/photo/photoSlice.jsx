import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
	name: "Photo",
	initialState: {
		page: 0,
		photos: [],
		isLoading: false,
	},
	reducers: {
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		setPokemons: (state, action) => {
			state.isLoading = false;
			state.page = action.payload.page;
			state.photos = action.payload.getPhotos;
		},
	},
})

export const {startLoading,setPhotos} = photoSlice.actions

export const { startLoading, setPhotos } = photosSlice.actions;

export default photosSlice.reducer
