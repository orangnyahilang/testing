import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Application from './Application';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
