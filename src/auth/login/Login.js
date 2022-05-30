import React from 'react'
import styles from './Login.module.css'
import Input from '../../UI/Input/Input'
import is from 'is_js'
import MainButton from '../../UI/button/MainButton'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  state = {
    isFormValid: false,
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
              className="formInput"
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
          <div className={styles.Login}>
              <form>
                <h1>Вход в ToDo</h1>
                {this.renderInputs()}
                {/*<button disabled={!this.state.isFormValid}>*/}
                {/*  Войти*/}
                {/*</button>*/}
                <MainButton disabled={!this.state.isFormValid}>Войти</MainButton>
                <Link to="/signup">Зарегистировать аккаунт</Link>
              </form>
            </div>
    )
  }
}

export default Login
