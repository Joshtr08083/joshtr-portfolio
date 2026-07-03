import React from 'react'
import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.backgroundContainer}>
        <div className={styles.cuttingMatGrid}></div>
        <div className={styles.cuttingMatAngleLine} style={{'--angle': '30deg'} as React.CSSProperties}></div>
        <div className={styles.cuttingMatAngleLine} style={{'--angle': '60deg'} as React.CSSProperties}></div>
        <div className={styles.cuttingMatAngleLine} style={{'--angle': '45deg'} as React.CSSProperties}></div>
        <div className={styles.cuttingMatCircle}></div>
    </div>
  )
}

export default Background