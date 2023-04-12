import { extendTheme } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const cardButton = defineStyle({
  border: '1px solid',
  borderColor: 'secondary.600',
  color: 'secondary.600',
  _hover: {
    bg: 'secondary.600',
    color: 'light.200',
  },
});

const quizzButton = defineStyle({
  border: '1px solid',
  borderColor: 'light.50',
  color: 'secondary.700',
  bg: 'light.50',
  backdropFilter: 'saturate(200%) blur(16px)',
  _hover: {
    bg: 'secondary.400',
    color: 'light.200',
  },
});

const quizSectionButton = defineStyle({
  border: '1px solid',
  borderColor: 'light.50',
  color: 'secondary.700',
  bg: 'light.50',
  _hover: {
    bg: 'secondary.600',
    color: 'light.200',
  },
});

const buttonTheme = defineStyleConfig({
  variants: { cardButton, quizzButton, quizSectionButton },
});

const colors = {
  primary: {
    200: '#ff8e6f',
    300: '#ff805d',
    400: '#FF724B',
    500: '#e66744',
    600: '#cc5b3c',
  },
  secondary: {
    50: 'rgba(228, 104, 112, 0.5)',
    200: '#fd8f95',
    300: '#fd8188',
    400: '#FD737B',
    500: '#e4686f',
    600: '#ca5c62',
    700: '#75272b',
  },
  tertiary: {
    200: '#fec58b',
    300: '#febd7d',
    400: '#FEB66E',
    500: '#e5a463',
    600: '#cb9258',
  },
  light: {
    50: 'rgba(255, 255, 255, 0.4)',
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
  footer: {
    200: '#e04646',
  },
};

const fonts = {
  heading: `'Julius Sans One', sans-serif`,
  body: `'Alice', sans-serif`,
};

const styles = {
  global: {
    html: {
      height: '100%',
    },
    body: {
      bgGradient: 'linear(to-b, #FF713D 0%, rgba(255, 91, 111, 0.83) 72.98%, #FFD166 100%)',
      backgroundAttachment: 'fixed',
      height: '100%',
    },
  },
};
const theme = extendTheme({ styles, colors, fonts, components: { Button: buttonTheme } });

export default theme;
