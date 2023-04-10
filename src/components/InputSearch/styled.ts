import styled from 'styled-components'
import { colors } from '../../theme'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  label {
    font-weight: 600;
    font-size: 14px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  outline: none;
  position: relative;
  margin-top: 5px;
  background-color: ${colors.inputBackgroundColor};
`

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 7px;
  right: 12px;
  cursor: default;
`
