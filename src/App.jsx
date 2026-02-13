import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AudioProvider } from './context/AudioContext';
import ScrollToTop from './components/ScrollToTop';
import FloatingText from './components/FloatingText';
import IntroPage from './pages/IntroPage';
import MemoriesPage from './pages/MemoriesPage';
import LessonsPage from './pages/LessonsPage';
import PrinciplesPage from './pages/PrinciplesPage';
import ProposalPage from './pages/ProposalPage';
import VisionPage from './pages/VisionPage';
import './styles.css';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/intro" replace />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/principles" element={<PrinciplesPage />} />
          <Route path="/proposal" element={<ProposalPage />} />
          <Route path="/vision" element={<VisionPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <FloatingText />
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
