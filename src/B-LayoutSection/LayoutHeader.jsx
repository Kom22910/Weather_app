


import React from 'react'
import { useNavigate } from 'react-router-dom';

const LayoutHeader = () => {

  const nav = useNavigate();


  return (
    <>

      <div className="col-12 layoutHeaderSection ">
        <div className="col-sm-5 col-10 m-auto" onClick={()=>nav('/')}>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rain-cloud-pack-icons-5753008.png?f=webp" alt="weather" className='d-block w-100' />
        </div>
      </div>

    </>
  )
}

export default LayoutHeader;