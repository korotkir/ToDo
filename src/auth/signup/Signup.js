import React from 'react'
import Validation from '../Validation'

const Signup = () => (
      <Validation
        signup
        email
        // firstName
        // lastName
        password
        button='Вход'
        link={['/login', 'Уже есть аккаунт?']}
      >
        Регистрация
      </Validation>
  )

export default Signup
