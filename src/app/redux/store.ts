import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tabsSlice from './Slices/tabs.slice';
import animationSlice from './Slices/animation.slice';
import profileSlice from './Slices/profile.slice';
import usersSlice from './Slices/users.slice';
import searchSlice from './Slices/search.slice';
import dealDetailSlice from './Slices/dealdetail.slice';

const rootReducer = combineReducers({
  tabsSlice,
  animationSlice,
  usersSlice,
  profileSlice,
  searchSlice,
  dealDetailSlice
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tabsSlice', 'usersSlice', 'profileSlice', 'dealDetailSlice'], // что хотим сохранять
  blacklist: ['animationSlice', 'searchSlice'], // не хотим сохранять
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
