import { configureStore } from '@reduxjs/toolkit';
import adminAuthReducer from '../src/Features/AdminAuth/LoginAuthSlice';

const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
  },
});

export default store;
