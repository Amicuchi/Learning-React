import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Views/Home';
import About from './Views/About';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
};

export default App;
