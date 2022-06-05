import React from 'react'
import Validation from '../Validation'

const Login = () => (
    <Validation
      login
      email
      password
      button='Вход'
      link={['/signup', 'Зарегистрировать аккаунт']}
    >
      Вход в ToDo
    </Validation>
)


export default Login
