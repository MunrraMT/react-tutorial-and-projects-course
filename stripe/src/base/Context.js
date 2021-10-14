import { node } from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const [location, setLocation] = useState({});

  const toggleSidebarOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
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
