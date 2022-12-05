import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@features/userSlice";
import logger from "redux-logger";
// import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
