import React, { useState } from 'react';
import Navebar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Fotter from '../components/Footer/Footer'

const Homepage = () => {
    const [popup, setPopup]=useState(false)
  return (
    <>
          {/* <div  className="fixed w-[100%] h-[100%] bg-[red] z-99999999999999999999999999999999999  " ></div> */}

      <Navebar popup={popup} setPopup={setPopup} />
      <Hero popup={popup} setPopup={setPopup}/>
      <Fotter/>
    </>
  );
}

export default Homepage;
