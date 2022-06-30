import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>} />
   
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
