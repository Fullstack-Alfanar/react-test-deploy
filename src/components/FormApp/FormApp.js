import { useState } from "react"
import PrintConsole from "../PrintConsole/PrintConsole"

function FormApp() {
const [name,setName] = useState("");
const [lname,setLname] = useState(6);
const [email,setEmail] = useState("");

    return(
        <div>
            <label>name</label>
            <input type="text" id="fname" onChange={(eve)=>setName(eve.target.value)}/>
            <label>last name</label>
            <input type="text" id="lname" onChange={e=>setLname(e.target.value)}/>
            <label>email</label>
            <input type="text" id="email" onChange={e=>setEmail(e.target.value)}/>
            <input type="button" value="send"/>
            <PrintConsole fname={name} lastname={lname} email={email}/>
        </div>
    )
}

export default FormApp