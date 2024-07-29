import React, { useState } from 'react';

function Images({ uploads, deleteUpload, editUpload }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [newDescription, setNewDescription] = useState('');

  const deleteHandler = (index) => {
    deleteUpload(index);
  };

  const editHandler = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    setNewImage(uploads[index].image);
    setNewDescription(uploads[index].description);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
    }
  };

  const newSubmitHandler = () => {
    editUpload(editIndex, { image: newImage, description: newDescription });
    setIsEdit(false);
    setEditIndex(null);
    setNewImage(null);
    setNewDescription('');
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {uploads && uploads.map((upload, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', maxWidth: '100%' }}>
            <img src={upload.image} alt="Uploaded" style={{ maxWidth: '400px', height: '400px', borderRadius: '8px' }} />
            <p style={{ margin: '10px 0', fontSize: '16px' }}>{upload.description}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button
                type="button"
                onClick={() => deleteHandler(index)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => editHandler(index)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Edit
              </button>
            </div>
            {isEdit && editIndex === index && (
              <div style={{ marginTop: '15px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold' }}>Enter image:</label>
                  <input type="file" onChange={handleImageChange} style={{ display: 'block', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold' }}>Enter description:</label>
                  <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>
                <button
                  type="button"
                  onClick={newSubmitHandler}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
