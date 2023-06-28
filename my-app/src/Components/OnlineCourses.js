
import React from "react"
import "./courses.css"
import { online } from "./dummydata"
import { useNavigate } from 'react-router-dom'


const OnlineCourses = () => {
    const navigate = useNavigate()


    const routeChange = (currentId) => {
        console.log(currentId)
        navigate('/OnlineDetails', { state: { currentData: currentId, } });

    }
    return (
        <>

            <section className='online'>
                <div className="onlineonline">
                    <h2 style={{ position: "relative", top: "40px", color: "#001F3F" }}>Online Courses</h2>
                    <div className='container'>
                        {/* <Heading subtitle='COURSES' title='Browse Our Online Courses' /> */}

                        <div className='content grid3'>

                            {online.map((val) => (
                                <div className='box'>
                                    <div className='img'>
                                        <img src={val.cover} />
                                        <img src={val.hoverCover}  onClick={() => routeChange(val)}  alt='' className='show' />
                                    </div>
                                    <h1>{val.courseName}</h1>
                                    <span >{val.course} </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OnlineCourses