import {ERROR, FORM_VALID, LOADING, VALIDATION} from './actionType'

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
