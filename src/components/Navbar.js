import React, {useState} from "react"
import '../styles/Navbar.css'
import Logo from "../assets/pizzaLogo.png"
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';




function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = ()=>{
    //basically ! makes it the opposite of what it is
    //ie True will be false
    //false with be true
  setOpenLinks(!openLinks)
  }

  //openLinks?...
  //the id has a condition that returns true or false
  //if true then it is open which means it appears 
  //opposite for id = close
  return (
    <>
     <nav className='navbar'>
    
        <div className='leftSide' id={openLinks? 'open': "close"}>
       
            <img src={Logo}></img>
             <div className="hiddenLinks">
                  <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
        </div>
        </div>
       
        <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
        </div>
     </nav> 
    </>
  )
}

export default Navbar
