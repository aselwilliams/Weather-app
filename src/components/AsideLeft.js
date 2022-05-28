import axios from 'axios';
import {useState} from 'react';
import FormSubmit from './FormSubmit';
import ResultSection from './ResultSection';

import React from 'react'

function AsideLeft() {
    const [searchVal, setSearchVal]= useState('');
    const [tempType, setTempType]=useState('fahrenheit');
    const [showResult,setShowResult]=useState(false);
    const [weatherData, setWeatherData]=useState({
       weather:[{id:'',description:''}],
       main: {temp:'',temp_min:'',temp_max:''},
       name:'',
       sys: {country: ''},
    })

    const handleSearch=(e)=>{
        setSearchVal(e.target.value);
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(searchVal !== ''){
            const weatherAPI=`http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`;

            axios.get(weatherAPI).then((res)=>{setShowResult(true);
            setWeatherData({weather:res.data.weather,
                main:res.data.main,
                name:res.data.name,
                sys:res.data.sys,
            })})
            .catch((err)=>console.log(err))
        }
    }

    const handleTempTypeChange=(e)=>{
        setTempType(e.target.value);
    };

  return (
 <aside id='left-side'>
     <h3 className='aside-h3'>City Name</h3>
     <input onChange={handleSearch} id='search' type='text' placeholder='Enter city...' />
     <FormSubmit handleFormSubmit={handleFormSubmit} handleTempTypeChange={handleTempTypeChange} tempType={tempType} />
     {showResult && (<ResultSection weatherData={weatherData} tempType={tempType} />)}
 </aside>
  )
}

export default AsideLeft