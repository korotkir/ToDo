import {ERROR, FORM_VALID, LOADING, VALIDATION} from './actionType'
import {child, get, getDatabase, ref, set} from 'firebase/database'
import {store} from '../store'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

// TODO: сюда промисы из Validation
//

export const login =  (auth, email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid
        localStorage.setItem('id', JSON.stringify(uid))
        setTimeout(() => {
          localStorage.setItem('id', null)
        }, 5000)
        const navigate = useNavigate()
        console.log('success')
        return navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('error! ', errorCode)
        if (errorCode === 'auth/user-not-found') {
          dispatch(setError('* Такого пользователя не существует!'))
        }
        if (errorCode === 'auth/wrong-password') {
          dispatch(setError('* Неверный пароль!'))
        }
      })
  }
}

export const signup = (auth, email, password) => {
  return async (dispatch) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/email-already-in-use') {
          dispatch(setError('* Пользователь с таким email уже существует!'))
        }
      })
  }
}

export const setValidation = (rules) => {
  return {
    type: VALIDATION,
    value: rules
  }
}

export const setFormValid = (valid) => {
  return {
    type: FORM_VALID,
    value: valid
  }
}

export const setLoading = (bool) => {
  return {
    type: LOADING,
    value: bool
  }
}

export const setError = (error) => {
  return {
    type: ERROR,
    value: error
  }
}
