import React from 'react';
import '../Components/components.css';
import doctorImage from '../Assets/doctor-woman-medical-isolated-white-background-35581032.webp';
import Menu from '../Components/Menu';
const Services = () => {
    const doctor = {
        urlImage: doctorImage,
        imageSizeHeight: "400px",
        imageSizeWidth: "300px"
    }
    return (
        <>
            <div className='container  p-3' style={{ marginTop: "70px" }}>
                <h3 style={{ fontWeight: "bolder", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>OUR SERVICES</h3>
                <p style={{ fontSize: "15px", textAlign: "center" }}>Learn more about the various services offered by Our Clinic and how we provide
                    you with world-class care. Ongoing support and follow-up care to guide you through your medical journey
                    and optimize your health outcomes.
                </p>
                <div class="row">
                    <div class="col col1-container">
                        <div className='s-item1'>
                            <h4>Echocardiograms</h4>
                            <p>Associates is able to view the beating of the heart
                                and manyof its structures.
                            </p>
                        </div>
                        <div className='s-item2'>
                            <h4>Pediatric Services</h4>
                            <p>If you are expecting a child, follow-up care with Our
                                clinic Pediatric can be arranged prior to or after your
                                hospital/birth discharge.
                            </p>
                        </div>
                        <div className='s-item3'>
                            <h4>Women's Healthcare</h4>
                            <p>Women's health is a field covering the numerous health
                                concerns that women face, form reproductive and sexual
                                health mammagrams.
                            </p>
                        </div>
                    </div>
                    <div class="col col2-container ">
                        <img src={doctor.urlImage} height={doctor.imageSizeHeight} width={doctor.imageSizeWidth} alt='doctor' />
                    </div>
                    <div class="col col3-container">
                        <div className='s-item4'>
                            <h4>Dermatology</h4>
                            <p>Our Providers are trained to handle a
                                spectrum of skin conditions, covering the majority
                                of dermatolgy.
                            </p>
                        </div>
                        <div className='s-item5'>
                            <h4>Laboratory Testing</h4>
                            <p> Laboratory Orders are created within the patient's electronic
                                medical recorded (EHR) and transmitted to our Laboratory. Once
                                the sample is obtained.
                            </p>
                        </div>
                        <div className='s-item6'>
                            <h4>CT Scans</h4>
                            <p>A CT scan (computed tomogrophy) scan is a non-innovative orocedure that allows
                                providers to view 3D imagestaken from a services of 2D
                                X-ray images.
                            </p>
                        </div>
                    </div>
                </div>
                <Menu />
            </div>

        </>
    )
}
export default Services;