import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    200: '#ff8e6f',
    300: '#ff805d',
    400: '#FF724B',
    500: '#e66744',
    600: '#cc5b3c',
  },
  secondary: {
    200: '#fd8f95',
    300: '#fd8188',
    400: '#FD737B',
    500: '#e4686f',
    600: '#ca5c62',
  },
  tertiary: {
    200: '#fec58b',
    300: '#febd7d',
    400: '#FEB66E',
    500: '#e5a463',
    600: '#cb9258',
  },
  light: {
    200: '#fff1e8',
    300: '#fff0e5',
    400: '#FFEEE2',
    500: '#e6d6cb',
    600: '#ccbeb5',
  },
  dark: {
    200: '#686f76',
    300: '#555d65',
    400: '#424B54',
    500: '#424b54',
    600: '#3b444c',
  },
}

const fonts = {
  heading: `'Julius Sans One', sans-serif`,
  body: `'Alice', sans-serif`,
}
const theme = extendTheme({ colors, fonts })

export default theme
