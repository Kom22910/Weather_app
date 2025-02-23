import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LayoutHeader from "../B-LayoutSection/LayoutHeader.jsx";
import LoadingPage from "./LoadingPage.jsx";
import {useStore} from "../a-UseContext/Store.jsx";


const WeatherCard = () => {
    const nav = useNavigate();

    const [data, setData] = useState({});
    const { city } = useParams();

    const [latitude , setLatitude] = useState({
        lat : null,
        long : null
    })

    const {url} = useStore();


    



    const [loading , setLoading] = useState(false);

    




    const FetchData = async () => {
        try {

            setLoading(true);
            let res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
            const { latitude, longitude, timezone } = res.data.results[0];

            setLatitude({
                lat : latitude,
                long : longitude
            })

            let res1 = await axios.get(`${url}latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,rain,snowfall,weather_code,cloud_cover,apparent_temperature&timezone=${timezone}`);
            setData(res1.data.current);
        }
        catch (err) {
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }


    useEffect(() => {
        FetchData();
    }, [city])


    const [weather, setWeather] = useState(null);


    useEffect(() => {

        let imgUrl = "";

        if (data) {
            let weatherType = data.weather_code;

            if (data.is_day == 1) {

                if (weatherType === 0) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/day-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sun-summer-sunny-bright-hot-weather-pack-nature-icons-6138927.png?f=webp";
                }
                else if (weatherType >=1 && weatherType <=3) {
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
                else if ([71, 73 , 75].includes(weatherType)) {
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
                else if ([95, 96 , 99].includes(weatherType)) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/thunder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--thunderstorm-storm-weather-pack-nature-icons-6551907.png?f=webp";
                }
            }

            else if (data.is_day == 0){
                if (weatherType === 0) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/night-3d-icon-download-in-png-blend-fbx-gltf-file-formats--moon-light-stars-half-weather-pack-nature-icons-5668682.png?f=webp";
                }
                else if (weatherType >=1 && weatherType <=3) {
                    imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/night-cloudy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--day-cloud-sun-forecast-sunny-weather-pack-nature-icons-5306213.png?f=webp";
                }
            }
        }

        setWeather(imgUrl);

    }, [data])


    return (

        <>

            <div className="col-12 layoutBodyWeatherCardSection">
                <LayoutHeader/>

                {
                data &&
                <div className="col-sm-7 col-12 m-auto outputSection my-4">
                    <div className="row">

                        <div className={data.is_day === 1 ? "col-md-8 col-10 m-auto py-4 px-3 cardContainer text-black" : "col-md-8 col-10 m-auto py-4 px-3 cardContainer bg-dark text-white" }>

                            <div className="col-12 cardSection1">

                                <div className="col-11 m-auto">

                                    <div className="row">

                                        <div className="col-md-8 col-7 m-auto">
                                            <h4 className='m-auto'>Current Weather</h4>
                                        </div>

                                        <div className="col-4 m-auto">
                                            <p className='m-auto text-end'>{new Date().toLocaleTimeString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <h3 className='text-center' style={{textTransform : "capitalize"}}>{city}</h3>

                            <div className="col-12 cardSection2">

                                <div className="col-md-8 col-10 m-auto">
                                    <div className="row">

                                        <div className="col-md-7 col-10 m-auto">
                                            <img src={weather} alt="weather" className='d-block w-100' />
                                        </div>


                                        <div className="col-md-5 col-12 m-auto">
                                            <p className='fw-bold p1'>{data.temperature_2m}<sup><span>o</span></sup> C</p>
                                            <p className='p2'>Feel like: {data.apparent_temperature} <sup>o</sup></p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="col-12 cardSection3 text-center my-3">
                                <button className='btn btn-success mx-4' onClick={() => nav(`/weather-app/detail/${city}/${latitude.lat}/${latitude.long}`)}>See More Details</button>
                                <button className='btn btn-danger' onClick={() => nav(-1)}>Go back</button>
                            </div>




                        </div>

                    </div>
                </div>
            }

            </div>




            <LoadingPage  loading={loading}  />



        </>
    )
}

export default WeatherCard