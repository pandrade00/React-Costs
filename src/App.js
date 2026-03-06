import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Empresa from './components/pages/Company'
import Contato from './components/pages/Contact'
import NovoProjeto from './components/pages/NewProject'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
    <NavBar/>
    <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/company" element={<Empresa />} />
        <Route path="/contact" element={<Contato />} />
        <Route path="/newproject" element={<NovoProjeto />} /> 
      </Routes>
    </Container>
    <Footer/>
    </Router>
  );
}

export default App;
