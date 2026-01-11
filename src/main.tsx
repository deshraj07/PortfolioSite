import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { Toaster } from "@/components/ui/sonner"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Toaster richColors />
    <RouterProvider router={router}/>
  </StrictMode>,
)
