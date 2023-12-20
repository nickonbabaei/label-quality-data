import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
