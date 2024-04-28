import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '@/App/pages/DasboardPage';
import StatsPage from '@/App/pages/StatsPage';
import Navbar from '@/components/shared/Navbar';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<DashboardPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/statistics" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
