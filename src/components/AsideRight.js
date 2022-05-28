import React,{useEffect, useState} from 'react';
import axios from 'axios';
import LocalTime from './LocalTimeFn';

function AsideRight() {
    const [currLocData, setCurrLocData]=useState({
        city:'',
        state:'',
        country:'',
    });

    const [currLocWeatherCond, setCurrLocWeatherCond] =useState({
        weather:[{id:'',description:''}],
        main: {temp:'',temp_min:'',temp_max:''}
    });

    const fetchData= async (city) => {
        const currWeatherApi=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`;
        const res=await axios.get(currWeatherApi)
        setCurrLocWeatherCond({
            weather:res.data.weather, main:res.data.main
        })
    }
    useEffect(() => {
        const currLocationAPI =
          'https://extreme-ip-lookup.com/json/?key=f7Zqeoj2J8Z7gO4DtcYg';
    
        axios.get(currLocationAPI).then((res) => {
          fetchData(res.data.city);
          setCurrLocData({
            city: res.data.city,
            state: res.data.region,
            country: res.data.countryCode,
          });
        });
      }, []);
    
      const convertKtoF = (temp) => {
        return Math.floor(((temp - 273.15) * 9) / 5 + 32);
      };
    
      const minMaxTemp = (min, max) => {
        return (
          <h6>
            <span>Low: {convertKtoF(min)}&deg;</span>
            {' - '}
            <span>High: {convertKtoF(max)}&deg;</span>
          </h6>
        );
      };
    
      const { city, state, country } = currLocData;
      const { temp_min, temp_max, temp } = currLocWeatherCond.main;
      const { description, id } = currLocWeatherCond.weather[0];
      const customCl = `wi wi-owm-${id} display-1`;
      return (
        <aside id='right-side'>
          <h3 className='aside-h3'>Local Weather</h3>
          <div className='current-location'>
            <span>{city}</span>
            <br />
            <span>{state}</span>
            {', '}
            <span>{country}</span>
            <i className={customCl}></i>
            <h1>{convertKtoF(temp)}&deg;</h1>
            {minMaxTemp(temp_min, temp_max)}
            <h4>{description}</h4>
          </div>
          <LocalTime />
  </aside>
      )
}

export default AsideRight