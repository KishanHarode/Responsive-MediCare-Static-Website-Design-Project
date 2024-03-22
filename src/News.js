import React from 'react';
import medicalData from '../Components/medicalData';
import '../Components/components.css';
import { Link } from 'react-router-dom';
import ServicesSpecilities from '../Components/ServicesSpecilities';

const News = () => {
  return (
    <div className='container p-3' style={{ marginTop: "70px" }}>
      <h3 style={{ fontWeight: "bolder", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>OUR NEWS</h3>
      <div className='row row-cols-1 row-cols-md-4 MyCustomContainer'>
        {medicalData.map((item, index) => (
          <div key={index} className='col'>
            <div className='myCustomElement p-3'>
              <div className="image-container border border-success rounded-3 border-2">
                <img src={item.image} className='card-img-top rounded-2' alt={`${item}`} height="150px" width="300px" />
              </div>
              <div className='card-body'>
                <h5 className='card-title mt-3 text-center' style={{fontSize:"20px"}}>{`${item.id} ${item.title}`}</h5>
                <Link to={`/ReadPage/${item.id}`} className="link"><button type='button' className='btn btn-outline-success customButton'>Read More</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ServicesSpecilities/>
    </div>
  );
}

export default News;
