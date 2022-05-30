import React from 'react'
import styles from './MainButton.module.css'

const MainButton = (props) => (
  <button
    className={styles.MainButton}
    type={props.type}
    disabled={props.disabled || false}
  >
    {props.children}
  </button>
)

export default MainButton
