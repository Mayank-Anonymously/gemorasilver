// store/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlices';
import wishlistReducer from './slices/wishlistSlice';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistReducer, persistStore } from 'redux-persist';

// Combine all slices
const rootReducer = combineReducers({
	counter: counterReducer,
	cart: cartReducer,
	auth: authReducer,
	wishlist: wishlistReducer,
});

// Redux Persist config
const persistConfig = {
	key: 'root',
	storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Correct middleware setup
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
