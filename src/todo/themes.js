import { createGlobalStyle } from "styled-components"

// const lightMode = {
//   Body: '#fdsfsd', // background
//   Trash: "darkgray",
//   Success: "rgba(0,255,43,0.62)", // background
//   Status: "darkgray",
//   StatusBar: "gray"
// }

export const lightTheme = {
  body: '#fdsfsd',
  color: 'black'
}

export const darkTheme = {
  body: 'black',
  color: 'white'
}

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${props => props.theme.body}
  }

`