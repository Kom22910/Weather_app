

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../a-UseContext/Store.jsx';



const LayoutBody = () => {
  const {url , apiKey} = useStore();

  const nav = useNavigate();

  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const [timeDay, setTime] = useState("");

  const FindDayorNight = (sunrise, sunset, timezone) => {
    let nowUTC = Math.floor(Date.now() / 1000);
    let localTime = nowUTC + timezone;

    if (localTime < sunrise) {
      setTime("Night")
    } else if (localTime >= sunrise && localTime < (sunrise + (sunset - sunrise) / 2)) {
      setTime("Day")
    } else if (localTime >= (sunrise + (sunset - sunrise) / 2) && localTime < sunset) {
      setTime("Day")
    } else {
      setTime("Evening");
    }
  }





  let time = new Date().toLocaleTimeString();

  const HandleData = (e) => {
    const { value } = e.target;
    setCity(value);
  };


  const SubmitData = (e) => {
    e.preventDefault();

    if (city === "") {
      return alert("Not entered the city name");
    }

    const FetchData = async () => {
      try {
        const res = await axios.get(`${url}?q=${city}&appid=${apiKey}&units=metric`);
        setData(res.data);
      }
      catch (err) {
        console.log(err);
        alert(err.response.data.message);
      }
    };

    FetchData();

    let timestamp = null;
    let sunrise = null;
    let sunset = null;

    if (data) {

      timestamp = data.timezone;
      sunrise = data.sys.sunrise;
      sunset = data.sys.sunset;
    }
    FindDayorNight(sunrise, sunset, timestamp);
  };


  const [weather, setWeather] = useState(null);


  useEffect(()=>{
    let imgUrl = "";
    
    if (data) {
      let weatherType = data.weather[0].main.toLowerCase();
      if (timeDay === "Day") {
  
        if (weatherType === "clear") {
          imgUrl = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png";
        }
        else if (weatherType === "clouds") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-forecast-nature-general-ui-pack-user-interface-icons-5376613.png?f=webp";
        }
        else if (weatherType === "rain") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/rain-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cloud-raining-rainy-weather-pack-nature-illustrations-4551619.png?f=webp";
        }
        else if (weatherType === "snow") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-snow-3d-icon-download-in-png-blend-fbx-gltf-file-formats--snowy-season-weather-pack-vol1-nature-icons-6777728.png?f=webp";
        }
        else if (weatherType === "haze") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/haze-3d-icon-download-in-png-blend-fbx-gltf-file-formats--fog-mist-cloud-nature-weather-pack-icons-7502104.png?f=webp";
        }
        else if (weatherType === "smoke") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/smoke-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--carbon-co2-warning-weather-pack-seasons-illustrations-4328031.png?f=webp";
        }
      }
  
      else if (timeDay === "Night" || timeDay === "Evening") {
  
        if (weatherType === "clear") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--moon-light-stars-half-weather-pack-nature-icons-5668682.png?f=webp";
        }
        else if (weatherType === "clouds") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-forecast-nature-weather-pack-icons-8363980.png?f=webp";
        }
        else if (weatherType === "rain") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/rain-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cloud-raining-rainy-weather-pack-nature-illustrations-4551619.png?f=webp";
        }
        else if (weatherType === "snow") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-snow-3d-icon-download-in-png-blend-fbx-gltf-file-formats--snowy-season-weather-pack-vol1-nature-icons-6777728.png?f=webp";
        }
        else if (weatherType === "haze") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/foggy-night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--winter-fog-mist-haze-weather-pack-icons-8786800.png?f=webp";
        }
        else if (weatherType === "smoke") {
          imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/smoke-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--carbon-co2-warning-weather-pack-seasons-illustrations-4328031.png?f=webp";
        }
      }
    }

    setWeather(imgUrl);

  } , [data])




  return (
    <>

      <div className="col-12 layoutBodySection">
        <div className="col-11 m-auto">
          <div className="row">


            <div className="col-md-7 col-12 m-auto inputSection my-3 px-3">
              <div className="row">

                <div className="col-8 m-auto">
                  <input type="text" placeholder='Enter City Name' className="form-control py-md-3" value={city} onChange={(e) => HandleData(e)} />
                </div>

                <div className="col-4 m-auto">
                  <button className='btn btn-success py-2 fs-md-5' onClick={(e) => SubmitData(e)}>Search</button>
                </div>

              </div>
            </div>


            {
              data &&
              <div className="col-sm-7 col-12 m-auto outputSection my-4">
                <div className="row">

                  <div className={timeDay === "Day" ? "col-md-8 col-10 ms-md-5 py-4 px-3 cardContainer" : "col-md-8 col-11 ms-md-5 py-4 px-3 cardContainer bg-dark text-white"}>

                    <div className="col-12 cardSection1">

                      <div className="col-11 m-auto">

                        <div className="row">

                          <div className="col-md-8 col-7 m-auto">
                            <h4 className='m-auto'>Current Weather</h4>
                          </div>

                          <div className="col-4 m-auto">
                            <p className='m-auto text-end'>{time}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <h3 className='text-center'>{data.name} ({data.weather[0].main.toLowerCase()})</h3>

                    <div className="col-12 cardSection2">

                      <div className="col-md-8 col-10 m-auto">
                        <div className="row">

                          <div className="col-md-7 col-10 m-auto">
                            <img src={weather && weather} alt="weather" className='d-block w-100' />
                          </div>


                          <div className="col-md-5 col-12 m-auto">
                            <p className='display-3 fw-bold p1'>{data.main.temp}<sup><span className='fs-2'>o</span></sup></p>
                            <p className='p2'>Real Feel : {data.main.feels_like} <sup>o</sup></p>
                          </div>

                        </div>
                      </div>
                    </div>


                    <div className="col-12 cardSection3 text-center my-3">
                      <button className='btn btn-success' onClick={() => nav(`/weather/${city}`)}>See More Details</button>
                    </div>




                  </div>

                </div>
              </div>
            }




          </div>
        </div>

      </div>


    </>
  )
}

export default LayoutBody;