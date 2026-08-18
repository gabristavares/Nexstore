import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { getProducts } from './services/products.ts'

const root = createRoot(document.getElementById('root')!)

getProducts ().then((products)=> 
  
   

  )
 
