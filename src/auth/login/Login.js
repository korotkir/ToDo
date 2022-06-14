import React, {useEffect} from 'react'
import Validation from '../Validation'
import {useDispatch} from 'react-redux'
import {setError} from '../../store/actions/auth'

const Login = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setError(''))
  })

  return (
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
}


export default Login
