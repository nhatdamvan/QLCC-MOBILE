// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/index";
// import { persistStore } from "redux-persist";
// export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);



import allReducers from "./reducers/index";

import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer, PERSIST} from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger';
import {applyMiddleware, configureStore, createStore} from '@reduxjs/toolkit';
import rootSaga from "./saga/rootSaga";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['commonReducer', 'userReducer'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const logger = createLogger({
    // ...options
});
// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

// const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware, logger),
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;