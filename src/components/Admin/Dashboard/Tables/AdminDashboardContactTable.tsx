import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { memo, useState } from "react";
import { tContact } from "../../../../types/tContact";
import CustomTablePagination from "../../../MUICustom/CustomTablePagination";
import AdminDashboardContactTableRow from "./AdminDashboardContactTableRow";

type tAdminDashboardContactTableProps = {
  contacts: tContact[]
}

const AdminDashboardContactTable = memo(({ contacts }: tAdminDashboardContactTableProps) => {
  const [ page, setPage ] = useState<number>(0);
  const [ rowsPerPage, setRowsPerPage ] = useState<number>(5);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const displayedEntries = contacts.slice(startIndex, endIndex);

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
              <TableCell>E-Mail</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedEntries.map(entry => (
              <AdminDashboardContactTableRow
                key={entry._id}
                contact={entry}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <CustomTablePagination
        rowCount={contacts.length} 
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  )
})

export default AdminDashboardContactTable;