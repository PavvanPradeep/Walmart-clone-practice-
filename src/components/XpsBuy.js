import React from 'react'
import {useState} from 'react'
import imgX1 from './images/xps1000.jpg'

export default function XpsBuy() {
    const [count,setCount]=useState(0);
    var pricex=count*110000;
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const expected = `${current.getDate()+3}/${current.getMonth()+1}/${current.getFullYear()}`;
    const increment= ()=>{
        setCount(count+1)
    };   
     return (
      <>
      <div className="container">
            <img className="align-self-start mr-3" src={imgX1} alt="Xps"></img>
            <div className="media-body-2">
                <h1 className="mt-0">Dell XPS 13</h1>
                <p> 7-Core CPU<br></br>
                    8/16GB Unified Memory<br></br>
                    512GB SSD Storage¹
                </p>
                <p><b>Price: Rs 1,10,000</b></p>
                <h4>Quantity</h4>
                  <p>{count}</p>            
                <div className='Button1'>
                    <button type="submit" className="btn btn-primary" onClick={increment}>+</button>
                </div>
                <br></br>
                <h5>Price</h5><p>Rs{" "}{pricex.toLocaleString()}</p>
                <br></br>
                <h6>Expected Delivery</h6><p>{expected}</p> 
            </div>
        </div>
      </>
    )
  
}

