import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from "./contactSlice/contactSlice";
import { filtersReducer } from "./filtersSlice/filtersSlice";
import { frontBackReducer } from "./frontBackSlice/frontBackSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
	key: 'contacts',
	storage,
	whitelist: 'contacts.arrContacts'
}
const persistedContactReducer = persistReducer(
	persistConfig,
	contactReducer,
)
export const store = configureStore({
	reducer: {
		contacts: persistedContactReducer,
		filter: filtersReducer,
		frontBack: frontBackReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)