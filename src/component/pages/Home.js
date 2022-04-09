import React from 'react'
import AddStudent from '../../Home/AddStudent';
import Header from '../../Home/Header';
import ShowStudent from '../../Home/ShowStudent';


const Home = () => {
    

    return (

        <>
            <div className="container-fluid gx-0">
                <div className="row">
                    <Header />
                </div>
                <div className="row mt-4">
                    <AddStudent />
                    <ShowStudent />
                    
                </div>
            </div>
        </>
    )
}

export default Home
