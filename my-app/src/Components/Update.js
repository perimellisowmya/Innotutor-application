import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Productservice from './Productservice';

const Update = () => {

    const [coursename, setCoursename] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const[intro,setIntro]=useState('')
    const[main,setMain]=useState('')
    
   
   
    const Navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {coursename,description,price,category,type,intro,main}
        
        if(id){
            Productservice.updateEmployee(id, employee).then((response) => {
                Navigate.push('/pendingcourse')
            }).catch(error => {
                console.log(error)
            })

        }else{
            Productservice.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                Navigate.push('/approved');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        Productservice.getEmployeeById(id).then((response) =>{
            setCoursename(response.data.coursename)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setCategory(response.data.category)
            setType(response.data.type)
            setIntro(response.data.intro)
            setMain(response.data.main)
           
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Course</h2>
        }else{
            return <h2 className = "text-center">Add Course</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-15 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body"  style={{width:"100%"}}>
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Course name</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "coursename"
                                        className = "form-control"
                                        value = {coursename}
                                        onChange = {(e) => setCoursename(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Description</label>
                                    <textarea
                                        type = "text-area"
                                        // placeholder = "Enter discription"
                                        name = "description"
                                        className = "form-control"
                                        value = {description}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">Category</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter category"
                                        name = "category"
                                        className = "form-control"
                                        value = {category}
                                        onChange = {(e) => setCategory(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Course type</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter type"
                                        name = "type"
                                        className = "form-control"
                                        value = {type}
                                        onChange = {(e) => setType(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> intro link</label>
                                    <input
                                        type = "text"
                                        placeholder = "link"
                                        name = "intro"
                                        className = "form-control"
                                        value = {intro}
                                        onChange = {(e) => setIntro(e.target.value)}
                                    >
                                    </input>   
                                   
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> main link</label>
                                    <input
                                        type = "text"
                                        placeholder = "main link"
                                        name = "main"
                                        className = "form-control"
                                        value = {main}
                                        onChange = {(e) => setMain(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default Update;