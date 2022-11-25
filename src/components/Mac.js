import React from 'react'
import imgM from './images/mac.jpg'
import MacBuy from './MacBuy'
import {Routes, Route, useNavigate} from "react-router-dom"


export default function Mac() {

  const navigate = useNavigate();
  const navigateToMacBuy = () => {
    navigate('/MacBuy');
  };

  return (
      <>
        <div className="container">
            <img className="align-self-start mr-3" src={imgM} alt="mac"></img>
            <div className="media-body-2">
            <h1 className="mt-0">Macbook Air M1</h1>
                <p> 8-Core CPU<br></br>
                    8GB Unified Memory<br></br>
                    256GB SSD Storage¹
                </p>
                <p><b>Price: Rs 90,000</b></p>
                <button type="button" className="btn btn-primary" onClick={navigateToMacBuy}>Buy</button>
                  <Routes>                  
                  <Route path="/MacBuy" element={<MacBuy/>} />
                  </Routes>
            </div>
        </div>
      </>
    )
}
