// store/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// Combine all slices
const rootReducer = combineReducers({
	counter: counterReducer,
	cart: cartReducer,
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
