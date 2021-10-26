import { createContext, useContext, useState } from 'react';

import { node } from 'prop-types';

import sublinks from './data';

const AppContext = createContext();

const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const toggleSidebarOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const openSubmenu = (text, coordinates) => {
    setPage(sublinks.find((item) => item.page === text));
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
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
        page,
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
