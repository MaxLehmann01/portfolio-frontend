import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { memo, useContext } from "react";
import AdminProjectURLTableContext from "../Contexts/AdminProjectURLTableContext";
import AdminProjectURLTableRow from "./AdminProjectURLTableRow";

type tAdminProjectURLTableProps = {
  urls: {
    name: string,
    url: string
  }[],
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdminProjectURLTable = memo(({ urls, handleInputChange }: tAdminProjectURLTableProps) => {
  const { handleAdd } = useContext(AdminProjectURLTableContext);

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
            {urls.map((url, index) => (
              <AdminProjectURLTableRow
                key={index}
                index={index}
                url={url}
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

export default AdminProjectURLTable;