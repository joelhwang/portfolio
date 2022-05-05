import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/portfolio' element={<Portfolio/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
