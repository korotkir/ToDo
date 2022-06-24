import React, { useEffect } from 'react'
import is from 'is_js'
import Input from '../UI/Input/Input'
import {Link, useNavigate} from 'react-router-dom'
import MainButton from '../UI/button/MainButton'
import styles from './Validation.module.css'
import Load from '../UI/Loader/Load'
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import {authSuccess, login, setError, setFormValid, setLoading, setValidation, signup} from '../store/actions/auth'

const Validation = (props) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const rules = useSelector(state => state.auth.rules)
  const validation = useSelector(state => state.auth.validation)
  const isFormValid = useSelector(state => state.auth.isFormValid)
  const loading = useSelector(state => state.auth.loading)
  const error = useSelector(state => state.auth.error)

  const validateControl = (value, rules) => {
    // Если правила валидации отсутствуют, прекращаем функцию
    if (!rules) {
      return true
    }

    let isValid = true

    // Если пользователь ничего не ввел - получим false
    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }

    // Если пользователь ввел неправильный email - isValid вернет false
    if (rules.email) {
      isValid = is.email(value) && isValid
    }

    // Если пароль менее 6 символов вернет false
    if (rules.minLength) {
      isValid = rules.minLength <= value.length && isValid
    }

    return isValid
  }

  const onChangeHandler = (event, input) => {
    // Копируем объект со свойствами инпутов
    const inputs = { ...validation }
    // Доступ к свойствам инпутов
    const control = { ...inputs[input] }

    // Назначаем значению value, то что пользователь вводит в инпуте
    control.value = event.target.value
    // Если функция вызвана, значит инпут активен
    control.touched = true
    // Функция валидации отдаст true или false
    // Передаем в нее: пользовательское значение
    // и правила валидации
    control.valid = validateControl(control.value, control.validation)

    // Обновляем локальный объект со свойствами инпутов
    inputs[input] = control

    let isFormValid = true

    // Проверяем валидны ли инпуты
    Object.keys(inputs).forEach(name => {
      isFormValid = inputs[name].valid && isFormValid
    })

    // Отправляем объект в глобальный state
    dispatch(setValidation(inputs))
    dispatch(setFormValid(isFormValid))
  }

  const submitHandler = (event) => {
    event.preventDefault()

    dispatch(setError(''))

    const auth = getAuth()
    const email = validation.email.value
    const password = validation.password.value

    if (props.signup) {
      dispatch(signup(auth, email, password))
    }

    if (props.login) {
      dispatch(login(auth, email, password))
    }
  }

  useEffect(() => {
    const renderInputs = () => {
      const includes = {}

      if(props.email) {
        includes.email = rules.email
      }
      if(props.password) {
        includes.password = rules.password
      }
      if(props.firstName) {
        includes.firstName = rules.firstName
      }
      if(props.lastName) {
        includes.lastName = rules.lastName
      }

      console.log('includes', includes)
      dispatch(setValidation(includes))

      setTimeout(() => dispatch(setLoading(false)), 200)
    }

    renderInputs()
  }, [])

  return (
    <form
      className={styles.Validation}
      onSubmit={submitHandler}
    >
      {
        loading ? <Load/> :
          <>
            <h1>{props.children}</h1>
            {
              Object.keys(validation).map((input, index) => {
                  const parent = validation[input]
                  return (
                    <Input
                      key={index}
                      className="formInput"
                      type={input}
                      title={parent.title}
                      touched={parent.touched}
                      valid={parent.valid}
                      errorMessage={parent.errorMessage}
                      onChange={event => onChangeHandler(event, input)}
                      isValid={isFormValid}
                      shouldValidate={!!parent.validation}
                    />
                  )
                }
              )
            }
            {error ? <p>{error}</p> : null}
            <MainButton
              type="submit"
              disabled={!isFormValid}
            >{props.button}
            </MainButton>
            <Link to={props.link[0]}>{props.link[1]}</Link>
          </>
      }
    </form>
  )
}

export default Validation
