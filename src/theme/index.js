import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Cormorant Garamond', Georgia, serif`,
    body: `'Inter', system-ui, sans-serif`,
    mono: `'Manrope', system-ui, sans-serif`,
  },
  colors: {
    brand: {
      fig: '#4a2d3d',  // principal – figo profundo
      figHover: '#6A5560',  // ameixa suave – hover
      figLight: '#705C66',  // ameixa acinzentado claro
      gold: '#C9A46A',  // dourado suave – detalhes premium
      bg: '#f6f1ed',  // fundo principal
      card: '#EFE7E2',  // cards / caixas FAQ
      text: '#4D3B45',  // títulos
      muted: '#6F6468',  // parágrafos / descrições
      border: '#D8C5AF',  // linhas finas
    },
  },
  styles: {
    global: {
      'html, body': {
        bg: '#F6F1EE',
        color: '#6F6468',
        scrollBehavior: 'smooth',
        fontFamily: `'Inter', system-ui, sans-serif`,
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: `'Cormorant Garamond', Georgia, serif`,
        fontWeight: '400',
        color: '#4D3B45',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: `'Manrope', system-ui, sans-serif`,
        borderRadius: '0',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontWeight: '600',
      },
      variants: {
        primary: {
          bg: 'brand.fig',
          color: 'white',
          fontSize: '0.72rem',
          px: 7, py: 3,
          _hover: { bg: 'brand.figHover', textDecoration: 'none' },
          _active: { bg: 'brand.figLight' },
        },
        outline_fig: {
          bg: 'transparent',
          color: 'brand.fig',
          fontSize: '0.72rem',
          border: '1.5px solid',
          borderColor: 'brand.fig',
          px: 7, py: 3,
          _hover: { bg: 'brand.fig', color: 'white', textDecoration: 'none' },
        },
        ghost_light: {
          bg: 'white',
          color: 'brand.fig',
          fontSize: '0.72rem',
          px: 7, py: 3,
          _hover: { opacity: 0.88, textDecoration: 'none' },
        },
      },
    },
    Drawer: {
      variants: {
        permanent: {},
      },
    },
  },
})

export default theme
