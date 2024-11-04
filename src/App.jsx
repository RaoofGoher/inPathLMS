import React from "react"
import './index.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />} >
          {/* <Route index element={<Home />} /> */}
        </Route>
        

      </>
    )
  );

  return (
    
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    
  )
}

export default App
