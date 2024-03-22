import React from 'react';
import medicalData from '../Components/medicalData';
import { Link, useParams } from 'react-router-dom';
import Menu from '../Components/Menu';

const ReadPage = () => {
    const { id } = useParams();
    const selectedItem = medicalData.find((item) => item.id === parseInt(id));

    return (
        <>
            <div className='container p-4 ' style={{ marginTop: "70px" }}>
                <div className="row d-flex justify-content-between">
                    <div className="col-sm-4 ReadImage" style={{ backgroundImage: `url(${selectedItem.image})`, backgroundSize: "cover", backgroundPosition: "center", height: "250px", width: "500px" }}></div>
                    <div className="col-sm-4 d-flex flex-column" style={{ width: "500px" }}>
                        <h4 style={{ fontFamily: "sans-serif", textAlign: "left", marginBottom: "20px", fontWeight: "bolder" }}>{selectedItem.title}</h4>
                        <p style={{ fontFamily: "sans-serif", textAlign: "left" }}>{selectedItem.description}</p>
                        <Link to='/news' style={{textDecoration:"none"}}><button className='btn btn-outline-success buttonSuccessLine'>Go Back</button></Link>
                    </div>
                </div> 
                <Menu />
            </div>
            
        </>

    );
}

export default ReadPage;
