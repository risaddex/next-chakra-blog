import {
 Text
} from '@chakra-ui/react'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'


const Index = () => (
  <Container height="100vh">
    <Header/>
    <Main h="100%">
      aaaa
    </Main>

    <DarkModeSwitch />
    <Footer m="0" p="0">
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
)

export default Index
