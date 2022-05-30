import React, { useState } from "react";
import "./App.css";
import CSVReader from "./components/CSVReader/CSVReader";
import Tempnode from "./components/Tempnode/Tempnode";

function App() {
  const [CSVTempDataState, setCSVTempDataState] = useState([]);
  const [dataUploaded, setdataUploaded] = useState(false);
  return (
    <div className="App">
      <CSVReader setData={setCSVTempDataState} dataUploaded={setdataUploaded} />
      <br></br>
      {dataUploaded && <div className="nodesDiv">
        {
          CSVTempDataState.map((objTempReading) => {
            return(<Tempnode AvgAmbTemp={objTempReading[6]} AvgObjTemp={objTempReading[7]}/>)
          })
        }
        </div>}
    </div>
  );
}

export default App;
