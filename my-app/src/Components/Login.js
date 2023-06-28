import React from 'react'
 import './Login.css'
import {Link,Navigate,useNavigate} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios'
import Navbar from './Navbar';

 function Login() {

      const [email,setEmail] = useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    console.log(email,password)
    const handleApi=()=>
    {
      console.log({email,password})
      axios.post('https://reqres.in/api/login',{
       
        email:email,
        password:password

      })
      .then(result=>
    {
        console.log(result.data)
        alert('success')
        // if (result.data.accessToken) {
        //   localStorage.setItem("user", JSON.stringify(result.data));
         
        // } 
        
    })
    .catch(error=>
  {
    alert('service error')
   console.log(error)
  
  })
 navigate('/login')
 
    } 
  
  return (
<div className='back'>
    <Navbar/>
<script src="https://use.fontawesome.com/f59bcd8580.js"></script>
<div className="container" >



<div className="row m-5 no-gutters " >

<h2 style={{color:"white",position:"relative",top:"200px"}}>Best online education expertise</h2>
<p style={{color:"white",position:"relative",top:"200px"}}>We need to bring learning to people <br/> instead of people to learning</p>

 <div className="col-md-6 d-none d-md-block  "> 



</div> 

<div className="col-md-5 bg-white p-5" >
<h3 className="pb-3">Login</h3>
<div className="form-style">
<form>
  <div className="form-group pb-3">    
    <input type="text" placeholder="Email" 
    className="form-control" 
    // id="exampleInputEmail1" 
    autoComplete="off"
    // aria-describedby="emailHelp"
     value={email}
    onChange={(e)=>setEmail(e.target.value)} required/>
      
  </div>
  <div className="form-group pb-3">   
    <input type="password" 
    placeholder="Password" 
    className="form-control" 
    // id="exampleInputPassword1"
    autoComplete="off"
    value={password}
    onChange={(e)=>setPassword(e.target.value)} required/>
  
  </div>
  <div className="d-flex align-items-center justify-content-between">
<div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> &nbsp; <span className="pl-2 font-weight-bold">Remember Me</span></div>
<div><a href="#">Forget Password?</a></div>
</div>
   <div className="pb-2">
   <button  className="btn btn-dark w-100 font-weight-bold mt-2" value='login'  onClick={handleApi} 
   >Submit</button> 
  
   </div>
</form>
  
  <div className="pt-4 text-center">
  <Link to="/guesthome">Login in as a guest</Link>
  <div className="pt-4 ">
 
  <Link to="/Regis">Register here</Link>
 
  </div>
  </div>
</div>

</div>
</div>
</div>

    // </div>
  )
}
export default Login






















// import React,{useState} from 'react';
// import './Login.css';
// import a from "./a.png";
// import {Link,useNavigate} from 'react-router-dom'
// import axios from 'axios';
// import learning from './learning.jpg'


// function Login() {
//   const navigate = useNavigate()
//     const [email,setEmail] = useState("");
//     const[password,setPassword]=useState("");
//     console.log(email,password)
//     const handleApi=()=>
//     {
//       console.log({email,password})
//       axios.post('https://reqres.in/api/login',{
       
//         email:email,
//         password:password

//       })
//       .then(result=>
//     {
//         console.log(result.data)
//         alert('success')
//         if (result.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(result.data));
         
//         } 
        
       
//     })
//     .catch(error=>
//   {
//     alert('service error')
//    console.log(error)
  
//   })
//     } 
//   return (
//     <div >
//        <div className="main">
//        <div className="sub-main">
    
    
//        <div>
      
//          <div className="imgs">
        
//             <div className="image">
           
//           </div>  
//          </div>
//          <div>
        
//            <h1>Login Page</h1>
//            <div><br></br>
           
//              <input type="text" placeholder="user name" className="username" autoComplete="off"
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)} required/>
//            </div>
//            <div className="second">
//              <input type="password" placeholder="password" className="username"  autoComplete="off"
//                 value={password}
//                 onChange={(e)=>setPassword(e.target.value)} required/>
//            </div>
//           <div className="login">
        
//           <button className='login2' value='login' 
         
//           onClick={handleApi} 
//            >Login</button>
         
//           </div>
           
//             <p className="link">
//               <a href="#">Forgot password ?</a> or
//             <Link to="/Regis">Register here</Link>
//             </p>
//          </div>
//        </div>
//      </div>  
//     </div>
//     </div>
//   );
// }
// export default Login;


 























