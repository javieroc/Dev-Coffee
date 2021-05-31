import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { App } from './App'

const theme = extendTheme({
  hexagon: {
    w: "100px",
    m: "4px",
    f: 'calc(1.732 * var(--chakra-hexagon-w) + 4 * var(--chakra-hexagon-m) - 1px)'
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
