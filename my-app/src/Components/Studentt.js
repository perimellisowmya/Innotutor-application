import React from 'react'
import { coursesCard } from './data'
import {Link} from 'react-router-dom'
import Nav from './Nav';
function Studentt()
{
    return(
        <div>
          <Nav/>
             <h2 style={{ color: "black" }}><center>Enrolled courses</center></h2>
            <div className="card" style={{ overflowX: "hidden", overflowY: "scroll", top: "50px", marginbottom: "10px" }}>
                {/* <h3 style={{ color: "black" }}>A Broad Selection of Courses</h3> */}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    {coursesCard.map((val) => (
                        <div style={{ width: "20%", margin: "10px" }} >
                            {/* <img src={val.cover} roundedcircle style={{height:"30px",width:"30px",backgroundColor:"black"}}  /> */}
                            <div className="card-body " style={{ top: "-20px" }}><h5><b>{val.coursesName}</b></h5>
                                <img src={val.image} className="card-img-top" alt="..." />
                                <p className="card-title">Alice Liddel</p>
                                <p>{val.totalTime}</p>
                                <p><b>{val.priceAll}</b></p>
                                <button className="btn btn-secondary justify-center "> <Link to="/content">View Content</Link></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Studentt;