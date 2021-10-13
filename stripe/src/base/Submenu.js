/* eslint-disable no-unused-vars */
import { useGlobalContext } from './Context';

const Submenu = () => {
  const { isSubmenuOpen, toggleSubmenuOpen } = useGlobalContext();

  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'}>
      submenu
    </aside>
  );
};

export default Submenu;
