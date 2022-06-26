import {AUTH_SUCCESS, ERROR, FORM_VALID, GET_USERNAME, LOADING, VALIDATION} from './actionType'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

// TODO: сюда промисы из Validation
//
export const login =  (auth, email, password) => {
  return  (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid
        localStorage.setItem('id', JSON.stringify(uid))
        dispatch(getUsername(user.email))
        setTimeout(() => {
          localStorage.setItem('id', null)
          dispatch(authSuccess(false))
        }, 3600000)

        dispatch(authSuccess(true))

      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('error! ', errorCode)
        if (errorCode === 'auth/user-not-found') {
          dispatch(setError('* Такого пользователя не существует!'))
        }
        if (errorCode === 'auth/wrong-password') {
          dispatch(setError('* Неверный пароль!'))
        } else {
          dispatch(setError('Произошла ошибка! Попробуйте еще раз...'))
        }
      })
  }
}

export const signup = (auth, email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(login(auth, email, password))
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/email-already-in-use') {
          dispatch(setError('* Пользователь с таким email уже существует!'))
        } else {
          dispatch(setError('Произошла ошибка! Попробуйте еще раз...'))
        }
      })
  }
}

export const logout = () => {
  localStorage.clear()
}

export const authSuccess = (bool) => {
  return {
    type: AUTH_SUCCESS,
    value: bool
  }
}

// TODO: Не работает!
export const getUsername = (username) => {
  return {
    type: GET_USERNAME,
    value: username
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
