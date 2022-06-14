import React from 'react'
import styles from './MainButton.module.css'

const MainButton = (props) => {
  return (
  <button
    className={styles.MainButton}
    type={props.type}
    disabled={props.disabled || false}
    onChange={props.onChange}
  >
    {props.children}
  </button>
  )
}

export default MainButton
