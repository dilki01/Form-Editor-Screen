import React from 'react';
import './FieldPopup.css';

const FieldPopup = ({ onClose, onFieldTypeSelect }) => {
  const fieldTypes = ['Email', 'Text', 'Phone Number']; // You can add more field types here

  return (
    <div className="field-popup">
      <div className="popup-content">
        <h3>Select Field Type</h3>
        <ul className="field-type-list">
          {fieldTypes.map((type) => (
            <li key={type} onClick={() => onFieldTypeSelect(type.toLowerCase())}>
              {type}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default FieldPopup;
