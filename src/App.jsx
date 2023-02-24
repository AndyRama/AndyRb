import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
// import { IconAirbnb } from './components/Icon/Icon's
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
