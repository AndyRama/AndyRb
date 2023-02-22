import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
