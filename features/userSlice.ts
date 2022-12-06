import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userReducer from "@features/userSlice";

export const cekUser = createAsyncThunk("user/getData", async () => {
	const token = localStorage.getItem("login");
	return await fetch(`ttp://localhost:3000/getUserData/${token}`);
});

interface userState {
	data: any;
	isLoading: boolean;
	isLogin: boolean;
}

const initialState: userState = {
	data: null,
	isLoading: true,
	isLogin: false,
};

const userSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		login: (state) => {
			state.isLogin = true;
		},
		logout: (state) => {
			state.isLogin = false;
		},
		getData: (state, action: PayloadAction<any>) => {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(cekUser.pending, (state, action) => {
				state.isLoading = true;
				state.isLogin = false;
			})
			.addCase(cekUser.fulfilled, (state, action) => {
				console.log(
					"🚀 ~ file: userSlice.ts:41 ~ .addCase ~ action",
					action.payload
				);
				state.isLoading = false;
				if (action.payload.status === 200) {
					state.data = action.payload;
				} else if (action.payload.status === 404) {
					state.data = "no data";
				}
			})
			.addCase(cekUser.rejected, (state, action) => {
				state.isLoading = true;
				state.isLogin = false;
			});
	},
});

export const listData = (state: any) => state.data;
export const { logout, login, getData } = userSlice.actions;
export default userSlice.reducer;
