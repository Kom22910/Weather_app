

import '../A-Globalstyle/App.css';

import React from 'react'

const LoadingPage = ({loading}) => {
    return (
        <>

            {
                loading &&
                <div className="loadingContainer">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            }




        </>
    )
}

export default LoadingPage;