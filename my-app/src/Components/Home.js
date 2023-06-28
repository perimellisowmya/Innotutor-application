
import { coursesCard } from './dummydata'

import OnlineCourses from './OnlineCourses';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Home(props) {
    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate()
    const routeChange = (currentId) => {

        navigate('/Coursedetails', { state: { currentData: currentId, } });


    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        coursesCard.filter((coursesName) => {
            return coursesName.name.match(searchInput);
        });
    }

    return (
        <div>
            <h2 style={{ color: "black" }}><center>welcome to learning</center></h2>
            <div className="card" style={{ overflowX: "hidden", overflowY: "scroll", top: "50px", marginbottom: "10px" }}>
                <h3 style={{ color: "black" }}>A Broad Selection of Courses</h3>
                <div style={{
                        marginLeft: "600px",
                        marginTop: "100px",
                        fontWeight: "700"
                    }}>
                        <input
                            type="text"
                            placeholder="Search here"
                            onChange={handleChange}
                            value={searchInput} />
                    </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    
                    {(coursesCard.map((val) => (
                        <div style={{ width: "20%", margin: "10px" }} >
                            {/* <img src={val.cover} roundedcircle style={{height:"30px",width:"30px",backgroundColor:"black"}}  /> */}
                            <div className="card-body " style={{ top: "-20px" }}><h5><b>{val.coursesName}</b></h5>
                                <img src={val.image} className="card-img-top" alt="..." onClick={() => routeChange(val)} />
                                <p className="card-title">Alice Liddel</p>
                                <p>{val.totalTime}</p>
                                <p><b>{val.priceAll}</b></p>
                                <button className="btn btn-secondary justify-center "> <Link to="/">Enroll</Link></button>
                            </div>
                        </div>
                    )))}
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


