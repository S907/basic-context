import React, { useState } from 'react';
import AppContext from './AppContext';

const GlobalState = ({ children }) => {
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState(0);

  // Define functions to update the state, if needed

  const contextValue = {
    state1,
    setState1,
    state2,
    setState2,
    // ... add more state and setters as needed
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
