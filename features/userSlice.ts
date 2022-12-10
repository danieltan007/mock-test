// @ts-nocheck
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userReducer from "@features/userSlice";

export const fetchUserTodo = createAsyncThunk("user/getData", async () => {
	const token = localStorage.getItem("login");
	try {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER}/getUserData/${token}`,
			{
				method: "GET",
			}
		);
		return await data.json();
	} catch (err) {
		console.log(`error while fetching : ${err.message}`);
	}
});

interface userState {
	data: Array<string>;
	isLoading: boolean;
	isLogin: boolean;
	id: string | null;
}

const initialState: userState = {
	data: [],
	isLoading: true,
	isLogin: false,
	id: "",
};

const userSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isLogin = true;
			state.id = action.payload;
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
				state.data = action.payload?.data[0].todos;
				state.id = action.payload?.data[0].id;
			})
			.addCase(fetchUserTodo.rejected, (state, action) => {
				state.isLoading = true;
				state.isLogin = false;
			});
	},
});

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
