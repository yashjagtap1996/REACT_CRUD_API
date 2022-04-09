import React,{useState,useEffect} from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { NavLink } from 'react-router-dom'


const ShowStudent = () => {
    const [student, setStudent] = useState([]);

    const getStudents = async () => {
        try {
            const students = await axios.get("http://localhost:3001/students")
            setStudent(students.data)
        } catch (error) {
            console.log("Error");
        }

    }
    useEffect(() => {
        getStudents()
    }, [student])


    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3001/students/${id}`)
        let newList=student.filter((element)=>{
            return element.id !== id
        })
        setStudent(newList)
    }

  return (
    <>
          <div className="col-md-6 mt-5 mt-md-0 text-center student_list">
              <h1 className='shadow'>Student List</h1>
              <div className="table-responsive-lg">
                  <table className="table align-middle"> 
                      <thead>
                          <tr>
                              <th>No.</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              student.map((element) => {
                                  return <tr key={element.id}>
                                      <td>{element.id}</td>
                                      <td>{element.name}</td>
                                      <td>{element.email}</td>
                                      <td>
                                          <NavLink exact to={`/view/${element.id}`}><span className='me-4 text-success'><BsFillEyeFill title="View" /></span></NavLink>
                                          <NavLink exact to={`/update/${element.id}`}><span className='me-4 text-warning'><MdModeEditOutline title='Edit' /></span></NavLink>
                                          <span className='text-danger Delete' onClick={()=>handleDelete(element.id)} ><MdDelete title='Delete' /></span>
                                      </td>
                                  </tr>
                              })
                          }

                      </tbody>
                  </table>
              </div>
          </div>
    </>
  )
}

export default ShowStudent
