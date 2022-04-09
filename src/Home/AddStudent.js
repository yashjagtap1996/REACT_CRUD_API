import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddStudent = () => {


    const [student, setStudent] = useState({
        name: "",
        email: ""
    })

    const handleInput = (e) => {

        const {name,value}=e.target
        setStudent((prevState)=>{
            return {...prevState,
            [name]:value
            }
        })
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/students",student)
            toast("Added Successfully");

        }catch(error){
            console.log("Errors");
        }
        setStudent({
            name: "",
            email: ""}
            )
    }


    return (
        <>
            <div className="col-md-6 text-center add_student">
                <h1 className='shadow'>Add Student</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row mt-3 g-3">
                        <div className="col">
                            <input type="text" minLength="4" maxlength="15" required className="form-control" onChange={handleInput} name="name" value={student.name} placeholder="Enter Name" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="email" required className="form-control" onChange={handleInput} name="email" value={student.email}  placeholder="Enter Email" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row mt-1 g-3">
                        <div className="col">
                            <Button type="submit" variant="contained">ADD</Button>
                            <ToastContainer position="top-left"
                                autoClose={5000} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddStudent
