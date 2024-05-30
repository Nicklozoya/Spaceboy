import React, { createContext, useState } from 'react';
const SpaceContext = createContext();
export const Spacestate = ({ children }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  return (
    <SpaceContext.Provider value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </SpaceContext.Provider>
  );
};
export default Spacestate;
