


import React from 'react'
import { useNavigate } from 'react-router-dom';

const LayoutHeader = () => {

  const nav = useNavigate();


  return (
    <>

      <div className="col-12 layoutHeaderSection ">
        <div className="col-11 m-auto py-3">

          <div className="row">

            <div className="col-md-4 col-5 section1">
              <h2 className='text-center'>Weather App</h2>
            </div>

            <div className="col-md-8 col-7 section2 m-auto">
              <ul>
                  <li onClick={()=>nav('/')}>Home</li>
                  <li>Options 2</li>
              </ul>
            </div>

          </div>


        </div>
        <hr />
      </div>

    </>
  )
}

export default LayoutHeader;