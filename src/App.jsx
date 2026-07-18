import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vaults from './pages/Vaults'
import IndexReserve from './pages/IndexReserve'
import Portfolio from './pages/Portfolio'
import Docs from './pages/Docs'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vaults" element={<Vaults />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/index-reserve" element={<IndexReserve />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
