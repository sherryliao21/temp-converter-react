import React from 'react'
import { useState } from 'react'


const Form = ({ onConvert }) => {
  const [degree, setDegree] = useState('')
  const [type, setType] = useState('')

  const onSubmit = (event) => {
    // prevent actually submitting to a page
    event.preventDefault()
    // form validation
    if (!degree) {
      alert('Please enter degrees!')
      return
    }
    if (typeof degree === 'number') {
      alert('Please input numbers!')
      return
    }
    if (!type || type === 'default') {
      alert('Please select one temperature type!')
      return
    }

    onConvert({ degree, type })

    setDegree('')
    setType('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <div className="form-control">
        <label htmlFor="degrees">Degrees</label>
        <input type="number" id="degrees" name="degrees" value={degree} onChange={(e) => setDegree(e.target.value)} className="form" required/>
      </div>
      <div className="form-control">
        <label htmlFor="type">Type</label>
        <select name="type" id="type" className="form-select" value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="default" name="type">Select One</option>
          <option value="Fahrenheit" name="type">Fahrenheit</option>
          <option value="Celsius" name="type">Celsius</option>
        </select>
      </div>
      <input type="submit" className='btn' value="Convert"/>
    </form>
  )
}

export default Form
