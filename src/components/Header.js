import React from 'react'
import { FaTemperatureHigh } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
      <h1 className="title">Temperature Converter<FaTemperatureHigh style={{ marginLeft: '20px'}}/></h1>
    </div>
  )
}

export default Header
