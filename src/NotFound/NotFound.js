import React from 'react'
import styles from './NotFound.module.css'
import {NavLink} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <h1>Страница не найдена</h1>
      <NavLink to={'/'} >Вернуться на главную</NavLink>
    </div>
  )
}

export default NotFound
