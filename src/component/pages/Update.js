import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button'
import BackToHome from './BackToHome'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Update = () => {

    const {id}=useParams()

    const [student, setStudent] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {
        const getStudent = async () => {
            const stud = await axios.get(`http://localhost:3001/students/${id}`)
            setStudent(stud.data)
        }
        getStudent()
    }, [id])

    const handleInput = (e) => {
        const { name, value } = e.target

        setStudent((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/students/${id}`, student)
            toast("Updated Successfullt");

        } catch (error) {
            console.log("Errors");
        }
        setStudent({
            name:"",
            email:""
        })

    }

    return (
        <>
            <div className="container-fluid gx-0 UpdateForm">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="p-3">Update Student</h1>
                    </div>
                </div>
                <div className="row justify-content-center mb-4">
                    <div className="col-md-6 shadow p-5 box">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div class="col-md-12">
                                    <button style={{fontSize:"2rem"}} className='btn btn-success w-100' disabled>ID:{student.id}</button>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div class="col-md-6">
                                    <input type="text" required minLength="4" maxlength="15" onChange={handleInput} name="name" value={student.name} class="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" required onChange={handleInput} name="email" value={student.email} class="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <Button className='w-100' type="submit" variant="contained">SAVE</Button>
                                    <ToastContainer position="top-center"
                                        autoClose={5000} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <BackToHome />
            </div>
        </>
    )
}

export default Update
