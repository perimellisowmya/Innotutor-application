import { useState } from 'react';
import './Regis.css'

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
  
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
  console.log('works')
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h6>User {name} successfully registered!!</h6>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
  <div className=" object mt-5 h-100 h-custom">


    
          {/* <div className="row d-flex justify-content-center align-items-center h-100"  */}
          {/* style={{backgroundColor:"blue"}}> */}
        <div className="  col-lg-6 col-xl-6">
                  
          
                      
            <div className="card-body p-4 p-md-6" style={{backgroundColor:"rgb(207, 201, 193)"}}>
                          <h3 className="text-center mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Form</h3>
                          
	
		


					<div className="messages">
						{errorMessage()}
						{successMessage()}
					</div> 

				<form   className=" form px-md-2" >
						{/* Labels and inputs for form data */}
					<div className="form-outline mb-4">
						<label className="label" required>Name </label> &nbsp;
						<input onChange={handleName} className="input"
						value={name} type="text" required />
					</div>

					<div className="form-outline mb-4">

						<label className="label">Email</label> &nbsp;
						<input onChange={handleEmail} className="input"
						value={email} type="email" />
					</div>

					<div className="form-outline mb-4">

						<label className="label">Password</label> &nbsp;
						<input onChange={handlePassword} className="input"
						value={password} type="password" required/>
					</div>
					
					<div className='drop'>
							<label className="select form-label" for="form3Example1q">Role</label>
												<select name="usertype" id="user" className=" form-control" required>
													<option>Select User Role</option>
													<option value="ROLE_User">SUPPLIER</option>
													<option value="ROLE_Admin">CUSTOMER</option>
													<option value="ROLE_Tutor">CUSTOMER</option>
												</select>	
					</div>
					<br/>											
											
						<button onClick={handleSubmit} className="btn btn-primary" type="submit">
						Submit
						</button>
				</form>
			</div>
  		</div>
  
 
  
  </div>
);
}











































































// import React from 'react'
// import handleSubmit from 'react'
// export default function Regis() {
//   handleSubmit= (e)=>{
//     e.preventDefault();
//     console.log('works')

//   }
//   return (
//     <div>
           
          
// <section className="h-100 h-custom">


//     <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-8 col-xl-6">
//                 <div >
        
                    
//                     <div className="card-body p-4 p-md-5">
//                         <h3 className="text-center mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Form</h3>


//                         <form   className="px-md-2" onSubmit={this.handleSubmit}>


//                             <div className="form-outline mb-4">
//                                 <label className="form-label" for="form3Example1q">Email Id</label>
//                                 <input type="email" id="form3Example1qa" className="form-control"
//                                        placeholder="Enter Email Id"
//                                        name="emailid" required/>
//                             </div>

//                             <div className="form-outline mb-4">
//                                 <label className="form-label" for="form3Example1q">User Name</label>
//                                 <input type="text" id="form3Example1q" className="form-control"
//                                        placeholder="Enter UserName"
//                                        name="username" required/>
//                             </div>

//                             <div className="form-outline mb-4">
//                                 <label className="form-label" for="form3Example1q">Password</label>
//                                 <input type="password" id="form3Exampl" className="form-control"
//                                        placeholder="Enter Password"
//                                        name="password" required/>
//                             </div>


//                             <div className="form-outline mb-4">
//                                 <label className="form-label" for="form3Example1q">Mobile No</label>
//                                 <input type="number" id="form3Example" className="form-control"
//                                        placeholder="Enter Mobile Number"
//                                        name="mobileno" required/>
//                             </div>


//                             <div className="form-outline mb-4">

//                                 <label className="form-label" for="form3Example1q">User Role</label>
//                                 <select name="usertype" id="user" className="form-control" required>
//                                     <option>Select User Role</option>
//                                     <option value="ROLE_SUPPLIER">SUPPLIER</option>
//                                     <option value="ROLE_CUSTOMER">CUSTOMER</option>
//                                 </select>

//                             </div>

              
//                             <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>

//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
   
//     </section>
//     </div>
   
//   )
// }






















































// /*import { useState, useEffect } from "react";
// import "./Register.css";
// import {Link} from 'react-router-dom'
// import axios from 'axios';
// function Register() {
//     <Link to="/login" ></Link>
//   const initialValues = { username: "", email: "", password: "" ,phonenum:"",role:""};
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const handleApi=()=>
//     {
//       console.log({formValues})
//       axios.post('https://reqres.in/api/register',{
//       formValues:formValues,
//       })
//       .then(result=>
//     {
//         console.log(result.data)
//         alert('success')
//     })
//     .catch(error=>
//   {
//    console.log(error)
//    //console.log(error.response)
//   alert('service error')
//   })
//     } 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     if(!values.phonenum){
//         errors.phonenum="phone number is required";
//     }
//     else if(values.phonenum.length<10){
//         errors.phonenum = "phone number should be of length 10";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : 
//       (
//        <p>Enter the Fields correctly</p>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Registration Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <div className="field">
//             <label>Phonenumber</label>
//             <input
//               type="integer"
//               name="phonenum"
//               placeholder="Phonenum"
//               value={formValues.phonenum}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.phonenum}</p>
//           <div className="field">
//             <label>Role</label>
//             <select >
//             <option  value="1" name='customer'>Customer</option>
//             <option value="2" name='supplier'>Supplier</option>
//             </select><br/>
//           </div>
//           <button className="fluid ui button blue" onClick={handleApi}>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default Register;*/

