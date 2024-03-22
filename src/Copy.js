import React, { useState } from 'react';
import '../Components/components.css';
import doctorContact from '../Assets/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faPhone, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import ServicesSpecilities from '../Components/ServicesSpecilities';

const Contact = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Message, setMessage] = useState('');
    const [Errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const newErrors = {};

        if (!Name.trim()) {
            newErrors.Name = "Name is required";
            isValid = false;
        }
        else{
            newErrors.Name = "";
        }

        if (!Email.trim()) {
            newErrors.Email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(Email.trim())) {
            newErrors.Email = "Email is invalid";
            isValid = false;
        } else{
            newErrors.Email = "";
        }

        if (!Phone.trim()) {
            newErrors.Phone = "Phone number is required";
            isValid = false;
        } else if (isNaN(Phone) || Phone.length !== 10) {
            newErrors.Phone = "Invalid phone number";
            isValid = false;
        } else{
            newErrors.Phone = "";
        }

        if (!Message.trim()) {
            newErrors.Message = "Message is required";
            isValid = false;
        } else{
            newErrors.Message = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (validateForm()) {
            const submittedData = {Name,Email,Phone,Message};
            console.log("Form is valid. Submitting...",submittedData);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } else {
            console.log("Form is invalid. Please correct errors.");
        }
    };

    return (
        <>
            <div className='container' style={{ marginTop: "70px" }}>
                <div className="row rowContainer">
                    <div className="col border border-primary containerImage" style={{ backgroundImage: `url(${doctorContact})` }}></div>
                    <div className="col-md-5 p-2 border border-primary" id='col-border0001'>
                        <h3 className='text-success' style={{ fontWeight: "bolder", padding: "5px" }}>Contact Us</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type='text' className="form-control form-input" id="name" placeholder='Enter Name' name='Name' value={Name} onChange={(e) => setName(e.target.value)} />
                                {Errors.Name && <div className="text-danger" id='text-position1'>{Errors.Name}</div>}
                            </div>
                            <div className="form-group">
                                <input type='email' className="form-control form-input" id="email" placeholder='Enter Email' name='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                                {Errors.Email && <div className="text-danger" id='text-position2'>{Errors.Email}</div>}
                            </div>
                            <div className="form-group">
                                <input type='tel' className="form-control form-input" id="phone" placeholder='Enter Phone Number' name='Phone' value={Phone} onChange={(e) => setPhone(e.target.value)} />
                                {Errors.Phone && <div className="text-danger" id='text-position3'>{Errors.Phone}</div>}
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-input" id="message" rows="5" cols="6" placeholder='Enter Message' name='Message' value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                {Errors.Message && <div className="text-danger" id='text-position4'>{Errors.Message}</div>}
                            </div>
                            <button type="submit" className="btn btn-outline-success form-input" id='btn1'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-row  p-3 " id='customContainer0012'>
                    <div className="p-3 border customWidth rounded-1 border-success navbar-dark bg-success">
                        <FontAwesomeIcon icon={faPhone} />
                        <h5 style={{ display: "inline", marginLeft: "7px" }}>CALL US</h5>
                        <p style={{ marginBottom: "2px", marginTop: "10px", marginLeft: "15px" }}>1(234) 567-591</p>
                        <p style={{ marginBottom: "2px", marginLeft: "15px" }}>1(234) 587-654</p>
                    </div>
                    <div className="p-3 border customWidth rounded-1 border-success navbar-dark bg-success">
                        <FontAwesomeIcon icon={faLocation} />
                        <h5 style={{ display: "inline", marginLeft: "7px" }}>LOCATION</h5>
                        <p style={{ marginBottom: "2px", marginTop: "10px", marginLeft: "15px" }}>121 Rock Sreet, 21 Avenue, New York, NY</p>
                        <p style={{ marginBottom: "2px", marginLeft: "15px" }}>92103-9000</p>
                    </div>
                    <div className="p-3 border customWidth rounded-1 border-success navbar-dark bg-success">
                        <FontAwesomeIcon icon={faStopwatch} />
                        <h5 style={{ display: "inline", marginLeft: "7px" }}>HOURS</h5>
                        <p style={{ marginBottom: "2px", marginTop: "10px", marginLeft: "15px" }}>Mon-Fri___11am-8pm</p>
                        <p style={{ marginBottom: "2px", marginLeft: "15px" }}>Sat-Sun___6am-8pm</p>
                    </div>
                </div>
                <ServicesSpecilities />
            </div>
        </>
    );
}

export default Contact;
