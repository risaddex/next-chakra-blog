import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    red: {
      50: '#ffe1e1',
      100: '#ffb1b1',
      200: '#ff7f7f',
      300: '#ff4c4c',
      400: '#ff1a1a',
      500: '#e60000',
      600: '#b40000',
      700: '#810000',
      800: '#500000',
      900: '#210000',
    },
    transparent: 'rgba(194, 77, 77, 0)',
  },
  fonts,
  breakpoints,
})

export default theme
