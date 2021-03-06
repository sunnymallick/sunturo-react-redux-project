import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginFormPage from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='loginButton' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginFormPage />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
