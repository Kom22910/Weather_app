

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LayoutBody = () => {

  const nav = useNavigate();

  const [city, setCity] = useState("");

  const HandleData = (e) => {
    const { value } = e.target;
    setCity(value);
  };


  const SubmitData = (e) => {
    e.preventDefault();

    nav(`/weather-app/${city}`);

  }



  return (
    <>

      <div className="col-12 layoutBodySection">
        <div className="col-11 m-auto cards">


          <div className="col-md-7 col-12 m-auto inputSection my-3 px-3">
            <div className="row">

              <div className="col-8 m-auto">
                <input type="text" placeholder='Enter City Name' className="form-control py-md-3" value={city} onChange={(e) => HandleData(e)} />
              </div>

              <div className="col-4 m-auto">
                <button className='btn py-2 bg-warning rounded-pill fs-5 fw-bold' onClick={(e) => SubmitData(e)}>Search</button>
              </div>

            </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default LayoutBody;