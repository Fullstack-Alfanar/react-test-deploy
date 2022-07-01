
import { useState, useEffect } from "react"
import { axios } from 'axios'
import Table from "../Table/table";
function Crypto() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const CallData = async () => {
            await fetch('https://api2.binance.com/api/v3/ticker/24hr').then(res=>res.json()).then(crypto=>setData(...data,crypto)).catch(err=>console.log(err));
            await setLoad(true);
            await console.log(data);
        }
        CallData();
    },[])

    // const getdata = async () => {
    //     let api = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
    //     let json = await api.json();
    //     setData(json)// this is not working we will see now !!!
    //     setLoad(true);
    //     console.log(data);
    // }

    return (
        <div>
            {/* <input type="text" name="" id="" onChange={e => { setData(e.target.value) }} /> */}
            {/* <button onClick={getdata}>Call</button> */}
             {load ? 
             <Table Tabledata={data}/> 
             : "loading..."
             }
            
        </div>
    )
}


export default Crypto;