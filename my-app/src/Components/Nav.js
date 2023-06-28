import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import {useState} from 'react'



function Navbar() {
  const {
    isEmpty,
    totalItems,

  } = useCart();
  const [user, setUser] = useState({});

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: 'white' }}><h2>Innotutor</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 end_bar">
              <li className="nav-item">
                <a className="nav-link " style={{ color: 'white' }} aria-current="page" href="#">AboutUs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: 'white' }} href="#">ContactUs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: 'white' }} href="#">categories</a>
              </li>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
               

           
              </form>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0" >
              <li className="nav-item">
                <a href="/login" className="btn btn-light mx-1 nav-link  p-1"  >Home</a>
              </li>
              <li className="nav-item">
                <a href="/studentt" className="btn btn-light mx-1 nav-link  p-1"  >MyCourses</a>
              </li>
             
              

                <li className="nav-item">
                      <a href="" className="btn btn-light mx-1 nav-link  p-1"  >Logout</a>
                     </li>

              <Link
                to="/cart"
                className="btn btn-light mx-1 nav-link p-1"
              >

                {!isEmpty && <span style={{ position: 'relative', left: '29px', top: '-10px', borderRadius: "5px", color: "red" }}>{totalItems}

                </span>}
                <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>cart</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default Navbar






































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

