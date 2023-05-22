import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Host from './components/Host/Host'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer'
import Results from './components/Results/Results'
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Host" element={<Host />} />
          <Route path="/search" element={<Results />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
