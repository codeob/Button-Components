import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/'>
         <Route index element={<Home/>} />
       </Route>
    )
  )
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}
