import React, { createContext, useState } from 'react';

export const SpaceContext = createContext();

export const Spacestate = ({ children }) => {
  const [selectedPlanet, setSelectedPlanet] = useState('');
  return (
    <SpaceContext.Provider value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </SpaceContext.Provider>
  );
};
export default Spacestate;
