import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Discover from './pages/Discover'
import Display from './pages/Display'
import Landing from './pages/Landing'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="discover" element={<Discover />} />
        <Route path="browse/:breed" element={<Display />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
