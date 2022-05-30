import React from 'react'
import styles from './Tempnode.module.css'
const Tempnode=(props)=>{
    return(
        <div className={styles.tempnode}>
            {props.AvgAmbTemp}
            <br></br>
            {props.AvgObjTemp}
        </div>
    );
}
export default Tempnode;