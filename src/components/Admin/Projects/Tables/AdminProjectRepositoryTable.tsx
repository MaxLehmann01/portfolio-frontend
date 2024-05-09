import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { memo, useContext } from "react";
import AdminProjectRepositoryTableRow from "./AdminProjectRepositoryTableRow";
import AdminProjectRepositoryTableContext from "../Contexts/AdminProjectRepositoryTableContext";

type tAdminProjectRepositoryTableProps = {
  repositories: {
    name: string,
    url: string
  }[],
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdminProjectRepositoryTable = memo(({ repositories, handleInputChange }: tAdminProjectRepositoryTableProps) => {
  const { handleAdd } = useContext(AdminProjectRepositoryTableContext);

  return (
    <>
      <TableContainer
        component={Paper}
        className="flex-1 overflow-y-scroll"
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>URL</TableCell>
              <TableCell className="w-1"/>
            </TableRow>
          </TableHead>
          <TableBody>
            {repositories.map((repository, index) => (
              <AdminProjectRepositoryTableRow
                key={index}
                index={index}
                repository={repository}
                handleInputChange={handleInputChange}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        onClick={handleAdd}
        children="Add"
      />
    </>
  )
})

export default AdminProjectRepositoryTable;