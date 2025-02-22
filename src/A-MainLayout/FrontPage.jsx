

import React from 'react'
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {

  const nav = useNavigate();


  return (
    <>

      <div className="col-12  FrontendPage">

        <div className="col-md-6 col-11 m-auto section1">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rain-cloud-pack-icons-5753008.png?f=webp" alt="weather" className='d-block w-100' />
        </div>


        <h1 className='text-white text-center fw-bold display-4'>Weather Forecast</h1>

        <div className="col-7 m-auto text-center mt-5">
          <button className='btn btn-warning m-auto w-25 py-2 rounded-pill fs-4 fw-bold' onClick={()=>nav('/weather-app')}>Get Started</button>
        </div>

      </div>


    </>
  )
}

export default FrontPage;