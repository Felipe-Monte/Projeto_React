import { Container, Links, Content } from "./style"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title='Excluir nota' />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit dolorum quibusdam optio, architecto enim ad non quia quam minus dolore doloribus cupiditate odio sapiente. Quisquam quis explicabo ducimus dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, hic possimus pariatur et aliquam deleniti labore. Repudiandae, sunt neque cum, soluta ad voluptate ipsa dolorem sint vero voluptas omnis adipisci?
          </p>

          <Section title='Links úteis'>
            <Links>
              <li><a href="#">item 1</a></li>
              <li><a href="#">item 2</a></li>
              <li><a href="#">item 3</a></li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='Express' />
            <Tag title='Node' />
          </Section>

          <Button title='voltar' />
        </Content>
      </main>
    </Container>
  )
}