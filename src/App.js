import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home /> } />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
