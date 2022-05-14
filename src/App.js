import Principal from './components/Principal';
import Grafica1 from './components/Grafica1';
import Grafica2 from './components/Grafica2';

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
              <Route path="rutaG2" element={<Grafica2 />} />
            </Routes>
        </div>
       </Router>
              
        </section>
      </header>
    </div>
  );
}

export default App;
 
