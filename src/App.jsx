import React from 'react';
import './A-Globalstyle/App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Layout from './A-MainLayout/Layout.jsx';
import WeatherDetail from './C-ExtraPages/WeatherDetail.jsx';

const App = () => {

  return (
    <>

        <Router>

            <Routes>

                <Route  path='/'  element={<Layout/>}    />
                <Route  path='/weather/:city'  element={<WeatherDetail/>}    />

            </Routes>

        </Router>

    </>
  )
}

export default App;