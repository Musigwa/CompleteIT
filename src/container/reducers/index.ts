import storage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import phases from './steps';

const rootPConfig = { key: 'root', storage, blacklist: ['steps'] };

export const rootReducer = combineReducers({ phases });

export default persistReducer(rootPConfig, rootReducer);
