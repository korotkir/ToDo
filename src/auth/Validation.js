import React, {useEffect, useState} from 'react'
import is from 'is_js'
import Input from '../UI/Input/Input'
import {Link} from 'react-router-dom'
import MainButton from '../UI/button/MainButton'
import styles from './Validation.module.css'

const Validation = (props) => {

  const rules = {
    email: {
      title: 'E-mail',
      value: '',
      touched: false,
      valid: false,
      validation: {
        required: true,
        email: true
      },
      errorMessage: '* Введите корректный e-mail',
    },
    password: {
      title: 'Пароль',
      value: '',
      touched: false,
      valid: false,
      validation: {
        required: true,
        minLength: 6
      },
      errorMessage: '* Минимум 6 символов',
    },
    firstName: {
      title: 'Имя',
      value: '',
      touched: false,
      valid: false,
      validation: {
        required: true,
        minLength: 2
      },
      errorMessage: '* Введите имя',
    },
    lastName: {
      title: 'Фамилия',
      value: '',
      touched: false,
      valid: false,
      validation: {
        required: true,
        minLength: 2
      },
      errorMessage: '* Введите фамилия',
    },
  }

  const [validation, setValidation] = useState({})
  const [isFormValid, setFormValid] = useState(false)

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

    setValidation(inputs)
    setFormValid(isFormValid)

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

      setValidation({
        ...validation,
        ...includes
      })
    }

    renderInputs()
  }, [])

  return (
    <form className={styles.Validation}>
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
      <MainButton disabled={!isFormValid}>{props.button}</MainButton>
      <Link to={props.link[0]}>{props.link[1]}</Link>
    </form>
  )
}

export default Validation
