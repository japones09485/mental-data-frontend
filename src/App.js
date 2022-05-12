import Principal from './components/Principal';
import Grafica1 from './components/Grafica1';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" 

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <section className="componentes">
        <Router>
        <div className="App">
          
           <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="rutaG1" element={<Grafica1 />} />
            </Routes>
        </div>
       </Router>
              
        </section>
      </header>
    </div>
  );
}

export default App;
 
