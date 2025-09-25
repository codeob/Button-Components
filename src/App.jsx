import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import DashboardPage from './Pages/DashboardPage'
import Getstarted from './Pages/Getstarted'
import Advanced from './Pages/Advanced'
import MidButton from './Pages/midButton'
import JouniorButtons from './Pages/jouniorButtons'
import Simplebutton from './Pages/Simplebutton'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/'>
         <Route index element={<Home/>} />
         <Route path='/dashboard' element={<DashboardPage/>}  >
         <Route index element={<Getstarted/>} />
         <Route path='getstarted' element={<Getstarted/>} />
         <Route path='simplebutton' element={<Simplebutton/>} />
         <Route path='juniorbutton' element={<JouniorButtons/>} />
         <Route path='midbutton' element={<MidButton/>} />
         <Route path='advancedbutton' element={<Advanced/>} />
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
