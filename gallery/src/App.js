import Upload from './components/Upload';
import Images from './components/Images'
import React, {useState} from 'react'
function App() {


  const [uploads, setUploads] = useState([])

  const editUpload = (index, newUpload) => {
    setUploads((prevUploads) => prevUploads.map((upload,ind) => ind===index?newUpload:upload));
  }

  const deleteUpload = (index) => {
    setUploads((prevUploads) => prevUploads.filter((_, ind) => ind!==index));
  }

  

  return (
    <div className="App">
        <Upload setUploads = {setUploads}/>
        <Images uploads={uploads} deleteUpload = {deleteUpload} editUpload={editUpload}/>
    </div>
  );
}

export default App;
