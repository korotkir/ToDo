import React from 'react'
import styles from './Auth.module.css'
import {Button} from 'react-bootstrap'
import Input from '../UI/Input/Input'

const Auth = props => {
  return (
    <div className={styles.Auth}>
      <div>
        <h1>Авторизация</h1>

        <form className={styles.authForm}>
          <Input
            title="E-mail"
            type="email"
            validate
          />
          <Input
            title="Пароль"
            type="password"
            minLength="6"
          />


          <Button  className={styles.Button} variant="secondary" size="lg">Войти</Button>
        </form>
      </div>

    </div>
  )
}

export default Auth
