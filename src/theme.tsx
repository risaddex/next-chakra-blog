import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  mono: `'Menlo', monospace`,
  inter: `'Inter, sans-serif'`,
  roboto: `'Roboto Slab, serif'`,
}

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
    gray: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
  },
  fonts: {
    heading: fonts.roboto,
    ...fonts
  },
  breakpoints,
})

export default theme
