import {AUTH_SUCCESS, ERROR, FORM_VALID, GET_USERNAME, LOADING, VALIDATION} from '../actions/actionType'

const initialState = {
  id: null,
  isAuth: false,
  username: null,
  rules: {
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
      errorMessage: '* Введите фамилию',
    },
  },
  validation: {},
  isFormValid: false,
  loading: false,
  error: '',
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case VALIDATION:
      return {
        ...state,
        validation: action.value
      }
    case FORM_VALID:
      return {
        ...state,
        isFormValid: action.value
      }
    case LOADING:
      return {
        ...state,
        loading: action.value
      }
    case ERROR:
      return {
        ...state,
        error: action.value
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: action.value
      }
    case GET_USERNAME:
      return {
        ...state,
        username: action.value
      }
    default:
      return state
  }
}
