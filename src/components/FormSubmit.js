import React from 'react'

function FormSubmit({handleTempTypeChange,handleFormSubmit, tempType}) {
  return (
    <form onSubmit={handleFormSubmit}>
        <input checked={tempType==='fahrenheit'} 
        onChange={handleTempTypeChange}
        type='radio'
        id="fahrenheit"
        name='degree'
        value='fahrenheit' />
        <label htmlFor='fahrenheit'>Fahrenheit</label>
        <br />
      <input
        onChange={handleTempTypeChange}
        type='radio'
        id='celsius'
        name='degree'
        value='celsius'
      />{' '}
      <label htmlFor='celsius'>Celsius</label>
      <br />
      <input id='submit' type='submit' value='Submit' />
    </form>
  )
}

export default FormSubmit