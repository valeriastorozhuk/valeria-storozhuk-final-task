import React from 'react'
import bear from "../Pictures/bear-gray-girl.png"

const FormSuccess = () => {
  return (
    <div className="box">
        <h1 className="thankyou text-center">Thank you! <br/><br/>I have received your request!</h1>
        <div><img src={bear} style={{height:500}}/></div>
    </div>
  )
}

export default FormSuccess