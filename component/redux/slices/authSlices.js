import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE = '/auth'; // Replace with your backend endpoint

// ------------------- Thunks -------------------

// Register User
export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${API_BASE}/register`, userData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || error.message);
		}
	}
);

// Login User
export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${API_BASE}/login`, credentials);
			// Optionally save token in localStorage
			if (response.data.token) {
				localStorage.setItem('token', response.data.token);
			}
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || error.message);
		}
	}
);

// Logout User
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
	localStorage.removeItem('token'); // Clear token
	return null;
});

// ------------------- Slice -------------------
const initialState = {
	user: null,
	token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		clearAuthState: (state) => {
			state.user = null;
			state.token = null;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			// Register
			.addCase(registerUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})

			// Login
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})

			// Logout
			.addCase(logoutUser.fulfilled, (state) => {
				state.user = null;
				state.token = null;
				state.error = null;
			});
	},
});

export const { setUser, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
