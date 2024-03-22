import React from 'react';
import Menu from '../Components/Menu';
import ServicesSpecilities from '../Components/ServicesSpecilities';

const About = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h2 style={{ marginTop: "70px" }}>About Our Medical Services</h2>
                        <p className='p-3' style={{ borderRadius: "10px", color: "black", fontSize: "15px"}}>
                            <span style={{textTransform:"uppercase",fontSize:"25px"}}>A</span>t Our Medical Center, we are dedicated to providing comprehensive and compassionate medical care to our patients. Our team of highly skilled healthcare professionals is committed to promoting the well-being of our community through preventative care, diagnosis, and treatment of a wide range of medical conditions.
                            Whether you need routine check-ups, vaccinations, or specialized care, we are here to support you every step of the way. From family medicine to specialized services such as cardiology, dermatology, and orthopedics, we offer a full spectrum of healthcare services tailored to meet your unique needs.
                            At Our Medical Center, we prioritize patient safety, comfort, and satisfaction. 
                        </p>
                    </div>
                </div>
                <Menu />
                <ServicesSpecilities />
            </div>

        </>
    );
};

export default About;
