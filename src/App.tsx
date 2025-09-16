import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Soal1 from './pages/Soal1';
import Soal2 from './pages/Soal2';
import Soal3 from './pages/Soal3';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/soal1" replace />} />
          <Route path="/soal1" element={<Soal1 />} />
          <Route path="/soal2" element={<Soal2 />} />
          <Route path="/soal3" element={<Soal3 />} />
        </Routes>
      </main>

      <Navbar />
    </div>
  );
}
