import React, { useState } from "react";
import "./App.css";
import CSVReader from "./CSVReader/CSVReader";

function App() {
  const [CSVTempDataState, setCSVTempDataState] = useState([]);
  const [dataUploaded, setdataUploaded] = useState(false);
  return (
    <div className="App">
      <CSVReader setData={setCSVTempDataState} dataUploaded={setdataUploaded} />
      {dataUploaded && <div>{CSVTempDataState}</div>}
    </div>
  );
}

export default App;
