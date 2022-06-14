import React, {useEffect} from 'react'
import Validation from '../Validation'
import {useDispatch} from 'react-redux'
import {setError} from '../../store/actions/auth'

const Signup = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setError(''))
  })

  return (
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
}

export default Signup
