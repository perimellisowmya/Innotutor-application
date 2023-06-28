import React from 'react'
import { Link } from 'react-router-dom';
import OnlineCourses from './OnlineCourses';
import Extra from './Extra';
import Home from './Home';



function Navtutor() {
  

  return (
    <div>
  <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={{color:'white'}}><h2>Learning</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 end_bar">
             
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0" >
            <li className="nav-item">
                        <a href="/Studentt" className="btn btn-light mx-1 nav-link  p-1"  >my courses</a>
                </li>
                <li className="nav-item">
                        <a href="/Update" className="btn btn-light mx-1 nav-link  p-1"  >Upload courses</a>
                </li>
                <li className="nav-item">
                        <a href="/Studentt" className="btn btn-light mx-1 nav-link  p-1"  >Approved courses</a>
                </li>
                <li className="nav-item">
                        <a href="/Studentt" className="btn btn-light mx-1 nav-link  p-1"  >pending courses</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="btn btn-light mx-1 nav-link  p-1" >Logout</a>
                </li>
              
                <li className="nav-item">
                    <a  href="/" className="btn btn-light mx-1 nav-link p-1" >cart</a>
                
                </li>
              </ul>
          </div>
        </div>
      </nav>
      <Home/>
    

     
      
    </div>
  )
}

export default Navtutor






































/*import React from "react";
import {useNavigate} from 'react-router-dom'


export default function Navbar()
{
//let user=   JSON.parse(localStorage.getItem('user-info'))
    //console.warn(user)
    
const navigate=useNavigate();
function logOut()
{
  localStorage.clear()
  navigate('/login', { replace: true })
}
const Mynav=({logOut})=>
{
    return(
        <div>
        <a href="/" className="button"><i class="fa fa-fw fa-home"></i>Home</a>
        <a href="/login"  className="button-login"><i class="fa fa-fw fa-user"></i>Login</a>
        <a href="#logout" className="button-logout" onClick={logOut}>logOut</a>  
        </div>
    )
}
    return(
            <div>
        <nav className="nav">
       
         <h2 >BLOOM.IN</h2>
         <h3>About us</h3>
         <h3>Contact us</h3>
         <h3>Help</h3>
         <input className="search"
            type="text"
            id="header-search"
            placeholder="Search your item"
            name="s" 
        /> 
        {/* <button className="submit-search" type="submit">Search</button> 
     <a href="#shop" className="button-shop">Shop</a> 
    <a href="#cart" className="button-cart">Cart</a>  
    <a href="/" className="button"><i class="fa fa-fw fa-home"></i>Home</a>
    <a href="/login"  className="button-login"><i class="fa fa-fw fa-user"></i>Login</a>
    <a href="#logout" className="button-logout" onClick={logOut}>logOut</a>  

    </nav>
</div>
    )
}*/

