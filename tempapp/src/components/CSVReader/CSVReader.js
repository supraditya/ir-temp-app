import React from "react";
import styles from "./CSVReader.module.css";

import { useCSVReader } from "react-papaparse";

const CSVReader = (props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        var temp = [];
        temp = results.data;
        temp = temp.splice(1, temp.length - 2);
        props.setData(temp);
        props.dataUploaded(true);
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
        <>
          <div className={styles.uploadDiv}>
            <div className={styles.fileSelectDiv}>
              <button
                className={styles.fileUploadButton}
                type="button"
                {...getRootProps()}
              >
                Upload File
              </button>
            </div>
            <div className={styles.fileNameDiv}>
              {acceptedFile && acceptedFile.name}
            </div>

            <button
              className={styles.clearFileButton}
              {...getRemoveFileProps()}
            >
              Clear File
            </button>
          </div>
          <div className={styles.progressBar}>
            <ProgressBar />
          </div>
        </>
      )}
    </CSVReader>
  );
};
export default CSVReader;
