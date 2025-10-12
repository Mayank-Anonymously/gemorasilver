import { HOST } from '@/component/apibaseurl';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const HOST = HOST; // Replace with your backend endpoint

// ------------------- Thunks -------------------

// Register User
export const registerUser = createAsyncThunk(
	'auth/register',
	async (userData, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${HOST}auth/register`,
				userData.formData
			);
			userData.router.push('/auth/verify-otp');

			return response.data;
		} catch (error) {
			alert(error.response?.data || error.message);
			return rejectWithValue(error.response?.data || error.message);
		}
	}
);

// Login User
export const loginUser = createAsyncThunk(
	'auth/login',
	async (credentials, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${HOST}auth/login`,
				credentials.credentials
			);
			credentials.router.push('/');

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || error.message);
		}
	}
);
export const verifyOtp = createAsyncThunk(
	'auth/verify-otp',
	async (credentials, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${HOST}auth/verify-otp`,
				credentials.formData
			);

			credentials.router.push('/auth/login');

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
	message: '',
	loggedIn: false,
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
			.addCase(registerUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.message = action.payload.message;
				// localStorage.setItem('authToken', action.payload.token); // optional
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
				state.loggedIn = true;
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
				state.loggedIn = false;
			})

			// VerifyOTp
			.addCase(verifyOtp.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(verifyOtp.fulfilled, (state, action) => {
				state.loading = false;
				state.message = action.payload.message;
			})
			.addCase(verifyOtp.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { setUser, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
