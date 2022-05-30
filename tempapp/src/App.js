import React, { useState } from "react";
import "./App.css";
import CSVReader from "./components/CSVReader/CSVReader";
import Tempnode from "./components/Tempnode/Tempnode";

function App() {
  const [CSVTempDataState, setCSVTempDataState] = useState([]);
  const [dataUploaded, setdataUploaded] = useState(false);
  return (
    <div className="App">
      <p className="header">Crop Temperature Heatmap</p>
      <CSVReader setData={setCSVTempDataState} dataUploaded={setdataUploaded} />
      <br></br>
      {dataUploaded && <div className="nodesDiv">
        {
          CSVTempDataState.map((DataRow, i) => {
            return(<Tempnode key={i} index={i+1} AvgAmbTemp={DataRow[6]} AvgObjTemp={DataRow[7]}/>)
          })
        }
        </div>}
    </div>
  );
}

export default App;
