import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Product } from './pages/Product'
import { App } from './app'
import './index.css'
import { NotFound } from './pages/NotFound'
import { Success } from './pages/Success'
import { Cancel } from './pages/Cancel'

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/product/:productId',
    element: <Product />
  },
  {
    path: '/sucesso',
    element: <Success />
  },
  {
    path: '/pedido-cancelado',
    element: <Cancel />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
