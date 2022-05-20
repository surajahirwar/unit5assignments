import React from "react"
import "./Card.css"
export const Card = ({ data }) =>{
    console.log(data)
    return (
        <div>
            {data.map((e)=>{
                return (
                    <div className={e.heading=="Amazon" ? "yellow": "white"}>
                     <div className="main" >
                    <div className="left_div">
                    <p>{e.date}</p>
                    <button>Case Study</button>
                    <h1>{e.heading} Gift</h1>
                    <h1>{e.subheading}</h1>
                    <p>{e.devices} - Mobile</p>
                </div>
                <div className="right_div"> 
                <img src={e.logo} />
                <img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" />
    
                </div>
                </div>
                </div>)
       
             })}
        </div>
    )
}