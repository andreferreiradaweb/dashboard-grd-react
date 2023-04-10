import {
  Container,
  HeaderStyled,
  LogoWrapper,
  Wrapper,
  LogoStyled,
  ProfileWrapper,
  TextWrapper,
  Name,
  Profession,
  AvatarWrapper,
  AvatarStyled,
} from './styled'
import Logo from '../../assets/logo_nextek.svg'
import Avatar from '../../assets/avatar.svg'

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <LogoStyled src={Logo} />
          </LogoWrapper>
          <ProfileWrapper>
            <TextWrapper>
              <p>
                Olá, <Name>André Ferreira</Name>
              </p>
              <Profession>Projetista</Profession>
            </TextWrapper>
            <AvatarWrapper>
              <AvatarStyled src={Avatar} />
            </AvatarWrapper>
          </ProfileWrapper>
        </Wrapper>
      </Container>
    </HeaderStyled>
  )
}
