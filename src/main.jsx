import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './Context/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <div>
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
