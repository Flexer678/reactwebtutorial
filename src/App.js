
import React from 'react';
import  Navbar from './components/Navbar';
import Footer from './components/Footers';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
//allows react to go from page to page
//cus react cant do it.
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from  './pages/Home'

 // so basically the Navbar is at the top 
      //it is there because we want to keep it there when the page changes
      //the switch tag allows react to change the pages like home ,about us page and etc without 
      //rendering a whole new navbar
      
function App() {
  return(
    <div className='App'>
    <Router>
      <Navbar/>
     
      <Routes>
        <Route path="/" exact Component={Home}/>
         <Route path="/menu" exact Component={Menu}/>
         <Route path="/About" exact Component={About}/>
         <Route path="/Contact" exact Component={Contact}/>
      </Routes>
      <Footer/>
     </Router>

    </div>
  );
}


export default App;
