import './App.css';
import { Routes, Route } from "react-router-dom";
import Top from './pages/Top';
import MyRecord from './pages/MyRecord';
import Column from './pages/Column';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="myrecord" element={<MyRecord />} />
        <Route path="column" element={<Column />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
