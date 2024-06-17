import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Views/Home';
import About from './Views/About';
import Product from "./Views/Product";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

// Componente principal do aplicativo que define a estrutura e as rotas
function App() {
  return (

    // BrowserRouter é usado para habilitar o roteamento no aplicativo
    <Router>  
      <>
        <Header />
        
        {/* Define as rotas para os diferentes componentes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
};

export default App;
