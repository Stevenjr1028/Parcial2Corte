import { configureStore } from "@reduxjs/toolkit";
import { photoSlice } from "./slices/photo/photoSlice";
import { todosApi } from "../api/todosApi";
import {counterSlice} from "./slices/counterSlice.jsx";

export const store= configureStore({
	reducer: {
		counter: counterSlice.reducer,
		photos: photoSlice.reducer,
		[todosApi.reducerPath]:todosApi.reducer,
	},
	middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(todosApi.middleware)
	
});
