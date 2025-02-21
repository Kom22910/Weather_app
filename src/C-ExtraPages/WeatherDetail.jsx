

import '../A-Globalstyle/WeatherPage.css';
import { useParams } from 'react-router-dom';
import LayoutHeader from '../B-LayoutSection/LayoutHeader.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../a-UseContext/Store.jsx';


const WeatherDetail = () => {

    const { city } = useParams();
    const { url, apiKey } = useStore();


    const [weather, setWeather] = useState(null);

    const [data, setData] = useState();


    const [time, setTime] = useState("");

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
            setTime("Night");
        }
    }

    const abc = () => {



        let imageURl = "";
        let timestamp = null;

        let sunrise = null;
        let sunset = null;




        if (data) {

            let clouds = data.clouds.all;
            let temp = data.main.temp;
            let weatherType = data.weather[0].main.toLowerCase();
            let windspeed = data.wind.speed;




            timestamp = data.timezone;
            sunrise = data.sys.sunrise;
            sunset = data.sys.sunset;

            FindDayorNight(sunrise, sunset, timestamp);


            if (time === "Day") {

                if (weatherType === "haze") {
                    imageURl = "/assets/day_haze.png";
                }

                else if (weatherType === "rain" || weatherType === "drizzle") {
                    if (temp > 25) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--heavy-rainy-weather-raining-and-climate-pack-nature-icons-6666091.png?f=webp";
                    }
                    else if (temp > 15) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-thunder-heavy-thunderstorm-weather-and-climate-pack-nature-icons-6666108.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-thunder-heavy-thunderstorm-weather-and-climate-pack-nature-icons-6666108.png?f=webp";
                    }
                }

                else if (weatherType === "snow") {
                    imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/snowy-weather-forecast-3d-icon-download-in-png-blend-fbx-gltf-file-formats--winter-snowflakes-cold-snowfall-icy-pack-nature-icons-8460076.png?f=webp";
                }

                else if (clouds <= 10 && weatherType === "clear") {
                    if (temp > 30) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/scorching-sun-3d-icon-download-in-png-blend-fbx-gltf-file-formats--heat-intense-burn-sky-dry-pack-nature-icons-10661257.png?f=webp";
                    }
                    else if (temp > 20) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/sun-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sunlight-sunny-day-nature-weather-forecasts-pack-icons-6192241.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/sun-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sunlight-sunny-day-nature-weather-forecasts-pack-icons-6192241.png?f=webp";
                    }
                }

                else if (clouds <= 10 && weatherType === "smoke") {
                    imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/sunny-cloud-weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cold-day-decoration-beach-snow-report-pack-nature-icons-8139267.png?f=webp";
                }

                else if (clouds > 10 && data.clouds.all <= 40) {
                    if (temp > 30) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/partially-cloudy-day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-sun-weather-pack-nature-icons-6267507.png?f=webp";
                    }
                    else if (temp > 20) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/partially-cloudy-day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-sun-weather-pack-nature-icons-6267507.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/partially-cloudy-day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-sun-weather-pack-nature-icons-6267507.png?f=webp";
                    }
                }
                else if (clouds <= 70 && clouds > 40) {
                    if (winds < 5) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-forecast-nature-general-ui-pack-user-interface-icons-5376613.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cold-temperature-condition-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--heavy-rain-raining-cloudy-cloud-weather-and-pack-nature-illustrations-4450749.png?f=webp";
                    }
                }

                else if (clouds > 70 && clouds <= 90) {

                    if (weatherType === "rain" || weatherType === "drizzle") {
                        if (temp > 25) {
                            imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/rainfall-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rainy-weather-rainstorm-day-season-pack-nature-icons-9123645.png?f=webp";
                        }
                        else if (temp > 15) {
                            imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/rainfall-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rainy-weather-rainstorm-day-season-pack-nature-icons-9123645.png?f=webp";
                        }
                        else {
                            imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/windy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--drizzle-wind-rainy-cloud-weather-pack-nature-icons-6267496.png?f=webp";
                        }
                    }

                    else if (weatherType === "snow") {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/snowy-weather-forecast-3d-icon-download-in-png-blend-fbx-gltf-file-formats--winter-snowflakes-cold-snowfall-icy-pack-nature-icons-8460076.png?f=webp";
                    }

                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/clouds-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cloud-white-weather-pack-nature-illustrations-3803105.png?f=webp";
                    }


                }

                else if (clouds > 90) {
                    if (windspeed > 10) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/windy-thunder-storm-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rain-cloudy-cloud-weather-pack-nature-icons-6267497.png?f=webp";
                    }
                    else if (windspeed > 5) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--nature-cloud-pack-icons-6328505.png?f=webp";
                    }
                }


                else {
                    imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/sun-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sunlight-sunny-day-nature-weather-forecasts-pack-icons-6192241.png?f=webp";
                }
            }

            else if (time === "Night" || time === "Evening") {

                if (weatherType == "haze") {
                    imageURl = "/assets/night_haze.png"
                }

                else if (weatherType === "rain" || weatherType === "drizzle") {
                    if (temp > 25) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--heavy-rainy-weather-raining-and-climate-pack-nature-icons-6666091.png?f=webp";
                    }
                    else if (temp > 15) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-thunder-heavy-thunderstorm-weather-and-climate-pack-nature-icons-6666108.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-thunder-heavy-thunderstorm-weather-and-climate-pack-nature-icons-6666108.png?f=webp";
                    }
                }

                else if (weatherType === "snow") {
                    imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/snowy-weather-forecast-3d-icon-download-in-png-blend-fbx-gltf-file-formats--winter-snowflakes-cold-snowfall-icy-pack-nature-icons-8460076.png?f=webp";
                }

                else if (clouds <= 10 && weatherType === "clear") {
                    if (temp > 30) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/clear-night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--half-moon-mode-weather-forecast-pack-nature-icons-9102488.png?f=webp";
                    }
                    else if (temp > 20) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/half-moon-3d-icon-download-in-png-blend-fbx-gltf-file-formats--night-weather-pack-nature-icons-5306217.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/clear-night-with-star-and-moon-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-pack-icons-8786769.png?f=webp";
                    }
                }

                else if (clouds <= 10 && weatherType === "smoke") {
                    imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/clear-night-with-star-and-moon-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-pack-icons-8786769.png?f=webp";
                }

                else if (clouds > 10 && data.clouds.all <= 40) {
                    if (temp > 30) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--moon-full-weather-forecast-pack-nature-icons-4995246.png?f=webp";
                    }
                    else if (temp > 20) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--moon-full-weather-forecast-pack-nature-icons-4995246.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--moon-full-weather-forecast-pack-nature-icons-4995246.png?f=webp";
                    }
                }
                else if (clouds <= 70 && clouds > 40) {
                    if (winds < 5) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-wind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--forecast-season-weather-pack-vol1-nature-icons-6777727.png?f=webp";
                    }
                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-wind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--air-weather-windy-cloud-pack-nature-icons-6431190.png?f=webp";
                    }
                }

                else if (clouds > 70 && clouds <= 90) {

                    if (weatherType === "rain" || weatherType === "drizzle") {
                        if (temp > 25) {
                            imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--heavy-rainy-weather-raining-and-climate-pack-nature-icons-6666091.png?f=webp";
                        }
                        else if (temp > 15) {
                            imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-thunder-heavy-thunderstorm-weather-and-climate-pack-nature-icons-6666108.png?f=webp";
                        }
                        else {
                            imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-thunder-heavy-thunderstorm-weather-and-climate-pack-nature-icons-6666108.png?f=webp";
                        }
                    }

                    else if (weatherType === "snow") {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/snowy-weather-forecast-3d-icon-download-in-png-blend-fbx-gltf-file-formats--winter-snowflakes-cold-snowfall-icy-pack-nature-icons-8460076.png?f=webp";
                    }

                    else {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/clouds-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cloud-white-weather-pack-nature-illustrations-3803105.png?f=webp";
                    }


                }

                else if (clouds > 90) {
                    if (windspeed > 10) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/windy-thunder-storm-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rain-cloudy-cloud-weather-pack-nature-icons-6267497.png?f=webp";
                    }
                    else if (windspeed > 5) {
                        imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/windy-cloud-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-wind-breeze-pack-sign-symbols-icons-10741943.png?f=webp";
                    }
                }


                else {
                    imageURl = "https://cdn3d.iconscout.com/3d/premium/thumb/sun-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sunlight-sunny-day-nature-weather-forecasts-pack-icons-6192241.png?f=webp";
                }
            }


        }


        setWeather(imageURl);

    };


    const FetchData = async () => {
        try {
            const res = await axios.get(`${url}?q=${city}&appid=${apiKey}&units=metric`);
            setData(res.data);
            
        }
        catch (err) {
            console.log(err);
        }
    };


   


    useEffect(() => {
        FetchData();
        
    }, [city]);


    useEffect(()=>{
        abc();
    });


   

    return (
        <>

            <div className="col-12 weatherDetailPage">
                <div className="row">

                    <LayoutHeader />

                    {
                        data &&
                        <div className="col-11 m-auto">
                            <div className="row">



                                <div className={time === "Day" ? "col-md-7 col-11 m-auto my-3 mb-5 py-5 weatherCard" : "col-md-7 col-11 m-auto my-3 mb-5 py-5 weatherCard bg-dark text-white"}>

                                    <div className="row">

                                        <div className="col-md-10 col-11 m-auto">
                                            <h3 className='text-center'>{time} - {city} Weather ({data.weather[0].main})</h3>
                                            <div className="col-md-5 col-7 m-auto pb-4">
                                                <img src={weather} alt="" className='d-block w-100' />
                                            </div>
                                        </div>


                                        <div className="col-11 m-auto py-2">

                                            <div className="row">


                                                {/* section 1 */}

                                                <div className="col-md-6 col-11 m-auto py-sm-2 section1">

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Temperature :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.main.temp} <sup>o</sup>C</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Feel Real Like :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.main.feels_like} <sup>o</sup>C</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Humidity :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.main.humidity} %</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Pressure :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.main.pressure} hPa</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Sea Level :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.main.sea_level} hPa</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Ground Level :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.main.grnd_level} hPa</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>




                                                {/* section 2 */}

                                                <div className="col-md-6 col-11 m-auto py-sm-2 section1">

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Cloud Coverage :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.clouds.all} %</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Description :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p style={{ textTransform: "capitalize" }}>{data.weather[0].description}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Wind Speed :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.wind.speed} m/s</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Wind Direction :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.wind.deg} <sup>o</sup></p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-md-6 col-7">
                                                                <p><b>Wind gust speed :</b></p>
                                                            </div>

                                                            <div className="col-md-6 col-5">
                                                                <p>{data.wind.gust} m/s</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>







                                            </div>

                                        </div>




                                    </div>
                                </div>


                            </div>
                        </div>
                    }



                </div>
            </div>

        </>
    )
}

export default WeatherDetail;