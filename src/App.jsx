import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Host from './components/Host/Host'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Host" element={<Host />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
