import { Edit, Delete } from "@mui/icons-material";
import { Pagination } from "../../../../components/Pagination";

import { IUserDTO } from "../../../../dtos/IUserDTO";
import { ContentAction, TableContainer } from "./styles";

interface PropTypes {
  allUsersState: IUserDTO[];
  setUserState: React.Dispatch<React.SetStateAction<IUserDTO>>;
  totalPage: number;
  page: string;
  onToggleModalEdit: () => void;
  onToggleModalDelete: () => void;
  handleChangePage: (page: number) => void;
}

export function TableUser({
  allUsersState,
  page,
  totalPage,
  setUserState,
  onToggleModalEdit,
  onToggleModalDelete,
  handleChangePage,
}: PropTypes) {
  return (
    <>
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
            {allUsersState?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <ContentAction>
                    <Edit
                      color="action"
                      onClick={() => {
                        setUserState(user);
                        onToggleModalEdit();
                      }}
                    />
                    <Delete
                      color="warning"
                      onClick={() => {
                        setUserState(user);
                        onToggleModalDelete();
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
  );
}
