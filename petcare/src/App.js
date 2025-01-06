import './App.css';
import Nav from './Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home.js';
import Herosection from './Herosection.js';
import About from './About.js';
import Services from './Services.js';
import Product from './Product.js';
import Offer from './Offer.js';
import Team from './Team.js';
import Blog from './Blog.js';
import Footer from './Footer.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Herosection/>
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Prodcut" element={<Product/>}/>
          <Route path="/Offer" element={<Offer/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/Blog" element={<Blog/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
     
     
     

    </div>
  );
}

export default App;
