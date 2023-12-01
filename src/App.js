import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Application from './Application';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route>

           <Route path="/testing" element={<Application/>} />

         </Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
