import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const cekUser = createAsyncThunk("user/getData", async () => {
	const token = localStorage.getItem("login");
	return await fetch(`ttp://localhost:3000/getUserData/${token}`);
});

const userSlice = createSlice({
	name: "userData",
	initialState: {
		data: null,
		isLoading: true,
		isLogin: false,
	},
	reducers: {
		login: (state) => {
			state.isLogin = true;
		},
		logout: (state) => {
			state.isLogin = false;
		},
		getData: (state, action) => {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(cekUser.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(cekUser.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log("cek data = ", action.payload);
				if (action.payload.status === 200) {
					state.data = action.payload.data;
				} else if (action.payload.status === 404) {
					state.data = "no data";
				}
			})
			.addCase(cekUser.rejected, (state, action) => {
				state.isLoading = true;
			});
	},
});

export const listData = (state) => state.data;
export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
