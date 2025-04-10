import { Route, Routes } from 'react-router-dom'
import './App.css'
import OverviewPage from './pages/OverviewPage'
import ProductPage from './pages/ProductsPage'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Main layout container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
