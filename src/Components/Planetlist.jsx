import React, { useContext } from 'react';
import Planetmodal from './Planetmodal';
import  Spacestate from './Spacestate';
const PlanetList = () => {
  const { setSelectedPlanet } = useContext(Spacestate);
  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };
  return (
    <div className="Planet-list">
      <p onClick={() => handlePlanetClick('Mercury')}>Mercury</p>
      <Planetmodal />
    </div>
  );
};
export default PlanetList;












