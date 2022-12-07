import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userReducer from "@features/userSlice";

export const fetchUserTodo = createAsyncThunk("user/getData", async () => {
	const token = localStorage.getItem("login");
	return await fetch(`http://localhost:3000/getUserData/${token}`);
});

interface userState {
	data: any;
	isLoading: boolean;
	isLogin: boolean;
}

const initialState: userState = {
	data: [],
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
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserTodo.pending, (state, action) => {
				state.isLoading = true;
				state.isLogin = false;
			})
			.addCase(fetchUserTodo.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload.status === 200) {
					state.data = action.payload;
				} else if (action.payload.status === 404) {
					state.data = "no data";
				}
			})
			.addCase(fetchUserTodo.rejected, (state, action) => {
				state.isLoading = true;
				state.isLogin = false;
			});
	},
});

export const listData = (state: any) => state.data;
export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
