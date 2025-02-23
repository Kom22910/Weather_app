

import React from 'react'
import LayoutHeader from '../B-LayoutSection/LayoutHeader';
import LayoutBody from '../B-LayoutSection/LayoutBody';

const Layout = () => {
  return (
    <>

        <div className="col-12 Mainlayout">
            <div className="row">

                <LayoutHeader/>

                <LayoutBody/>

            </div>
        </div>
    
    
    </>
  )
}

export default Layout;