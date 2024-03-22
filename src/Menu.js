import React from 'react';
import teeth from '../Assets/360_F_363927285_O6cmcdgZ4E3tlEKz16QW5EwBHBpxNeAb.jpg';
import './components.css';

const Menu = () => {
    const imageUrl2 = {
        image: teeth,
        sizeHeight: "50px",
        sizeWidth: "50px"
    }
    return (
        <div className='container mt-4 customContainer1 bg-success' >
            <div className='item1'>
                <img src={imageUrl2.image} height={imageUrl2.sizeHeight} width={imageUrl2.sizeWidth} alt='teeth' style={{ border: "1px solid red", borderRadius: "100%" }} />
                <h4 style={{ color: "white" }}>Our Staff</h4>
                <p style={{ color: "white" }}>Staff for medical purposes are essential personnel
                    who provide crucial support in various healthcare settings such as hospitals,
                    clinics, and medical facilities.
                </p>
            </div>
            <div className='item2'>
                <img src={imageUrl2.image} height={imageUrl2.sizeHeight} width={imageUrl2.sizeWidth} alt='teeth' style={{ border: "1px solid red", borderRadius: "100%" }} />
                <h4 style={{ color: "white" }}>Our Services</h4>
                <p style={{ color: "white" }}>Staff for medical purposes are essential personnel
                    who provide crucial support in various healthcare settings such as hospitals,
                    clinics, and medical facilities.
                </p>
            </div>
            <div className='item3'>
                <img src={imageUrl2.image} height={imageUrl2.sizeHeight} width={imageUrl2.sizeWidth} alt='teeth' style={{ border: "1px solid red", borderRadius: "100%" }} />
                <h4 style={{ color: "white" }}>Appointment & Access</h4>
                <p style={{ color: "white" }}>Staff for medical purposes are essential personnel
                    who provide crucial support in various healthcare settings such as hospitals,
                    clinics, and medical facilities.
                </p>
            </div>
        </div>
    );
}

export default Menu;
