import createSagaMiddleware from 'redux-saga';
import mySaga from './redux-saga/saga';
import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './redux-saga/DataReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    data: DataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
