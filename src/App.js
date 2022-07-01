// components
// import Last from './components/Lastname/LastName';
// import First from './components/Firstname/Firstname';
// import FormApp from "./components/FormApp/FormApp";
// import CounterTicket from './components/Counter/CounterTicket';
// import Crypto from './components/Crypto/Crypto';

import Home from "./Pages/Home/Home";
import AppRoutery from "./components/Route/router";
import NavBar from "./components/NavBar/Navbar";
// Images
// import npm from "./assets/images/npm.png"

// Style
import './App.css';
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
// import { useEffect, useState } from 'react';


function App() {
  // const [justpic, setjustpic] = useState("");

  // useEffect(() => {
  //   let pic = async () => {
  //    let alis = await fetch("https://coffee.alexflipnote.dev/random.json");
  //    let json = await alis.json();

  //    console.log(json);
  //   }
  //   pic();
  //   console.log(justpic);
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>

            <NavBar />

        </div>
        {/* <Outlet /> */}
      </header>
    </div>
  );
}

export default App;
