import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../A-Globalstyle/Forecast.css";
import LayoutHeader from "../B-LayoutSection/LayoutHeader";

const Forecast = () => {

    const { city, lat, long } = useParams();

    const [data, setData] = useState();


    const Fetch = async () => {
        try {
            let res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,apparent_temperature_max,wind_speed_10m_max`);
            setData(res.data.daily);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        Fetch();
    }, [city]);




    const days = (id) => {

        let imgUrl = "";

        let weatherType = id;


        if (weatherType === 0) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sun-summer-sunny-bright-hot-weather-pack-nature-icons-6138927.png?f=webp";
        }
        else if (weatherType >= 1 && weatherType <= 3) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/partially-cloudy-day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cloud-sun-weather-pack-nature-icons-6267507.png?f=webp";
        }
        else if (weatherType === 45 || weatherType === 48) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/foggy-weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--fog-cloud-pack-icons-6328506.png?f=webp";
        }
        else if ([51, 53, 55].includes(weatherType)) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-thunder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rainfall-weather-pack-sunrise-sunset-icons-8167889.png?f=webp";
        }
        else if ([61, 63, 65].includes(weatherType)) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-storm-wet-seasonal-drizzle-autumn-pack-nature-icons-10331217.png?f=webp";
        }
        else if ([66, 67].includes(weatherType)) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/freezing-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-icy-winter-snow-cold-pack-nature-icons-10912186.png?f=webp";
        }
        else if ([71, 73, 75].includes(weatherType)) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/snow-fall-3d-icon-download-in-png-blend-fbx-gltf-file-formats--falling-heavy-snowfall-shower-weather-pack-nature-icons-5842430.png?f=webp";
        }
        else if (weatherType === 77) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/snow-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--snowy-heavy-light-fall-foggy-night-weather-pack-nature-illustrations-2754894.png?f=webp";
        }
        else if ([80, 81, 82].includes(weatherType)) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/heavy-rain-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hardrain-rainy-weather-thunderstorm-environment-pack-nature-icons-8232268.png?f=webp";
        }
        else if ([85, 86].includes(weatherType)) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/heavy-snow-3d-icon-download-in-png-blend-fbx-gltf-file-formats--freezing-rain-hail-weather-snowfall-scattered-blizzard-pack-icons-6328522.png?f=webp";
        }
        else if ([95, 96, 99].includes(weatherType)) {
            return imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/thunder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--thunderstorm-storm-weather-pack-nature-icons-6551907.png?f=webp";
        }
    }


return (
    <>


        <div className="col-12 weatherForecastPage">

            <LayoutHeader />



            <div className="col-11 m-auto forcastContainer my-3">
                <div className="row">


                    {
                        data &&
                        data.weather_code.map((val, index) => {


                            return (

                                <div className="col-md-3 col-10 m-auto my-3" key={index}>
                                    <div className="col-12 forecastCard py-3">

                                        <div className="col-9 m-auto section1">
                                            <h4 className="text-center m-auto">{city} </h4>
                                            <span> {data.time[index]} </span>
                                        </div>


                                        <div className="col-11 m-auto my-3 section2">
                                            <div className="row">

                                                <div className="col-5 m-auto">
                                                    <img src={data && days(data.weather_code[index])} alt=" weather" className="d-block w-100" />
                                                </div>

                                                <div className="col-7 m-auto mt-4">
                                                    <div className="col-12 m-auto">

                                                        <div className="col-9 m-auto">
                                                            <div className="row">
                                                                <h3>{data.temperature_2m_max[index]} <sup>o</sup>C</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-9 m-auto">
                                                            <div className="row">
                                                                <p>Feel like : {data.apparent_temperature_max[index]} <sup>o</sup>C</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }



                </div>
            </div>






        </div>



    </>
)
}

export default Forecast;