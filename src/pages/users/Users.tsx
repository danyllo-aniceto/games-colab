/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/network/useUser";

import { Button } from "../../components/Button";
import { EmptyItem } from "../../components/EmptyItem";
import { BaseLayout } from "../../layout/BaseLayout";
import { ContentButton } from "../games/styles";
import { DialogDeleteUser } from "./components/DialogDeleteUser";
import { DialogFormUser } from "./components/DialogFormUser";

import { IUserDTO } from "../../dtos/IUserDTO";
import { TableUser } from "./components/TableUser";
import { initStateUserForm } from "./schema";
import { Container, Message } from "./styles";

export function Users() {
  const {
    allUsersState,
    showModalCreate,
    showModalDelete,
    showModalEdit,
    totalPage,
    page,
    handleSubmitCreateUser,
    handleSubmitDeleteUser,
    handleSubmitEditUser,
    handleChangePage,
    getUsersPaged,
    onToggleModalCreate,
    onToggleModalDelete,
    onToggleModalEdit,
  } = useUser();

  const [userState, setUserState] = useState<IUserDTO>(initStateUserForm);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const { value } = event.target;
    setUserState((values) => ({ ...values, [name]: value }));
  }

  useEffect(() => {
    getUsersPaged(page);
  }, [page]);

  return (
    <BaseLayout>
      <>
        <Container>
          <>
            {allUsersState.length >= 0 ? (
              <>
                <ContentButton>
                  <Button
                    onClick={() => {
                      setUserState(initStateUserForm);
                      onToggleModalCreate();
                    }}
                  >
                    Novo Usuário
                  </Button>
                </ContentButton>
                <TableUser
                  allUsersState={allUsersState}
                  handleChangePage={handleChangePage}
                  onToggleModalDelete={onToggleModalDelete}
                  onToggleModalEdit={onToggleModalEdit}
                  page={page}
                  setUserState={setUserState}
                  totalPage={totalPage}
                />
              </>
            ) : (
              <Message>
                <EmptyItem message="Nenhum usuário encontrado 😢" />
              </Message>
            )}
          </>
        </Container>

        <DialogFormUser
          open={showModalCreate}
          onClose={onToggleModalCreate}
          onChange={handleChange}
          onSubmit={handleSubmitCreateUser}
          user={userState}
          title="Cadastro de usuário"
          textButtonConfirm="Cadastrar usuário"
          textButtonCancel="Cancelar"
        />

        <DialogFormUser
          open={showModalEdit}
          onClose={onToggleModalEdit}
          onChange={handleChange}
          onSubmit={handleSubmitEditUser}
          user={userState}
          title="Dados de usuário"
          textButtonConfirm="Editar usuário"
          textButtonCancel="Cancelar"
        />

        <DialogDeleteUser
          open={showModalDelete}
          onClose={onToggleModalDelete}
          onSubmitDelete={handleSubmitDeleteUser}
          user={userState}
        />
      </>
    </BaseLayout>
  );
}
