import './App.css';
import F1 from './Components/F1';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './Components/Nav';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Home,About,Contact} from './Components/F2';
import Kk from './Components/Contact';
function App() {
  return (
    <div>
      <F1></F1>
      <hr></hr>

      <HashRouter>
        <Nav></Nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Csontact" element={<Contact />} />
        </Routes>
      </HashRouter>
      {/* localhost:3000/#/home --> Home ----># needs to be written if on local machine*/}

      <hr></hr>
      <Kk></Kk>
    </div>
  );
}

export default App;
