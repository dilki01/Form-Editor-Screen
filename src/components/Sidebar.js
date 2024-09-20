import React, { useState } from 'react';
import './Sidebar.css';
import FieldPopup from './FieldPopup';
import FieldSidebar from './FieldSidebar';
import WelcomeSidebar from './WelcomeSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl, faCube } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({
  fields,
  onFieldSelect,
  addField,
  onContentChange,
  welcomeMessage,
  description,
  onImageChange,
  onFieldChange,
}) => {
  const [showWelcomeSidebar, setShowWelcomeSidebar] = useState(false);
  const [showFieldSidebar, setShowFieldSidebar] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFieldClick = (field) => {
    if (field.type === 'welcome') {
      setShowWelcomeSidebar(true);
    } else {
      setShowFieldSidebar(field.id);
    }
    onFieldSelect(field.id);
  };

  const addNewField = (type) => {
    const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

    const newField = {
      id: `field-${fields.length + 1}`,
      name: `${formattedType} Field`,  // Default name
      type,
      title: '', // Title starts as empty
      description: '',
      additionalInfo: '',
    };
    addField(newField);
    setShowFieldSidebar(newField.id);
    setIsPopupOpen(false);
  };

  const closeFieldSidebar = () => {
    setShowFieldSidebar(null);
    onFieldSelect('welcome');
  };

  const getDisplayName = (field) => {
    // If the title is not empty, show it; otherwise, show the default name
    return field.title ? field.title : field.name;
  };

  return (
  
    <div className="sidebar open">
      <p className='dashboard'>
      <FontAwesomeIcon icon={faCube} className="cube-icon" /> {/* Cube icon */}
      Dashboard</p>
      <ul className="sidebar-items">
        {/* <svg xmlns="http://www.w3.org/200/svg" viewBox='0 0 16 16' fill='currentColor' aria-hidden="true" data-slot="icon" class="stepsIcon"></svg> */}
        <h4 className='steps'>
        <FontAwesomeIcon icon={faListOl} className="steps-icon" /> {/* Steps icon */}
        Steps</h4>
        <p className='steps2'>The steps users will take to complete the form</p>
        <li onClick={() => handleFieldClick({ id: 'welcome', type: 'welcome' })}>
          Welcome
        </li>
        {fields.map((field) => (
          <li key={field.id} onClick={() => handleFieldClick(field)}>
            {getDisplayName(field)} {/* Display the title or fallback to default name */}
          </li>
        ))}
      </ul>
      <button className="add-field-btn" onClick={() => setIsPopupOpen(true)}>
        +  Add Field
      </button>

      {/* Welcome sidebar */}
      {showWelcomeSidebar && (
        <div className="sidebar-overlay">
          <WelcomeSidebar
            title={welcomeMessage}
            description={description}
            onClose={() => setShowWelcomeSidebar(false)}
            onTitleChange={(newTitle) =>
              onContentChange('welcome', 'title', newTitle)
            }
            onDescriptionChange={(newDescription) =>
              onContentChange('welcome', 'description', newDescription)
            }
            onImageChange={onImageChange}
          />
        </div>
      )}

      {/* Dynamic field sidebar */}
      {showFieldSidebar && (
        <div className="sidebar-overlay">
          <FieldSidebar
            field={fields.find((f) => f.id === showFieldSidebar)}
            onClose={closeFieldSidebar}
            onContentChange={onContentChange}
            onFieldChange={onFieldChange} // Pass the local field state
          />
        </div>
      )}

      {/* Popup for selecting a field type */}
      {isPopupOpen && (
        <FieldPopup
          onClose={() => setIsPopupOpen(false)}
          onFieldTypeSelect={addNewField}
        />
      )}
    </div>
  );
};

export default Sidebar;





// import React, { useState } from 'react';
// import './Sidebar.css';
// import FieldPopup from './FieldPopup';
// import FieldSidebar from './FieldSidebar';
// import WelcomeSidebar from './WelcomeSidebar';

// const Sidebar = ({
//   fields,
//   onFieldSelect,
//   addField,
//   onContentChange,
//   welcomeMessage,
//   description,
//   onImageChange, // Add this line

// }) => {
//   const [showWelcomeSidebar, setShowWelcomeSidebar] = useState(false);
//   const [showFieldSidebar, setShowFieldSidebar] = useState(null); // ID of field to open in sidebar
//   const [isPopupOpen, setIsPopupOpen] = useState(false);


  
//   const handleFieldClick = (field) => {
//     if (field.type === 'welcome') {
//       setShowWelcomeSidebar(true);
//     } else {
//       setShowFieldSidebar(field.id); // Open the specific field sidebar
//     }
//     onFieldSelect(field.id); // Ensure the right content displays the selected field
//   };

//   const addNewField = (type) => {
//     const newField = { 
//       id: `field-${fields.length + 1}`, 
//       name: `Field ${fields.length + 1}`, 
//       type,
//       title: '',
//       description: '',
//       additionalInfo: '',
//      };
//     addField(newField);
//     setShowFieldSidebar(newField.id); // Open the sidebar for the newly added field

//     setIsPopupOpen(false);
//   };

//   const closeFieldSidebar = () => {
//     setShowFieldSidebar(null);
//     onFieldSelect('welcome'); // Reset to the welcome content when sidebar is closed
//   };

//   return (
//     <div className="sidebar open">
//       <ul className="sidebar-items">
//         <li onClick={() => handleFieldClick({ id: 'welcome', type: 'welcome' })}>
//           Welcome
//         </li>
//         {fields.map((field) => (
//           <li key={field.id} onClick={() => handleFieldClick(field)}>
//             {field.name}
//           </li>
//         ))}
//       </ul>
//       <button className="add-field-btn" onClick={() => setIsPopupOpen(true)}>
//         Add Field
//       </button>

//       {/* Welcome sidebar */}
//       {showWelcomeSidebar && (
//         <div className="sidebar-overlay">
//           <WelcomeSidebar
//             title={welcomeMessage}
//             description={description}
//             onClose={() => setShowWelcomeSidebar(false)}
//             onTitleChange={(newTitle) => onContentChange('welcome', 'title', newTitle)}
//             onDescriptionChange={(newDescription) => onContentChange('welcome', 'description', newDescription)}
//             onImageChange={onImageChange} // Pass the image change handler

//           />
//         </div>
//       )}

//       {/* Dynamic field sidebar */}
//       {showFieldSidebar && (
//         <div className="sidebar-overlay">
//           <FieldSidebar
//             field={fields.find((f) => f.id === showFieldSidebar)}
//             onClose={closeFieldSidebar}
//             onContentChange={onContentChange}
//           />
//         </div>
//       )}

//       {/* Popup for selecting a field type */}
//       {isPopupOpen && (
//         <FieldPopup
//           onClose={() => setIsPopupOpen(false)}
//           onFieldTypeSelect={addNewField}
//         />
//       )}
//     </div>
//   );
// };

// export default Sidebar;
