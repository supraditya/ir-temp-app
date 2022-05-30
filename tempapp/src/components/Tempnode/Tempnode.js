import React from "react";
import styles from "./Tempnode.module.css";
/**
 * Green: #2afc05
 * Yellow: #fcd305
 * Red: #fc2605
 */
const green = "#2afc05";
const yellow = "#fcd305";
const red = "#fc2605";

const Tempnode = (props) => {
  let tempNode;
  let temp_diff = props.AvgObjTemp - props.AvgAmbTemp;
  console.log(temp_diff)
  if (temp_diff < 2) {
    tempNode = (
      <div className={styles.tempnodeInner} style={{ backgroundColor: green }}>
        {props.index}
      </div>
    );
  } else if (temp_diff > 2 && temp_diff < 3) {
    tempNode = (
      <div className={styles.tempnodeInner} style={{ backgroundColor: yellow }}>
        {props.index}
      </div>
    );
  } else if (temp_diff > 3) {
    tempNode = (
      <div className={styles.tempnodeInner} style={{ backgroundColor: red }}>
        {props.index}
      </div>
    );
  }
  return (
    <div className={styles.tempnode}>
      {tempNode}
      {props.AvgAmbTemp}
      <br></br>
      {props.AvgObjTemp}
    </div>
  );
};
export default Tempnode;
