import React from 'react'
import imgL from './images/lenovo.jpg'
import LenovoBuy from './LenovoBuy'
import {Routes, Route, useNavigate} from "react-router-dom"

export default function Lenovo() {

  const navigate = useNavigate();
  const navigateToLenovoBuy = () => {
    navigate('/LenovoBuy');
  };

  return (
      <>
        <div className="container">
            <img className="align-self-start mr-3" src={imgL} alt="mac"></img>
            <div className="media-body-2">
                <h1 className="mt-0">Lenovo Ideapad</h1>
                <p> 6-Core CPU<br></br>
                    8GB Unified Memory<br></br>
                    256GB SSD Storage¹
                </p>  
                <p><b>Price: Rs 60,000</b></p> 
                <button type="button" className="btn btn-primary" onClick={navigateToLenovoBuy}>Buy</button>
                  <Routes>                  
                  <Route path="/LenovoBuy" element={<LenovoBuy/>} />
                  </Routes>
            </div>
        </div>
      </>
    )
}
