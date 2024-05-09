import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { memo, useState } from "react";
import { tVisit } from "../../../../types/tVisit";
import CustomTablePagination from "../../../MUICustom/CustomTablePagination";
import AdminDashboardVisitTableRow from "./AdminDashboardVisitTableRow";

type tAdminDashboardVisitTableProps = {
  visits: tVisit[]
}

const AdminDashboardVisitTable = memo(({ visits }: tAdminDashboardVisitTableProps) => {
  const [ page, setPage ] = useState<number>(0);
  const [ rowsPerPage, setRowsPerPage ] = useState<number>(5);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const displayedEntries = visits.slice(startIndex, endIndex);

  return (
    <>
      <TableContainer 
        className="h-[calc(100%-53px)] overflow-y-scroll" 
        component={Paper}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>IP</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Timezone</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedEntries.map(entry => (
              <AdminDashboardVisitTableRow
                key={entry._id}
                visit={entry}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <CustomTablePagination
        rowCount={visits.length} 
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  )
})

export default AdminDashboardVisitTable;