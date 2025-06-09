import './App.css';
import Game from './Component/game';
import { useNavigate, Routes, Route } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return(
    <>
      <h1>クリッカーゲーム(のつもり)</h1><br />
      <button onClick={() => navigate('/game')}>START</button>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='game' element={<Game />} />
    </Routes>
  );
}

export default App;
