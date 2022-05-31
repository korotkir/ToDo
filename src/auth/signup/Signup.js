import React, {useState} from 'react'
import styles from './Signup.module.css'
import Input from '../../UI/Input/Input'
import MainButton from '../../UI/button/MainButton'
import {Link} from 'react-router-dom'
import is from 'is_js'

const Signup = () => {

  return (
    <div className={styles.Signup}>
        <h1>Регистрация</h1>
      <Input
        className="formInput"
        title={'Имя'}
      />
      <Input
        className="formInput"
        title={'Фамилия'}
      />
      <Input
        className="formInput"
        title={'E-mail'}
      />
      <Input
        className="formInput"
        title={'Пароль'}
      />
      <MainButton>Зарегистрироваться</MainButton>
      <Link to="/login">Уже есть аккаунт?</Link>
    </div>
  )
}

export default Signup
