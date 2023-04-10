import styled from 'styled-components'
import { colors } from '../../theme'

export const ProjectContainer = styled.div`
  background-color: ${colors.inputBackgroundColor};
  border-radius: 5px;
  padding: 10px;
`

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProjectTitle = styled.h2`
  margin: 0;
`

export const ProjectBody = styled.div`
  margin-top: 10px;
`

export const ProjectDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ProjectDetail = styled.div`
  margin-right: 10px;
  margin-bottom: 5px;
`

export const ProjectLabel = styled.span`
  font-weight: bold;
`
