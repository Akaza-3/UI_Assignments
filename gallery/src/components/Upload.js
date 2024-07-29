import React, { useState } from 'react';

function Upload({ setUploads }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("in submitHandler");
    setUploads((previousUploads) => [...previousUploads, { image, description }]);
    setImage(null);
    setDescription('');
  };

  return (
    <div style={{
      maxWidth: '600px',
      marginTop: '20px',
      marginLeft: '20px',
      padding: '30px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Upload Image</h2>
      <form onSubmit={submitHandler}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="image" style={{fontWeight: 'bold', marginBottom: '5px' }}>Enter image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Enter description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontSize: '16px',
            marginTop: '10px',
            cursor: 'pointer'
          }}
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
