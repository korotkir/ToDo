import React from 'react'
import styles from './Input.module.css'
import is from 'is_js'

const Input = props => {
  const formBinding = Math.random()

  return (
    <div>
      <label htmlFor={formBinding}>{props.title}</label>
      <input
        id={formBinding}
        type={props.type}
      />
    </div>
  )
}

export default Input
