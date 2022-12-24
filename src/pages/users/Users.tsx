import { useEffect } from 'react'
import { useUser } from '../../hooks/network/useUser'

import { BaseLayout } from '../../layout/BaseLayout'
import { DialogEditUser } from './components/DialogEditUser'
import { DialogDeleteUser } from './components/DialogDeleteUser'
import { LoadingComponent } from '../../components/Loading'
import { EmptyItem } from '../../components/EmptyItem'
import { Button } from '../../components/Button'
import { ContentButton } from '../games/styles'
import { DialogCreateUser } from './components/DialogCreateUser'
import { Pagination } from '../../components/Pagination'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { Container, ContentAction, Message, TableContainer } from './styles'

export function Users() {
  const {
    loadingUsersState,
    setLoadingUsersState,
    allUsersState,
    initStateForm,
    userState,
    setUserState,
    handleOpenModalCreate,
    handleOpenModalEdit,
    handleOpenModalDelete,
    showModalCreate,
    showModalDelete,
    showModalEdit,
    handleCloseModalCreate,
    handleCloseModalDelete,
    handleCloseModalEdit,
    handleSubmitCreateUser,
    handleSubmitDeleteUser,
    handleSubmitEditUser,
    totalPage,
    page,
    handleChangePage,
    getUsersPaged
  } = useUser()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setUserState(values => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    getUsersPaged(page)
  }, [page])

  return (
    <BaseLayout>
      <>
        <Container>
          {loadingUsersState ? (
            <LoadingComponent
              open={loadingUsersState}
              onClose={() => setLoadingUsersState(false)}
            />
          ) : (
            <>
              {allUsersState?.length === 0 ? (
                <Message>
                  <EmptyItem message="Nenhum usuário encontrado 😢" />
                </Message>
              ) : (
                <>
                  <ContentButton>
                    <Button
                      onClick={() => {
                        setUserState(initStateForm)
                        handleOpenModalCreate()
                      }}
                    >
                      Novo Usuário
                    </Button>
                  </ContentButton>
                  <TableContainer>
                    <table>
                      <thead>
                        <tr>
                          <td>Nome</td>
                          <td>E-mail</td>
                          <td>Ações</td>
                        </tr>
                      </thead>

                      <tbody>
                        {allUsersState?.map(user => (
                          <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                              <ContentAction>
                                <EditIcon
                                  color="action"
                                  onClick={() => {
                                    setUserState({
                                      id: user.id,
                                      name: user.name,
                                      email: user.email,
                                      password: user.password
                                    })
                                    handleOpenModalEdit(userState)
                                  }}
                                />
                                <DeleteIcon
                                  color="warning"
                                  onClick={() => {
                                    setUserState({ id: user.id, ...user })
                                    handleOpenModalDelete(userState)
                                  }}
                                />
                              </ContentAction>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </TableContainer>
                  <Pagination
                    count={totalPage}
                    page={Number(page)}
                    onChange={(_, newPage) => handleChangePage(newPage)}
                  />
                </>
              )}
            </>
          )}
        </Container>

        <DialogCreateUser
          open={showModalCreate}
          onClose={handleCloseModalCreate}
          onChange={handleChange}
          onSubmitCreate={handleSubmitCreateUser}
          user={userState}
        />

        <DialogEditUser
          open={showModalEdit}
          onClose={handleCloseModalEdit}
          onChange={handleChange}
          onSubmitEdit={handleSubmitEditUser}
          user={userState}
        />

        <DialogDeleteUser
          open={showModalDelete}
          onClose={handleCloseModalDelete}
          onSubmitDelete={handleSubmitDeleteUser}
        />
      </>
    </BaseLayout>
  )
}
