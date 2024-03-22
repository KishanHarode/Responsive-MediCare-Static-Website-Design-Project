import React from 'react';
import './components.css';
const ServicesSpecilities = () => {
    return (
        <>
            <div className="container containerService" style={{ marginTop: "20px" }}>
                <h3 style={{ fontWeight: "bolder" }}>SERVICES & SPECILITIES</h3>
                <p style={{ fontSize: "15px" }}>Consulting to doctore for Providing compassionate and
                    comprehensive healthcare to patients of all ages. Expertise
                    in cardiology, dedicated to diagnosing and treating heart conditions
                    with precision and care.
                </p>
                <div className='container12'>
                    <div id='f-item1'>
                        <h4>Cardiology</h4>
                        <p>Specilizing in the diagnosis and treatment of heart-related
                            conditions. Our mission is to promote heart health and provide
                            personalized care to each patient.
                        </p>
                    </div>
                    <div id='f-item2'>
                        <h4>Dermatology</h4>
                        <p>Offering advanced skin care solutions tailored to individual needs.
                            From acne to skin cancer, we're committed to enhancing skin health and confidence.
                        </p>
                    </div>
                    <div id='f-item3'>
                        <h4>Employer Solution</h4>
                        <p>Providing tailored workface management strategies and HR Solutions.
                            We empower businesses to optimize efficiency and foster employee success.
                        </p>
                    </div>
                    <div id='f-item4'>
                        <h4>Excecutive Health</h4>
                        <p>Delivering personalized healthcare services tailored for busy professionals.
                            Our comrehensive approach ensures peak performance and well-being at every level.
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default ServicesSpecilities;