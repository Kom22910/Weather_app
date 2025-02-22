

import '../A-Globalstyle/WeatherPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import LayoutHeader from '../B-LayoutSection/LayoutHeader.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../a-UseContext/Store.jsx';


const WeatherDetail = () => {


    const nav = useNavigate();


    const { city, lat, long } = useParams();
    const [data, setData] = useState();

    console.log(city, lat, long);



    const Fetch = async () => {
        try {
            let res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
            setData(res.data.current);
        }
        catch (err) {
            console.log(err);
        }
    }




    useEffect(() => {
        Fetch();
    }, [city]);



    const [weather, setWeather] = useState(null);


    useEffect(() => {

        let imgUrl = "";

        if (data) {
            let weatherType = data.weather_code;

            if (data.is_day == 1) {

                if (weatherType === 0) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sun-summer-sunny-bright-hot-weather-pack-nature-icons-6138927.png?f=webp";
                }
                else if (weatherType >= 1 && weatherType <= 3) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/partially-cloudy-day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-sun-weather-pack-nature-icons-6267507.png?f=webp";
                }
                else if (weatherType === 45 || weatherType === 48) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/foggy-weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--fog-cloud-pack-icons-6328506.png?f=webp";
                }
                else if ([51, 53, 55].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-thunder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rainfall-weather-pack-sunrise-sunset-icons-8167889.png?f=webp";
                }
                else if ([61, 63, 65].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-storm-wet-seasonal-drizzle-autumn-pack-nature-icons-10331217.png?f=webp";
                }
                else if ([66, 67].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/freezing-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-icy-winter-snow-cold-pack-nature-icons-10912186.png?f=webp";
                }
                else if ([71, 73, 75].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/snow-fall-3d-icon-download-in-png-blend-fbx-gltf-file-formats--falling-heavy-snowfall-shower-weather-pack-nature-icons-5842430.png?f=webp";
                }
                else if (weatherType === 77) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/snow-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--snowy-heavy-light-fall-foggy-night-weather-pack-nature-illustrations-2754894.png?f=webp";
                }
                else if ([80, 81, 82].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/heavy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hardrain-rainy-weather-thunderstorm-environment-pack-nature-icons-8232268.png?f=webp";
                }
                else if ([85, 86].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/heavy-snow-3d-icon-download-in-png-blend-fbx-gltf-file-formats--freezing-rain-hail-weather-snowfall-scattered-blizzard-pack-icons-6328522.png?f=webp";
                }
                else if ([95, 96, 99].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/thunder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--thunderstorm-storm-weather-pack-nature-icons-6551907.png?f=webp";
                }
            }

            else if (data.is_day == 0) {
                if (weatherType === 0) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--moon-light-stars-half-weather-pack-nature-icons-5668682.png?f=webp";
                }
                else if (weatherType >= 1 && weatherType <= 3) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/night-cloudy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--day-cloud-sun-forecast-sunny-weather-pack-nature-icons-5306213.png?f=webp";
                }
            }
        }

        setWeather(imgUrl);

    }, [data])



    return (
        <>

            <div className="col-12 weatherDetailPage">
                <div className="row">

                    <LayoutHeader />



                    {
                        data &&
                        <div className="col-11 m-auto">
                            <div className="row">



                                <div className={data.is_day === 1 ? "col-md-7 col-11 m-auto my-3 mb-5 py-5 weatherCard" : "col-md-7 col-11 m-auto my-3 mb-5 py-5 weatherCard bg-dark text-white"}>

                                    <div className="row">

                                        <div className="col-md-10 col-11 m-auto">
                                            <h3 className='text-center'>{city} Weather </h3>
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
                                                                <p>{data.temperature_2m} <sup>o</sup>C</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Feel Real Like :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.apparent_temperature} <sup>o</sup>C</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Humidity :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.relative_humidity_2m} %</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <p><b>SeaLevel Pressure :</b></p>
                                                            </div>

                                                            <div className="col-5">
                                                                <p>{data.pressure_msl} hPa</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Surface Pressure :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.surface_pressure} hPa</p>
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
                                                                <p>{data.cloud_cover} %</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Wind Speed :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.wind_speed_10m} km/h</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Wind Direction :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.wind_direction_10m} <sup>o</sup></p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-md-6 col-7">
                                                                <p><b>Wind gust speed :</b></p>
                                                            </div>

                                                            <div className="col-md-6 col-5">
                                                                <p>{data.wind_gusts_10m} km/h</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Rain :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.rain} mm</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-md-10 col-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p><b>Snow :</b></p>
                                                            </div>

                                                            <div className="col-6">
                                                                <p>{data.snowfall} cm</p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>







                                            </div>

                                        </div>


                                            <div className="col-6 m-auto text-center mt-4">
                                                <button className='btn btn-success fw-bold mx-4' onClick={()=>nav(`/weather-app/forecast/${city}/${lat}/${long}`)}    >See Weather Forecast</button>
                                                <button className='btn btn-danger fw-bold' onClick={()=>nav(-1)}>Go back</button>
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