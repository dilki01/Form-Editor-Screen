import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './MainContent';
import './App.css';

const App = () => {
  const [content, setContent] = useState({
    welcome: {
      title: 'Welcome',
      description: 'This is the welcome content',
      image: null,
    },
    fields: [],
  });

  const [selectedField, setSelectedField] = useState('welcome');
  const [localField, setLocalField] = useState(null); // New state to track local field

  const handleContentChange = (fieldId, key, value) => {
    if (fieldId === 'welcome') {
      setContent((prevContent) => ({
        ...prevContent,
        welcome: { ...prevContent.welcome, [key]: value },
      }));
    } else {
      setContent((prevContent) => {
        const updatedFields = prevContent.fields.map((field) =>
          field.id === fieldId ? { ...field, [key]: value } : field
        );
        return { ...prevContent, fields: updatedFields };
      });
    }
  };

  const handleImageChange = (image) => {
    setContent((prevContent) => ({
      ...prevContent,
      welcome: { ...prevContent.welcome, image },
    }));
  };
  

  const addField = (newField) => {
    setContent((prevContent) => ({
      ...prevContent,
      fields: [...prevContent.fields, newField],
    }));
    setSelectedField(newField.id);
  };

  const handleFieldChange = (localFieldState) => {
    setLocalField(localFieldState); // Update the local field state
  };

  return (
    <div className="app-container">
      <Sidebar
        fields={content.fields}
        onFieldSelect={setSelectedField}
        onContentChange={handleContentChange}
        addField={addField}
        image={content.welcome.image} // Pass the image to WelcomeSidebar
        selectedField={selectedField}
        welcomeMessage={content.welcome.title}
        description={content.welcome.description}
        onImageChange={handleImageChange} // Pass image change handler
        onFieldChange={handleFieldChange} // Pass local field change handler
      />
      <MainContent
        field={
          selectedField === 'welcome'
            ? content.welcome
            : localField || content.fields.find((f) => f.id === selectedField)
        }
        onContentChange={handleContentChange}
        selectedField={selectedField}
      />
    </div>
  );
};

export default App;
