import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackToHome from './BackToHome';


const View = () => {

    let { id } = useParams();
    const [student, setStudent] = useState([])


    useEffect(() => {
        const getStudent = async () => {
            const stud = await axios.get(`http://localhost:3001/students/${id}`)
            setStudent(stud.data)
        }
        getStudent()
    }, [id])

    

    return (
        <>
            <div className="container-fluid gx-0">
                <div className="row">
                    <div className="col-md-12 text-center student_details">
                        <h1 className='shadow'>Student Details</h1>
                        <div className="table-responsive-md mt-5">
                            <table className="table shadow">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <BackToHome />
            </div>
        </>
    )
}

export default View
