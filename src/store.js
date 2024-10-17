import {configureStore} from '@reduxjs/toolkit'
import tableReducer from './features/tableSlice'
import itemReducer from './reducers/reducers';
export const store = configureStore({
  reducer:{
    table:tableReducer,
    // item:itemReducer
  }
});

