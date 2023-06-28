import axios from 'axios'

const Course_Url="";

class HomeServices{
getAllCourses()
{
    return axios.get(Course_Url)
}
}
export default HomeServices