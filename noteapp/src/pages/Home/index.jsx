import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title='item1' isActive /></li>
        <li><ButtonText title='item2' /></li>
        <li><ButtonText title='item3' /></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
      </Search>

      <Content>
        <Section title='minha notas'>
          <Note data={{
            title: 'Carlos Felipe',
            tags: [
              { id: '1', name: 'React' },
              { id: '2', name: 'Javascript' }
            ]
          }} />

        </Section>
      </Content>

      <NewNotes>
        <FiPlus />
        Criar notas
      </NewNotes>

    </Container>
  )
}