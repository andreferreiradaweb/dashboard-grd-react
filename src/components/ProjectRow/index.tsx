import {
  ProjectBody,
  ProjectContainer,
  ProjectDetail,
  ProjectDetails,
  ProjectHeader,
  ProjectLabel,
  ProjectTitle,
} from './styled'

type ProjectProps = {
  project: {
    id: number
    name: string
    description: string
    status: number
    files: number
    responsible: string
    project: {
      id: number
      name: string
    }
  }
}

export function ProjectRow({ project }: ProjectProps) {
  const {
    id,
    name,
    description,
    status,
    files,
    responsible,
    project: { id: projectId, name: projectName },
  } = project

  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle>{name}</ProjectTitle>
        <span>ID: {id}</span>
      </ProjectHeader>
      <ProjectBody>
        <p>{description}</p>
        <ProjectDetails>
          <ProjectDetail>
            <ProjectLabel>Status:</ProjectLabel>{' '}
            {status === 1 ? 'Concluído' : 'Incompleto'}
          </ProjectDetail>
          <ProjectDetail>
            <ProjectLabel>Files:</ProjectLabel> {files}
          </ProjectDetail>
          <ProjectDetail>
            <ProjectLabel>Responsible:</ProjectLabel> {responsible}
          </ProjectDetail>
          <ProjectDetail>
            <ProjectLabel>Project:</ProjectLabel> {projectName} (ID: {projectId}
            )
          </ProjectDetail>
        </ProjectDetails>
      </ProjectBody>
    </ProjectContainer>
  )
}
