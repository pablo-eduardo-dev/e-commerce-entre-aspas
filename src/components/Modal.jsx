import React from "react";

const Modal = ({ modal }) => {
  if (modal)
    return (
      <div>
        <p style={{textAlign: 'center', backgroundColor: 'white', maxWidth: '120px', width: '100%', margin: '0px auto 10px auto', color: 'black', padding: '10px 0'}}>Callback</p>
      </div>
    );
  else return
};

export default Modal;
