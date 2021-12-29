import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#fdsfsd',
  color: 'black',
  trash: "darkgray",
  success: "rgba(0,255,43,0.62)", // background
  status: "darkgray",
  statusBar: "gray"
}

export const darkTheme = {
  body: '#181a1b',
  color: 'white',
  trash: "rgb(178, 171, 161)",
  success: "rgb(232, 230, 227)", // background
  status: "rgb(178, 171, 161)",
  statusBar: "rgb(152, 143, 129)"
}

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.color};
  }

  .form-control {
    background-color: ${props => props.theme.body};
    border-color: #6c757d;
}

  .input-group-text {
    background-color: ${props => props.theme.body}
    border-color: #6c757d;
  }

  .trash {
    color: ${props => props.theme.trash};
  }

  .success {
    background-color: ${props => props.theme.success};
  }

  .status {
    color: ${props => props.theme.status};
  }

  .statusBar {
    color: ${props => props.theme.statusBar};
  }

`