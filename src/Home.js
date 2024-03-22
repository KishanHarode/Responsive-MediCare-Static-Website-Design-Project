import React from 'react';
import homeImage from '../Assets/homeivhero.png';
import '../Components/components.css';
import Menu from '../Components/Menu';
import ServicesSpecilities from '../Components/ServicesSpecilities';

const Home = () => {
    const imageUrl = {
        image: homeImage,
        sizeHeight: "350px", 
        sizeWidth: "400px", 
    }
    
    return (
        <div className='container'>
            <div className='row mt-5 customContainer'>
                <div className="col-lg-6 order-lg-1 order-2 box-container1">
                    <h1>Cleveland Clinic</h1>
                    <h2>Canada</h2>
                    <p>
                        Medical science encompasses the study, diagnosis, treatment, and
                        prevention of diseases and disorders in humans. Rooted in a combination of empirical observation, experimentation, and rigorous analysis.
                    </p>
                    <button className='btn btn-outline-success'>Book Appointment</button>
                </div>
                <div className="col-lg-6 order-lg-2 order-1 d-flex justify-content-center align-items-center">
                    <img src={imageUrl.image} style={{ height: imageUrl.sizeHeight, width: imageUrl.sizeWidth }} className='CustomImage' alt='Home' />
                </div>
            </div>
            <Menu/>
            <ServicesSpecilities/>
        </div>
    );
}

export default Home;
