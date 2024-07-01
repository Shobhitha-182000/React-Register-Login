import React from 'react'
import './Success.css'

const Success = () => {
  return (
    <div className="success-container">
    <div className="tick-mark">
    <span style={{ fontSize: '48px', color: '#28a745' }}>&#10004;</span>  
    </div>
    <h1>Thanks for Applying!</h1>
    <h1>Your application has been received.</h1>
</div>
  )
}

export default Success
