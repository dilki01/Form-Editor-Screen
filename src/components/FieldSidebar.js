import React, { useState, useEffect } from 'react';
import './FieldSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Import close icon
import { faCog } from '@fortawesome/free-solid-svg-icons'; // Import settings icon

const FieldSidebar = ({ field, onClose, onContentChange }) => {
  const [localField, setLocalField] = useState({ title: '', description: '' });

  // Effect to set local state from the provided field
  useEffect(() => {
    if (field) {
      setLocalField({
        title: field.title || '',
        description: field.description || '',
      });
    }
  }, [field]);

  const handleSave = () => {
    // Save changes to the parent component when Save is clicked
    onClose(); // Close after saving
  };

  const handleDiscard = () => {
    // Close without saving; reset local state
    setLocalField({
      title: field.title || '',
      description: field.description || '',
    });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalField((prev) => ({ ...prev, [name]: value })); // Update local state

    // Update the parent component in real-time
    onContentChange(field.id, name, value);
  };

  if (!field) return null; // Return null if field is not provided

  return (
    <div className="field-sidebar">
      <h2 className='settings'>
      <FontAwesomeIcon icon={faCog} className="settings-icon" /> {/* Settings icon */}
      Settings</h2>
      <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} /> {/* Close icon */}
      </button>
      {/* <h3>{field.name}</h3> */}
      <div className="form-group">
        <label>Field Title</label>
        <input
          type="text"
          name="title"
          value={localField.title}
          onChange={handleChange} // Update local state and trigger real-time update
        />
      </div>
      <div className="form-group">
        <label>Field Description</label>
        <textarea
          name="description"
          value={localField.description}
          onChange={handleChange} // Update local state and trigger real-time update
        />
      </div>
      <div className="button-group">
        <button className='save-btn' onClick={handleSave}>Save</button>
        <button className='discard-btn' onClick={handleDiscard}>Discard</button>
      </div>
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  );
};

export default FieldSidebar;




// import React from 'react';
// import './FieldSidebar.css';

// const FieldSidebar = ({ field, onClose, onContentChange }) => {
//   if (!field) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onContentChange(field.id, name, value);
//   };

//   return (
//     <div className="field-sidebar">
//       <h2>Edit {field.name}</h2>
//       <div className="form-group">
//         <label>Field Title</label>
//         <input
//           type="text"
//           name="title"
//           value={field.title || ''}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label>Field Description</label>
//         <textarea
//           name="description"
//           value={field.description || ''}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default FieldSidebar;



