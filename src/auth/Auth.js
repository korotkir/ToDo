import React from 'react'
import styles from './Auth.module.css'
import {Button} from 'react-bootstrap'
import Input from '../UI/Input/Input'
import is from 'is_js'

class Auth extends React.Component {
  state = {
    isFormValid: true,
    inputs: {
      email: {
        title: 'E-mail',
        value: '',
        touched: false,
        valid: false,
        validation: {
          required: true,
          email: true
        },
        errorMessage: '* Введите правильный e-mail!',
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
        errorMessage: '* Пароль должен содержать минимум 6 символов!',
      },
    }
  }

  validateControl = (value, rules) => {
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

  onChangeHandler = (event, input) => {
    // Копируем объект со свойствами инпутов
    const inputs = { ...this.state.inputs }
    // Доступ к свойствам инпутов
    const control = { ...inputs[input] }

    // Назначаем значению value, то что пользователь вводит в инпуте
    control.value = event.target.value
    // Если функция вызвана, значит инпут активен
    control.touched = true
    // Функция валидации отдаст true или false
    // Передаем в нее: пользовательское значение
    // и правила валидации
    control.valid = this.validateControl(control.value, control.validation)

    // Обновляем локальный объект со свойствами инпутов
    inputs[input] = control

    let isFormValid = true

    // Проверяем валидны ли инпуты
    Object.keys(inputs).forEach(name => {
      isFormValid = inputs[name].valid && isFormValid
    })

    // Отправляем объект в глобальный state

    this.setState({
      inputs, isFormValid
    })

  }

  renderInputs() {
    return (
      Object.keys(this.state.inputs).map((input, index) => {
          const parent = this.state.inputs[input]
          return (
            <Input
              key={index}
              type={input}
              title={parent.title}
              touched={parent.touched}
              valid={parent.valid}
              errorMessage={parent.errorMessage}
              onChange={event => this.onChangeHandler(event, input)}
              isValid={this.state.isFormValid}
              shouldValidate={!!parent.validation}
            />
          )
        }
      )
    )
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-12 col-md-4">
          <div className={styles.Auth}>


            <h1>Авторизация</h1>

            <form className={styles.authForm}>

              {this.renderInputs()}

              <Button
                className={styles.Button}
                variant="success"
                size="lg"
                disabled={!this.state.isFormValid}
              >
                Войти
              </Button>
            </form>
          </div>
        </div>
          </div>
      </div>
    )
  }
}

export default Auth
