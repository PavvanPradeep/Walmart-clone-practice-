import React from 'react'
import imgX from './images/xps13.jpg'
import XpsBuy from './XpsBuy'
import {Routes, Route, useNavigate} from "react-router-dom"

export default function Xps() {

  const navigate = useNavigate();
  const navigateToXpsBuy = () => {
    navigate('/XpsBuy');
  };

  return (
      <>
        <div className="container">
            <img className="align-self-start mr-3" src={imgX} alt="xps"></img>
            <div className="media-body-2">
            <h1 className="mt-0">Dell XPS 13</h1>
                <p> 7-Core CPU<br></br>
                    8/16GB Unified Memory<br></br>
                    512GB SSD Storage¹
                </p>
                <p><b>Price: Rs 1,10,000</b></p>
                <button type="button" className="btn btn-primary" onClick={navigateToXpsBuy}>Buy</button>
                  <Routes>                  
                  <Route path="/XpsBuy" element={<XpsBuy/>} />
                  </Routes>
            </div>
        </div>
      </>
    )
}
