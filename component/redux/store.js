// store/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlices';
import wishlistReducer from './slices/wishlistSlice';
import orderReducer from './slices/orderSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// 1️⃣ Combine reducers
const rootReducer = combineReducers({
	counter: counterReducer,
	cart: cartReducer,
	auth: authReducer,
	wishlist: wishlistReducer,
	orders: orderReducer,
});

// 2️⃣ Persist config (CLIENT ONLY)
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'auth', 'wishlist'], // ❗persist only needed reducers
};

// 3️⃣ Create reducer based on environment
const createReducer = () => {
	if (typeof window === 'undefined') {
		// ✅ SERVER: no persist
		return rootReducer;
	}
	// ✅ CLIENT: persist enabled
	return persistReducer(persistConfig, rootReducer);
};

// 4️⃣ Make store (SSR SAFE)
const makeStore = () =>
	configureStore({
		reducer: createReducer(),
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}),
		devTools: process.env.NODE_ENV !== 'production',
	});

// 5️⃣ Export wrapper
export const wrapper = createWrapper(makeStore);

// 6️⃣ Persistor (CLIENT ONLY)
export const getPersistor = (store) =>
	typeof window !== 'undefined' ? persistStore(store) : null;
