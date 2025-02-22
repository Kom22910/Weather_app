import React from 'react';
import './A-Globalstyle/App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Layout from './A-MainLayout/Layout.jsx';
import WeatherDetail from './C-ExtraPages/WeatherDetail.jsx';
import FrontPage from './A-MainLayout/FrontPage.jsx';
import WeatherCard from './C-ExtraPages/WeatherCard.jsx';
import Forecast from './C-ExtraPages/Forecast.jsx';

const App = () => {

  return (
    <>

        <Router>

            <Routes>

                <Route  path='/'  element={<FrontPage/>}    />
                <Route  path='/weather-app'  element={<Layout/>}    />
                <Route  path='/weather-app/:city'  element={<WeatherCard/>}    />
                <Route  path='/weather-app/detail/:city/:lat/:long'  element={<WeatherDetail/>} />
                <Route  path='/weather-app/forecast/:city/:lat/:long'  element={<Forecast/>} />


            </Routes>

        </Router>

    </>
  )
}

export default App;