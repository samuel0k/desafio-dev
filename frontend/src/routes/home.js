import React, {
  useState,
  useEffect
} from "react";
import { Link } from 'react-router-dom';

import api from '../services/api'
import turnToJson from "../utils/fileReader";
import "./css/index.css"


export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
	const [isSelected, setIsSelected] = useState(false);
	const [isSubmited, setIsSubmited] = useState(false);
  const [jsonData, setJsonData] = useState([])

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);

    console.log(isSelected)
	};

  useEffect(() => {
    
    if(isSelected){
      var splitedName = selectedFile.name.split('.')
      var splitedNameLen = splitedName.length
      if(splitedName[splitedNameLen -1] === 'txt'){
        var reader = new FileReader();
        reader.readAsText(selectedFile, "UTF-8");
        reader.onload = (evt) => {
          var jsonDataResp = turnToJson(evt.target.result)
          setJsonData(jsonDataResp)
        }
      } else{
        alert("Just text(.txt) files please!")
        setSelectedFile(null)
        setIsSelected(false)
      }
        
    }
    
  }, [selectedFile])


	const handleSubmit = () => {
    setIsSubmited(true)

	};

  const submitJson = () => {
    api.post('/upload', jsonData).then((resp) => {
      console.log(resp)
    }).catch((err) => {
      console.log(err)
    })
  }

	return(
   <div>
      <header>
        <div id="logo">
          <div>
            <h1>CNAB</h1>
            <h2>files</h2>
          </div>
        </div>
        <ul id="route-btns">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        </ul>
      </header>
    

    {!isSubmited? (
      <div id="content">
        {isSelected ? (
          <></>
        ) : (
            <h1>Select a CNAB file please!</h1>
        )}

        <div>
          <label htmlFor="file">Select file</label>
          <input type="file" id="file" name="file" onChange={changeHandler} />

        </div>
        

        {isSelected ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <></>
        )}
        <div id="senddiv">
          {isSelected ? (
            <button  onClick={handleSubmit}>Load data</button>
          ) : (
            <button style={{opacity: 0.5, cursor: 'default'}} onClick={handleSubmit}>Load data</button>
          )}
        </div>
      </div>
    ) : (
      <div id="linesdiv">

        <h2>Preview</h2>
        
        

        <table id="customers">
          
          <tr>
            <th>Kind</th>
            <th>Data</th>
            <th>Value</th>
            <th>CPF</th>
            <th>Card</th>
            <th>Time</th>
            <th>Owner</th>
            <th>Store</th>
          </tr>
          {
            jsonData.map((value, key) => {
              return (
                <tr>
                  <td>{value.kind}</td>
                  <td>{value.data}</td>
                  <td>{value.value}</td>
                  <td>{value.cpf}</td>
                  <td>{value.card}</td>
                  <td>{value.time}</td>
                  <td>{value.owner}</td>
                  <td>{value.store}</td>
                </tr>
              )
            })
          }


        </table>
        <button onClick={submitJson}>Submit</button>
      </div>
    )}
  </div>
  )
}