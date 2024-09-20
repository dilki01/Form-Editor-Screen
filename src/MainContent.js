import React, { useState, useEffect } from 'react';
import './MainContent.css';

const MainContent = ({ field, onContentChange, selectedField }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Effect to reset email and messages when field or selectedField changes
  useEffect(() => {
    setEmail('');
    setErrorMessage('');
    setSuccessMessage('');
  }, [field, selectedField]); // Reset when field or selectedField changes

  // If no field is selected, don't render the content
  if (!field) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onContentChange(selectedField, name, value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      setSuccessMessage(''); // Clear the success message if there is an error

    } else {
      setErrorMessage(''); // Clear the error message if the email is valid
      setSuccessMessage('Correct email entered!');
      alert('Correct email entered!');
    }
  };

  return (
    <div className="main-content">
     <div className="content-container">
     <div>
      {/* title field */}
      <div className="form-group">
        <label>{selectedField === 'welcome' ? 'Welcome Title' : 'Field Title'}</label>
        <input
          type="text"
          id="title"
          name="title"
          value={field.title || ''}
          onChange={handleChange}
        />
      </div>

      {/* Description Field */}
      <div className="form-group">
        <label>{selectedField === 'welcome' ? 'Welcome Description' : 'Field Description'}</label>
        <textarea
          id="description"
          name="description"
          value={field.description || ''}
          onChange={handleChange}
        />
      </div>
      </div>

      {/* Image Display for Welcome Content */}
      {selectedField === 'welcome' && field.image && (
        <div className="form-group">
          <label>Uploaded Image:</label>
          <img src={field.image} alt="Uploaded" className="uploaded-image" />
        </div>
      )}
     </div> 

      {/* Email Input Field */}
      {selectedField !== 'welcome' && (
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Enter your email'
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <button className='submitbtn' onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MainContent;



// import React, { useState } from 'react';
// import './MainContent.css';

// const MainContent = ({ field, onContentChange, selectedField }) => {
//   const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   if (!field) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onContentChange(selectedField, name, value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = () => {
//     if (!validateEmail(email)) {
//       setErrorMessage('Please enter a valid email.');
//     } else {
//       setSuccessMessage('Correct email entered!');
//       setErrorMessage(''); // Clear error message if the email is valid
//       alert('Correct email entered!');
//     }
//   };

//   return (
//     <div className="main-content">
//       <div className="form-group">
//         <label>{selectedField === 'welcome' ? 'Welcome Title' : 'Field Title'}</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={field.title || ''}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Description Field */}
//       <div className="form-group">
//         <label>{selectedField === 'welcome' ? 'Welcome Description' : 'Field Description'}</label>
//         <textarea
//           id="description"
//           name="description"
//           value={field.description || ''}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Additional Input Field - only for dynamic fields */}
//       {/* {selectedField !== 'welcome' && (
//         <div className="form-group">
//           <label>Field Additional Info</label>
//           <input
//             type="text"
//             id="additionalInfo"
//             name="additionalInfo"
//             value={field.additionalInfo || ''}
//             onChange={handleChange}
//           />
//         </div>
//       )} */}
//             {/* Additional Input Field - only for dynamic fields */}
//       {/* {selectedField !== 'welcome' && (
//         <div className="form-group">
//           <label>Field Additional Info</label>
//           <input
//             type="text"
//             id="additionalInfo"
//             name="additionalInfo"
//             value={field.additionalInfo || ''}
//             onChange={handleChange}
//           />
//         </div>
//       )} */}

//       {/* Email Input Field */}
//       {selectedField !== 'welcome' && (
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//         {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//         <button onClick={handleSubmit}>Submit</button>

//       </div>
//       )}

//       {/* Submit Button */}

//     </div>
//   );
// };

// export default MainContent;

