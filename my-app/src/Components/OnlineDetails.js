import React from 'react'
import { useLocation } from 'react-router-dom'
function OnlineDetails() {
    const { state } = useLocation();
    const { currentData } = state;
    console.log("st", state, currentData)
    // const [data, setData] = useState([]);
    // const [sortType, setSortType] = useState('price');
    // const [sortFactor, setSortFactor] = useState(1);
    // useEffect(() => {
    //     const sortArray = type => {

    //         const types = {
               
    //             price: 'price',
    //             rating: 'rating',
    //         };
            
    //         const sortProperty = types[type];
    //         const sorted = [...coursesCard].sort((a, b) => a[sortProperty] - b[sortProperty]);
    //         setData(sorted);
    //     };

    //     sortArray(sortType);
    // }, [sortType]);

    // const sortArray = () => {
    //     const sorted = [...coursesCard].sort((a, b) => sortFactor * (b[sortType] - a[sortType]));
    //     setData(sorted);
    // };
    return (
        <div>
            <div className="card"
                style={{ overflowX: "hidden", overflowY: "scroll", top: "50px", marginbottom: "10px" }}>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    <div style={{ width: "20%", margin: "10px" }} >

                        <div className="card-body " style={{ top: "-20px" }}><h5><b></b></h5>

                            <img src={currentData.cover} style={{ cursor: "pointer" }} className="card-img-top" alt="..." />
                            <h6 > {currentData.AvailableCourse1}</h6>

                            <p ><b>{currentData.price}</b></p>
                            <p ><b>{currentData.rating}</b></p>

                        </div>
                    </div>
                    <div style={{ width: "20%", margin: "10px" }} >

                        <div className="card-body "><h5><b></b></h5>

                            <img src={currentData.cover} style={{ cursor: "pointer" }} className="card-img-top" alt="..." />
                            <h6 > {currentData.AvailableCourse2}</h6>

                            <p ><b>{currentData.price}</b></p>
                            <p ><b>{currentData.rating}</b></p>


                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default OnlineDetails