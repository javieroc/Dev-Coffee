import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Header } from './components'

function App(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
    </Flex>
  )
}

export { App }
