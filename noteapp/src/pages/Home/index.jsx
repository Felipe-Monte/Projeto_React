import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
          <li><ButtonText title='item1' isActive/></li>
          <li><ButtonText title='item2' /></li>
          <li><ButtonText title='item3' /></li>
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNotes>

      </NewNotes>

    </Container>
  )
}