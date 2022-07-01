import { useEffect, useState } from "react";
import CardContent from '@mui/material/CardContent';

function Table(data) {
    const [search, setSearch] = useState("");
    const [newData, setNewData] = useState([])

    useEffect(() => {
        const checksearch=()=>
        {
            if(search!="")
            {
                setNewData(data.Tabledata.filter(obj=>obj.symbol.includes(search)))
            }
            else{
                setNewData(data.Tabledata)
            }
        }
        checksearch();
    }, [search])


    return (
        <div>
            <CardContent>heeey</CardContent>
            <div>
                <label>search for Crypto</label> <input type="text" onChange={(e) =>{ setSearch(e.target.value.toLocaleUpperCase())}} />
                {/* {console.log(search)} */}
            </div>
            <table className="alert alert-primary">
                <thead >
                    <tr>
                        <td><label>symbol</label></td>
                        <td><label>lastPrice</label></td>
                        <td><label>highPrice</label></td>
                        <td><label>lowPrice</label></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        newData.map(e=>{
                            return(
                                <tr key={e.symbol}>
                                    <td>{e.symbol}</td>
                                    <td>{e.lastPrice}</td>
                                    <td>{e.highPrice}</td>
                                    <td>{e.lowPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table