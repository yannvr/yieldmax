import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Pages
import HomePage from './pages/Home'
import ProtocolPage from './pages/Protocol'
import ComparePage from './pages/Compare'
import SimulatorPage from './pages/Simulator'
import FAQPage from './pages/FAQ'
import BeginnerGuidePage from './pages/BeginnerGuide'
import CompareRisksPage from './pages/CompareRisks'

// Layout
import MainLayout from './layouts/MainLayout'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/protocol/:id" element={<ProtocolPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/simulator" element={<SimulatorPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/guide" element={<BeginnerGuidePage />} />
              <Route path="/risks" element={<CompareRisksPage />} />
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
