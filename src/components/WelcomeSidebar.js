import React, { useState } from 'react';
import './WelcomeSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Import close icon
import { faCog } from '@fortawesome/free-solid-svg-icons'; // Import settings icon

const WelcomeSidebar = ({ title, description, onClose, onTitleChange, onDescriptionChange, onImageChange }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    onImageChange(null);
  };

  const handleSave = () => {
    // Call onTitleChange and onDescriptionChange to save changes
    onClose(); // Close sidebar after saving
  };

  const handleDiscard = () => {
    onClose(); // Simply close without saving
  };

  return (
    <div className="welcome-sidebar">
      <h2 className='settings'>
      <FontAwesomeIcon icon={faCog} className="settings-icon" /> {/* Settings icon */}

        Edit Welcome Content</h2>
      <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} /> {/* Close icon */}
      </button>
      <div className="form-group">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => onTitleChange(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => onDescriptionChange(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <div>
            <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
            <button onClick={handleRemoveImage}>Remove Image</button>
          </div>
        )}
      </div>
      <div className="button-group">
        <button className='savebtn' onClick={handleSave}>Save</button>
        <button className="discardbtn" onClick={handleDiscard}>Discard</button>
      </div>
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  );
};

export default WelcomeSidebar;


// import React, { useState } from 'react';
// import './WelcomeSidebar.css';

// const WelcomeSidebar = ({ title, description, onClose, onTitleChange, onDescriptionChange, onImageChange }) => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         onImageChange(reader.result); // Call the function to update the main content
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImage(null);
//     onImageChange(null); // Remove image from main content
//   };

//   return (
//     <div className="welcome-sidebar">
//       <h2>Edit Welcome Content</h2>
//       <div className="form-group">
//         <label>Title</label>
//         <input type="text" value={title} onChange={(e) => onTitleChange(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Description</label>
//         <textarea value={description} onChange={(e) => onDescriptionChange(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Upload Image</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} />
//         {image && (
//           <div>
//             <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
//             <button onClick={handleRemoveImage}>Remove Image</button>
//           </div>
//         )}
//       </div>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default WelcomeSidebar;
