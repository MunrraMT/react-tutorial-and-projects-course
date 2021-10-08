import { node } from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggle = (state) => {
    state((prev) => !prev);
  };

  const toggleSidebarOpen = () => {
    toggle(setIsSidebarOpen);
  };

  const toggleSubmenuOpen = () => {
    toggle(setIsSubmenuOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebarOpen,
        isSubmenuOpen,
        toggleSubmenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: node.isRequired,
};

export { AppProvider, useGlobalContext };
