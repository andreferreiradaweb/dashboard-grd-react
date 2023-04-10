import styled from 'styled-components'

export const HeaderStyled = styled.div`
  width: 100vw;
  height: 6rem;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color-500);
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1144px;
  padding: 0 10px;
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const LogoWrapper = styled.div`
  width: 258px;
  height: 47px;
`

export const LogoStyled = styled.img`
  width: 100%;
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

export const Name = styled.span`
  font-weight: 700;
`

export const Profession = styled.div`
  font-size: 0.8rem;
  color: $secondary-color;
  font-weight: 500;
`

export const AvatarWrapper = styled.div`
  width: 76px;
  height: 76px;
`

export const AvatarStyled = styled.img`
  width: 100%;
`
