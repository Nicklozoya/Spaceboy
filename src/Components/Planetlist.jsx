import React, { useContext } from 'react';
import Planetmodal from './Planetmodal';
import   { SpaceContext }  from './Spacestate';
import {Outlet, Link} from "react-router-dom";


const PlanetList = () => {
  const { setSelectedPlanet } = useContext(SpaceContext);
  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };
  return (
    <>
    <div className="Planet-list">
      <p onClick={() => handlePlanetClick('Mercury')}>Mercuy</p>
      <p onClick={() => handlePlanetClick('Venus')}>Venus</p>
      <p onClick={() => handlePlanetClick('Earth')}>Earth</p>
      <p onClick={() => handlePlanetClick('Mars')}>Mars</p>
      <p onClick={() => handlePlanetClick('Jupiter')}>Jupiter</p>
      <p onClick={() => handlePlanetClick('Saturn')}>Saturn</p>
      <p onClick={() => handlePlanetClick('Uranus')}>Uranus</p>
      <p onClick={() => handlePlanetClick('Neptune')}>Neptune</p>
    </div>
    {/* <Outlet /> */}
    </>
  );
};
export default PlanetList;












