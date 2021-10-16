import React from 'react';
import Preloader from "../components/Preloader/Preloader";
import Timer from "../components/Countdown/Timer";
  
//dirty fix
const camelCase = {
  fontSize: "5em"
}
const Home = () => {
  return (
    <div className="container">
          <h2   style = {camelCase} >
            CityHack22
          </h2>
          <Timer />
          {/* <Optin /> */}
          {/* <Preloader /> */}
          <h2> Coming Soon</h2>
        </div>
  );
};
  
export default Home;