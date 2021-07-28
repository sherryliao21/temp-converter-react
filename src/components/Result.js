import React from 'react'

const Result = ({ result }) => {
  return (
    <div className="form-control result">
      <label htmlFor="result">Result</label>
      <input type="text" className="form-result" value={ result } disabled/>
    </div>
  )
}

export default Result
