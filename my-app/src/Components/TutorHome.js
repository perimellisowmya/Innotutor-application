
import { coursesCard } from './dummydata'

import OnlineCourses from './OnlineCourses';
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Nav';
import { useState, useEffect } from 'react'
import axios from 'axios';
import HomeServices from './HomeServices';
import Navtutor from './Navtutor';

function Home(props) {
    const navigate = useNavigate()
    const[Courses,setCourses]=useState([]);
   

    const routeChange = (currentId) => {
        console.log(currentId)
        navigate('/Coursedetails', { state: { currentData: currentId, } });

    }
  
    
   
    return (
        <div>
            <Navtutor />
            <h2
                style={{ color: "black" }}>
                <center>welcome to Innotutor</center></h2>
               

            <div className="card"
                style={{ overflowX: "hidden", overflowY: "scroll", top: "50px", marginbottom: "10px" }}>
                <h3
                    style={{ color: "black" }}>A Broad Selection of Courses</h3>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>


                    {Courses.map((val) => (
                        <div style={{ width: "20%", margin: "10px" }} >
                            {/* <img src={val.cover} roundedcircle style={{height:"30px",width:"30px",backgroundColor:"black"}}  /> */}
                            <div className="card-body " style={{ top: "-20px" }}><h5><b>{val.coursesName}</b></h5>
                                {/* <h6>{val.id} </h6> */}
                                <img src={val.image} style={{ cursor: "pointer" }} onClick={() => routeChange(val)} className="card-img-top" alt="..." />
                                <h6 > {val.author}</h6>
                                {/* <p >{val.totalTime}</p> */}
                                <p ><b>{val.price}</b></p>
                                <button className="btn btn-secondary justify-center "> <Link to="/">Enroll</Link></button>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
            <OnlineCourses />

        </div>

    );
}
export default Home;









        // <Card className='card' >
        //      {coursesCard.map((val) => (
        //         <div className='item' >
        //             <h1>{val.coursesName}</h1>
        //   <Card.Img variant="top" src={val.image}  />
        //   <Card.Body>
        //     <Card.Title>{val.author}</Card.Title>
        //     <Card.Text>
        //       Some quick example text to build on the card title and make up the
        //       bulk of the card's content.
        //     </Card.Text>
        //     <Card.Text>
        //       {val.priceAll}        </Card.Text>

        //     <Button variant="primary">Enroll</Button>
        //   </Card.Body>
        //   </div>
        //   ))}
        // </Card>


