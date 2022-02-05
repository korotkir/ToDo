import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  background: '#fdsfsd',
  color: 'black',
  mainStyle: 'darkgray',
  status: 'darkgray',
  success: 'rgba(0,255,43,0.62)',
  statusHover: 'gray',
  modal: 'white'
}

export const darkTheme = {
  background: '#181a1b',
  color: 'white',
  mainStyle: '#ff8725',
  status: 'white',
  success: '#ff8725',
  statusHover: 'white',
  modal: '#2f3031'
}

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }

  .form-control {
    background-color: ${props => props.theme.background};
    border-color: ${props => props.theme.mainStyle};
    color: ${props => props.theme.color}
  }

  .form-control:focus {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }

  .input-group-text {
    background-color: ${props => props.theme.background};
    border-color: ${props => props.theme.mainStyle};
    color: ${props => props.theme.color}
  }

  .btn-submit {
    border-color: ${props => props.theme.color};
    color: ${props => props.theme.mainStyle};
  }
    
  .btn-submit:hover {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.mainStyle};
    border-color: ${props => props.theme.mainStyle};
    }

  .trash {
    color: ${props => props.theme.mainStyle};
  }

  .success {
    background-color: ${props => props.theme.success};
  }

  .status {
    color: ${props => props.theme.status};
  }

  .StatusBar {
    color: ${props => props.theme.mainStyle};
  }

  .gear, .person {
    color: ${props => props.theme.mainStyle};
    background: none;
    border: none;
  }

  .moon:hover, .gear:hover, .person:hover {
    transition-delay: .3s;
    color: ${props => props.theme.statusHover};
    background: none;
    border: none;
  }

  .moon:active, .gear:active, .person:active {
    background: none;
    border: none;
  }

  .moon:focus, .gear:focus, .person:focus {
    color: ${props => props.theme.statusHover};
  }
  
  .modal-content {
    background-color: ${props => props.theme.modal}
  }

`
