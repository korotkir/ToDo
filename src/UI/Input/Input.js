import React from 'react'
import styles from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

  const Input = props => {
    const inputType = props.type || 'text'
    const cls = [styles.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
      cls.push(styles.invalid)
    }

    return (
      <div className={cls.join(' ')}>
        {/*<label htmlFor={htmlFor}>{props.title}</label>*/}

        <input
          id={htmlFor}
          type={inputType}
          onChange={props.onChange}
          placeholder={props.title}
        />
        {
          isInvalid(props)
            ? <span>{props.errorMessage}</span>
            : <span>&nbsp;</span>
        }
      </div>
    )
}


export default Input
