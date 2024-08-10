import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
  persistReducer, persistStore,
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


const rootReducer = combineReducers({
  tabsSlice,
  animationSlice
}) 

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tabsSlice',], // что хотим сохранять
  blacklist: ['animationSlice'], // не хотим сохранять
};



const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);