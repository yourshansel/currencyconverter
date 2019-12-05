import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import reducer from '../reducers';
import rootSaga from './sagas';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['currencies'],
  
  
}

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);



export default {store, persistor};
