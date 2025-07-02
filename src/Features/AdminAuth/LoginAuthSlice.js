import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginAdminAPI} from '../../APIs/Admin/AuthAPI';

export const loginAdmin = createAsyncThunk(
    'admin/login', 
    async(credentials, {rejectWithValue})=>{
        try {
            const data = await loginAdminAPI(credentials);
            localStorage.setItem('adminToken', data.token)
            console.log('Login Succeesffull');
            return data
        } catch (error) {
         return rejectWithValue(error.response?.data.message || 'Login Failed')   
        }
    }
)

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState: {
    admin: null,
    token: localStorage.getItem('adminToken') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutAdmin: (state) => {
      state.admin = null;
      state.token = null;
      localStorage.removeItem('adminToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
        state.token = action.payload.token;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutAdmin } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
