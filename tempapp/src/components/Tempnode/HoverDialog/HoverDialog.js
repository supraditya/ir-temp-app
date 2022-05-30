import React from 'react'
import styles from './HoverDialog.module.css';
const HoverDialog =(props)=>{
    return(
        <div className={styles.outer}>
            Ambient Temp = {props.AvgAmbTemp} &deg;C
            <br></br>
            Crop Temp = {props.AvgObjTemp} &deg;C
        </div>
    )
}
export default HoverDialog;