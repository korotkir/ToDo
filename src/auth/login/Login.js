import React from 'react'
import styles from './Login.module.css'
import Validation from '../Validation'

function Login() {
  return (
    <div className={styles.Login}>

      <Validation
        inputs={
          {
            email: true,
            password: true,
          }
        }
        button='Вход'
        link={['/signup', 'Зарегистрировать аккаунт']}
      >
        Вход в ToDo
      </Validation>


    </div>

  )
}

export default Login
