import React, { useState } from 'react';
import '../Components/components.css';
import doctorContact from '../Assets/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faPhone, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Message, setMessage] = useState('');
    const [Errors, setErrors] = useState({});
    const [submit,setSubmit] = useState(false);

    const validateForm = () => {
        let isValid = true;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const nameRegex = /^[A-Za-z\s]+$/; 
        const newErrors = {};
    
        if (!Name.trim()) {
            newErrors.Name = "Name is required";
            isValid = false;
        } else if (!nameRegex.test(Name.trim())) {
            newErrors.Name = "Name is Invalid";
            isValid = false;
        }
    
        if (!Email.trim()) {
            newErrors.Email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(Email.trim())) {
            newErrors.Email = "Email is invalid";
            isValid = false;
        }
    
        if (!Phone.trim()) {
            newErrors.Phone = "Phone number is required";
            isValid = false;
        } else if (isNaN(Phone) || Phone.length !== 10) {
            newErrors.Phone = "Invalid phone number";
            isValid = false;
        } 
    
        if (!Message.trim()) {
            newErrors.Message = "Message is required";
            isValid = false;
        } 
         
        setErrors(newErrors);
        setTimeout(() => {
            setErrors({});
        }, 3000);
        return isValid;
    };
    
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        
        if (name === 'Name') {
            setName(value);
        } else if (name === 'Email') {
            setEmail(value);
        } else if (name === 'Phone') {
            setPhone(value);
        } else if (name === 'Message') {
            setMessage(value);
        }

        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const submittedData = { Name, Email, Phone, Message };
            setSubmit(true);
            setTimeout(() => {
                setSubmit(false);
            }, 2000);
            console.log("Form is valid. Submitting...", submittedData);
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
                    <div className="col border  containerImage" style={{ backgroundImage: `url(${doctorContact})` }}></div>
                    <div className="col-md-5 p-2 " id='col-border0001'>
                        <h3 className='text-success' style={{ fontWeight: "bolder", padding: "5px" }}>Contact Us</h3>
                        <form onSubmit={handleSubmit} className='form'>
                            <div className="form-group">
                                <input type='text' className="form-control form-input" id="name" placeholder='Enter Name' name='Name' value={Name} onChange={handleInputChange} />
                            </div> 
                            {Errors.Name && <div className="text-danger" id='text-position1'>Name is Required</div>}

                            <div className="form-group">
                                <input type='email' className="form-control form-input" id="email" placeholder='Enter Email' name='Email' value={Email} onChange={handleInputChange} />
                                {Errors.Email && <div className="text-danger" id='text-position2'>{Errors.Email}</div>}
                            </div>
                            <div className="form-group">
                                <input type='tel' className="form-control form-input" id="phone" placeholder='Enter Phone Number' name='Phone' value={Phone} onChange={handleInputChange} />
                                {Errors.Phone && <div className="text-danger" id='text-position3'>{Errors.Phone}</div>}
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-input" id="message" rows="5" cols="6" placeholder='Enter Message' name='Message' value={Message} onChange={handleInputChange}></textarea>
                                {Errors.Message && <div className="text-danger" id='text-position4'>{Errors.Message}</div>}
                            </div>
                            <button type="submit" className="btn btn-outline-success form-input" id='btn1'>Submit</button>
                            {submit && <span className='text-success line'>Data Submitted Successfully...</span>}
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-row p-3 flex-wrap" id='customContainer0012'>
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
            </div>
        </>
    );
}

export default Contact;
