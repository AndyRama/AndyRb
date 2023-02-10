import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from '../Page/Home/Home'

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
export default Layout
