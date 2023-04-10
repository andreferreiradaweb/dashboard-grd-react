import styled from 'styled-components'
import { colors } from '../../theme'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1144px;
  padding: 24px 10px;
  height: 100%;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 24px 0;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WrapperDataTable = styled.div`
  min-height: 400px;
  width: 100%;
`

export const MyButton = styled.button`
  background-color: transparent;
  color: ${colors.primary};
  padding: 5px 7px;
  padding-bottom: 2px;
  font-weight: 700;
  border-radius: 4px;
  border: none;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ModalContent = styled.div`
  padding: 15px;
  display: flex;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    margin-bottom: 10px;
    align-self: center;
  }

  form {
    width: 100%;
  }

  .closeButton {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: ${colors.secondary};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border-radius: 50%;
  }

  .hr {
    height: 1px;
    background-color: ${colors.secondary};
    width: 100%;
  }
`

export const Text = styled.p`
  color: ${({ color }) => color ?? 'inherit'};
`

export const WrapperHeaders = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const customStyleModal = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  content: {
    maxWidth: '650px',
    height: '580px',
    margin: 'auto',
  },
}

export const styles = {
  rows: {
    style: {
      color: colors.primary,
      fontWeight: '500',
      fontFamily: 'Montserrat',
    },
  },
  headCells: {
    style: {
      color: colors.primary,
      fontWeight: '800',
      fontFamily: 'Montserrat',
    },
  },
}
