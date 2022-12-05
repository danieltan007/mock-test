import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let id = 1234;

export const cekUser = createAsyncThunk("user/getData",
	async () => {
		const token = localStorage.getItem("token");
		return await 
	}
);
