import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { memo, useContext, useState } from "react";
import { tProject } from "../../../../types/tProject";
import CustomTablePagination from "../../../MUICustom/CustomTablePagination";
import AdminProjectTableContext from "../Contexts/AdminProjectTableContext";
import AdminProjectTableRow from "./AdminProjectTableRow";

type tAdminProjectTableProps = {
  projects: tProject[]
}

const AdminProjectTable = memo(({ projects }: tAdminProjectTableProps) => {
  const { searchTerm } = useContext(AdminProjectTableContext);

  const [ page, setPage ] = useState<number>(0);
  const [ rowsPerPage, setRowsPerPage ] = useState<number>(10);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const displayedEntries = projects.filter(project => project.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(startIndex, endIndex);

  return (
    <>
      <TableContainer 
        className="h-[calc(100%-53px)] overflow-y-scroll" 
        component={Paper}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell className="w-1" />
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedEntries.map(entry => (
              <AdminProjectTableRow
                key={entry._id}
                project={entry}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <CustomTablePagination
        rowCount={projects.length} 
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  )
})

export default AdminProjectTable;