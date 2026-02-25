import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PredictForm from './components/PredictForm';
import BatchPredict from './components/BatchPredict';
import HistoryPage from './components/HistoryPage';
import CustomerTracking from './components/CustomerTracking';
import CustomerDetail from './components/CustomerDetail';
import SplashScreen from './components/SplashScreen';
import './index.css';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/predict" element={<PredictForm />} />
          <Route path="/batch" element={<BatchPredict />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/tracking" element={<CustomerTracking />} />
          <Route path="/customer/:id" element={<CustomerDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer className="footer">
        Amazooh.com · Premium AI Analytics Engine · High-Performance Intelligence
      </footer>
    </BrowserRouter>
  );
}