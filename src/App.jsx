import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import DashboardPage from './Pages/DashboardPage'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/'>
         <Route index element={<Home/>} />
         <Route path='/dashboard' element={<DashboardPage/>}  >

         </Route>
       </Route>
    )
  )
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}
