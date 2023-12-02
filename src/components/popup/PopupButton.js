import React, { useState } from 'react';

const PopupButton = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <button onClick={togglePopup}>Tampilkan Popup</button>

      {isPopupVisible && (
        <div className="popup">
          <p>Ini adalah pesan dalam popup!</p>
          <button onClick={togglePopup}>Tutup Popup</button>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
