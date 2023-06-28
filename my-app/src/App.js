
 import React from 'react'
 import Nav from './Components/Nav';
 import Login from './Components/Login';
 import Home from './Components/Home';
import Regis from './Components/Regis'
import './App.css'
import Studentt from './Components/Studentt'



import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Coursedetails from './Components/Coursedetails';
import Cart from './Components/Cart';
import GuestHome from './Components/GuestHome';
import Content from './Components/Content'
import Extra from './Components/Extra';
import PaymentMode from './Components/PaymentMode'
import OnlineDetails from './Components/OnlineDetails';
import Tutor from './Components/TutorHome';


  export default function App(){
   return (
     <div >
     
       <Router>
         <Routes>  
         <Route exact path="/nav"  element={<Nav/>}> </Route>
         <Route exact path="/extra"  element={<Extra/>}> </Route>
         <Route exact path="/content"  element={<Content/>}> </Route>
         <Route exact path="/studentt"  element={<Studentt/>}> </Route>
         <Route exact path="/"  element={<Login/>}> </Route>
         <Route exact path="/guesthome"  element={< GuestHome/>}> </Route>
          <Route exact path='/login' element={<Home/>}/>   
        
          <Route exact path='/paymentmode' element={<PaymentMode/>}/>   
          
          <Route exact path='/Regis' element={<Regis/>}/> 
          <Route exact path='/Coursedetails' element={<Coursedetails/>}/> 
          <Route exact path='/Cart' element={<Cart/>}/> 
          <Route exact path='/OnlineDetails' element={<OnlineDetails/>}/>   
          <Route exact path='/tutor' element={<Tutor/>}/>  
        </Routes>
     </Router>     

       {/* <Amazon/> */}
       {/* <Routing productItems={data.productItems}/> */}
     </div>
   )
 }





 
 
 
 

 
 
 
 
 
 
 
 
























































































/*import React from 'react';
import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
//import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
       <Profile /> 
    </>
  );
}*/




/*import React from 'react'
import Authentication from './Components/Authentication'
//import LoginButton from './Components/LoginButton';
export default function App() {
  return (
    <div>
      <Authentication/>
    </div>
  )
}*/




 



























































/*import React from "react";

export default function App()
{
  return(
    <main>somerthin</main>
  )
}

























/*import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
    )
    
  function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
        </form>
    )
}


















/*import React from "react";
import boxes from './Components/boxes'
import './App.css'

export default function App()
{
const[formData ,setFormData]=React.useState({firstName:"",lastname:""})


function handleChange(event)
{
console.log(event.target.name)
}

return(
  <form>
    <input 
    type="text" placeholder="firstName" onChange={handleChange}
    name="firstName"
    />
     <input 
    type="text" placeholder="lastName" onChange={handleChange}
    name="lastName"
    ></input>
  </form>
)







  /*const[squares,setSquares]=React.useState(boxes)
  const squareElements= squares.map(square =>(
    <div className="box" key={square.id}></div>
  ))
  return(
    <main>
      {squareElements}
      
      </main>
  )*/















//meme code
/*import React from 'react';
import './App.css';
import Header from './Components/Header'
import Meme from './Components/Meme'

export default function App()
{
  return(
    <div className="box">
    <Header/>
    <Meme/>
    </div>
  )
}*/


















//recorder code

/*import './App.css'
import Screen from './Components/Screen'
import Video from './Components/Video'
import Audio from './Components/Audio'
export default function App()
{
  return(
    <div className='head'>
      
      <Screen/>
     
      <Video/>
      
      <Audio/>
    </div>
  )
}




















































/*import React from "react"
import Navbar from "./Components/Navbar"
import './App.css'
import Card1 from "./Components/Card1"
import data from "./Components/data"


export default function App()
{
  const cards = data.map(item => {
    return (
        <Card1
           title={item.title}
           location={item.location}
           googleMapsUrl={item.googleMapsUrl}
           startDate={item.startDate}
           endDate={item.endDate}
           description={item.description}
          
           />
    )
})


  return(
    <div>
      <h1 className='text '>Travel journey</h1>
      <div className="box">
      <Navbar/>
      {cards}
      </div>
    </div>

  )
}*/






















/*import React from "react"

//import Hero from "./components/Hero"
import Card from "./Components/Card"
import data from "./Components/data"
import './App.css'

export default function App() {
            
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
                />
        )
    })
                      
    return (
        <div>
          
            <Navbar/>
            <section className="cards-list">
            {cards}
          </section>
            
        </div>
    )
}*/
    















   
  



 /*function App()
{
 return(
    <div>
  
 
  <Navbar
  
  setup="i am sowmya"
  punchline="i am learning react"
/><br/>
  <Navbar
  
  setup="i am sowmya"
  punchline="i am learning react"
  />
  

  </div>  
  );
}
export default App;*/




















/*function Header(){
return(
  <header>
  

</nav>
  </header>
);
}

function Main()
{
  return(
  <div>
    
  
  
  </div>
  );
}
function Page(){
  return(
    <container className="" >
  <div className="box">
    
<Header/>
<h2>fun facts about computer</h2>
<ul>
  <li>i am sowmya</li>
  <li>what are you doing</li>
  <li>i am eating</li>
</ul>
<Main/>
</div>
</container>
);
}
export default Page;*/



