import { useState } from 'react';
import Home from './base/Home';
import Modal from './base/Modal';
import Sidebar from './base/Sidebar';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Home setOpenModal={setOpenModal} />
      <Modal open={openModal} setOpen={setOpenModal} />
      <Sidebar />
    </>
  );
}

export default App;
