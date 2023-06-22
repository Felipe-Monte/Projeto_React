import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/Felipe-Monte.png"
          alt="imagem do usuário" />

        <div>
          <span>Bem vindo</span>
          <strong>Carlos Felipe</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}