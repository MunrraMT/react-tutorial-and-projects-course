import { createContext, useState } from 'react';

import { node } from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggle = (func) => {
    func((prev) => !prev);
  };

  const toggleOpenModal = () => {
    toggle(setIsOpenModal);
  };

  const toggleOpenSideBar = () => {
    toggle(setIsOpenSideBar);
  };

  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        toggleOpenModal,
        isOpenSideBar,
        toggleOpenSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: node.isRequired,
};

export { AppContext, AppProvider };
