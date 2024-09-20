import React from 'react';
import './FieldPopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTextHeight, faPhone , faTimes } from '@fortawesome/free-solid-svg-icons';

const FieldPopup = ({ onClose, onFieldTypeSelect }) => {
  const fieldTypes = [
    { type: 'Email', icon: faEnvelope },
    // { type: 'Text', icon: faTextHeight },
    { type: 'Phone Number', icon: faPhone }
  ];

  return (
    <div className="field-popup">
      <div className="popup-content">
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3>Select Field Type</h3>
        <ul className="field-type-list">
          {fieldTypes.map(({ type, icon }) => (
            <li key={type} onClick={() => onFieldTypeSelect(type.toLowerCase())}>
              <FontAwesomeIcon icon={icon} style={{ marginRight: '8px' }} />
              {type}
            </li>
          ))}
        </ul>
        {/* <button onClick={onClose}>Cancel</button> */}
      </div>
    </div>
  );
};

export default FieldPopup;
