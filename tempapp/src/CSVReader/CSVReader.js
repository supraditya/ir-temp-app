import React from "react";
import styles from "./CSVReader.module.css";

import { useCSVReader } from "react-papaparse";

function CSVReader() {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log("---------------------------");
        console.log(results);
        console.log("---------------------------");
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
        <>
          <div className={styles.uploadDiv}>
            <div className={styles.fileSelectDiv}>
              <button type="button" {...getRootProps()}>
                Browse files
              </button>
              <div style={{marginLeft: '1%'}}>{acceptedFile && acceptedFile.name}</div>
            </div>
            <button {...getRemoveFileProps()}>Remove</button>
          </div>
          <div className={styles.progressBar}>
            <ProgressBar />
          </div>
        </>
      )}
    </CSVReader>
  );
}
export default CSVReader;
