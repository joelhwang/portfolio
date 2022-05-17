import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path = '/portfolio' element={<Portfolio/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
