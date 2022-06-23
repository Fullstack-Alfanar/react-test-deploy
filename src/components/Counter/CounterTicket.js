// import React from "react";
import {useState} from "react"
function CounterTicket() {
    const [counter,setCounter] = useState(0);
    const [data,setData] = useState("");
    const printdata = ()=>{
        console.log(data);
    }
    return (
        <div>
            <div>
                <input type="text" name="" id="" onChange={(e)=>{setData(e.target.value)}} />
                <button onClick={printdata}>print</button>
            </div>

            <div>
                <button onClick={(e)=>{setCounter(counter-1);console.log(e);}}>-</button>
            </div>
            <div>
                <label>{counter}</label>
            </div>
            <div>
                <button onClick={()=>setCounter(counter+1)}>+</button>
            </div>
        </div>
    )
}
export default CounterTicket;