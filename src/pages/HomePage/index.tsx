import { useEffect, useState } from 'react'
import { GRDServices } from '../../services/'
import { IGRDs } from '../../interfaces/grd'
import Modal from 'react-modal'
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

import DataTable from 'react-data-table-component'
import {
  Wrapper,
  Container,
  WrapperDataTable,
  MyButton,
  ModalContent,
  styles,
  customStyleModal,
  Text,
  WrapperHeaders,
  Span,
} from './styles'
import { AddButton } from '../../components/AddButton'
import { InputSelected } from '../../components/InputSelected'
import { Notify, NotifyTypes } from '../../components/Notify'
import { Button } from '../../components/Button'
import { useFormik } from 'formik'
import { Header } from '../../components/Header'
import { Bredcrumb } from '../../components/Bredcrumb'
import { InputSearch } from '../../components/InputSearch'
import { gerarId } from '../../utils/gerarId'
import { colors } from '../../theme'
import { ProjectRow } from '../../components/ProjectRow'

const initialValues = {
  id: 0,
  name: '',
  description: '',
  status: 0,
  files: 0,
  responsible: '',
  project: {
    id: 0,
    name: '',
  },
}

export function HomePage() {
  const [users, setUsers] = useState<Array<IGRDs> | null>(null)
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: handlePressSubmit,
  })

  const headers = [
    {
      id: 1,
      name: 'Nome',
      selector: (row: IGRDs) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: 'Status',
      selector: (row: IGRDs) =>
        row.status === 0 ? (
          <Text color={colors.successColor}>Concluído</Text>
        ) : (
          <Text color={colors.warningColor}>Incompleto</Text>
        ),
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: 'Responsável',
      selector: (row: IGRDs) => row.responsible,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: 'Projeto',
      selector: (row: IGRDs) => row.project.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: 'ID',
      selector: (row: IGRDs) => row.id,
      sortable: true,
      reorder: true,
    },
    {
      id: 6,
      name: 'Ações',
      selector: (row: IGRDs) => (
        <>
          <MyButton
            style={{ marginRight: '10px' }}
            onClick={() => handleDeleteItem(Number(row.id))}
          >
            <HiOutlineTrash size="17" />
          </MyButton>
          <MyButton onClick={() => handlePressEdit(row.id)}>
            <HiOutlinePencil size="17" />
          </MyButton>
        </>
      ),
    },
  ]

  async function toggleModal() {
    setIsModalOpen((value) => !value)
  }

  function handlePressEdit(userId: number) {
    const user = users?.find((user) => user.id === userId)
    if (!user) return
    setValues({
      id: user.id,
      name: user.name,
      description: user.description,
      status: user.status,
      files: user.files,
      responsible: user.responsible,
      project: {
        id: user.project.id,
        name: user.project.name,
      },
    })
    toggleModal()
    setSelectedUserId(userId)
    setIsModalAdd(false)
  }

  async function handleDeleteItem(userId: number) {
    try {
      if (!users) return
      const newUsers = users.filter((user: IGRDs) => user.id !== userId)
      setUsers(newUsers)
      Notify(NotifyTypes.SUCCESS, 'GRD deletada com sucesso')
    } catch (error) {
      console.error({ error })
      Notify(
        NotifyTypes.ERROR,
        'Erro ao deletar GRD, por favor tente novamente'
      )
    }
  }

  const getGRDs = () => {
    try {
      const response = GRDServices.getGRDs()
      setUsers(response)
    } catch (error) {
      console.error({ error })
    }
  }

  useEffect(() => {
    getGRDs()
  }, [])

  const addGRD = async (user: IGRDs) => {
    try {
      if (!user) return
      setUsers((oldGRDs) => (oldGRDs ? [...oldGRDs, { ...user }] : null))
      Notify(NotifyTypes.SUCCESS, 'GRD adicionada com sucesso')
    } catch (error) {
      console.error({ error })
      Notify(
        NotifyTypes.ERROR,
        'Erro ao cadastrar GRD, por favor tente novamente'
      )
    } finally {
      toggleModal()
    }
  }

  const updateUser = async (newUser: IGRDs) => {
    try {
      if (!users) return
      const updatedUsers = users.map((user) =>
        user.id === newUser.id ? newUser : user
      )
      Notify(NotifyTypes.SUCCESS, 'Usuário atualizado com sucesso')

      setUsers(updatedUsers)
    } catch (error) {
      console.error({ error })

      Notify(
        NotifyTypes.ERROR,
        'Erro ao atualizar usuário, por favor tente novamente'
      )
    } finally {
      toggleModal()
    }
  }

  async function handlePressSubmit() {
    const { description, id, name } = values
    const newGRD = {
      name,
      description,
      status: 0,
      files: 0,
      responsible: '',
      project: {
        id: 0,
        name: '',
      },
    }
    if (isModalAdd) {
      addGRD({ ...newGRD, id: Number(gerarId()) })
    } else {
      if (selectedUserId) {
        updateUser({ id: selectedUserId, ...newGRD })
      }
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Bredcrumb />
        <Modal
          style={customStyleModal}
          isOpen={isModalOpen}
          ariaHideApp={false}
        >
          <ModalContent>
            <h2>{isModalAdd ? 'Adicionar' : 'Editar'} GRD</h2>
            <button
              className="closeButton"
              onClick={() => {
                setIsModalOpen((value) => !value)
                setIsModalAdd(() => false)
              }}
            >
              <MdClose size="18" />
            </button>
            <div className="hr"></div>
            <form onSubmit={handleSubmit}>
              <InputSelected
                disabled={true}
                style={{ marginTop: '10px' }}
                label="ID"
                name="id"
                value={gerarId()}
              />
              <InputSelected
                disabled={false}
                style={{ marginTop: '10px' }}
                label="Nome"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <InputSelected
                disabled={false}
                style={{ marginTop: '10px' }}
                label="Descrição"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
              <InputSelected
                disabled={false}
                style={{ marginTop: '10px' }}
                label="Projeto"
                name="project"
                onChange={handleChange}
                value={values.project.name}
              />
              <Button
                small
                type="submit"
                title={isModalAdd ? 'Cadastrar' : 'Atualizar'}
              />
            </form>
          </ModalContent>
        </Modal>
        <Wrapper>
          <WrapperHeaders>
            <InputSearch
              disabled={false}
              style={{ marginTop: '10px' }}
              name="number"
              onChange={handleChange}
              placeholder="Buscar projeto por nome ou ID"
            />
            <Button
              small
              outlined
              customSize="120px"
              styles={{ marginLeft: '50px' }}
              title="Filtrar"
            />
          </WrapperHeaders>
          <WrapperDataTable>
            <DataTable
              columns={headers}
              data={users || []}
              defaultSortFieldId={1}
              customStyles={styles}
              expandableRows={true}
              expandableRowsComponent={({ data }) => (
                <ProjectRow project={data} />
              )}
            />
          </WrapperDataTable>
          <AddButton
            onClick={() => {
              setValues(initialValues)
              setSelectedUserId(null)
              setIsModalAdd(true)
              toggleModal()
            }}
          />
          <Text>
            Total de itens: <Span color={colors.primary}>{users?.length}</Span>
          </Text>
        </Wrapper>
      </Container>
    </>
  )
}
