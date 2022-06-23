
import {useState} from "react"
function Crypto()
{
    const [data,setData] = useState("");
    const [load, setLoad] = useState(false);
    // const fetchfunction = useEffect(()=>{

    // })
    const CallData= async ()=>{
        const dataCrypto = await fetch(data).then(res=>res.json()).then(perint=>{console.log(perint); setLoad(true);}).catch(err=>{console.log(err);setLoad(false);})
        
        // const json = await dataCrypto.json();
        console.log(dataCrypto);
    }
    return(
        <div>
            <input type="text" name="" id="" onChange={e=>{setData(e.target.value)}}/>
            <button onClick={CallData}>Call</button>
            <h1>{load? "data":"loading..."}</h1>
        </div>
    )
}


export default Crypto;