import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from '../src/store.js';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
const queryclient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
    <Provider store={store}>
        <App />
    </Provider>
</QueryClientProvider>  
  </StrictMode>,
)
