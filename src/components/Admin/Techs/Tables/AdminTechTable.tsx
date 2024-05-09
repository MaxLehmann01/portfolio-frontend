import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { memo, useContext, useState } from "react";
import { tTech } from "../../../../types/tTech";
import CustomTablePagination from "../../../MUICustom/CustomTablePagination";
import AdminTechTableContext from "../Contexts/AdminTechTableContext";
import AdminTechTableRow from "./AdminTechTableRow";

type tAdminTechTableProps = {
  techs: tTech[]
}

const AdminTechTable = memo(({ techs }: tAdminTechTableProps) => {
  const { searchTerm } = useContext(AdminTechTableContext);

  const [ page, setPage ] = useState<number>(0);
  const [ rowsPerPage, setRowsPerPage ] = useState<number>(5);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const displayedEntries = techs.filter(tech => tech.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(startIndex, endIndex);

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
              <TableCell>URL</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="w-1" />
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedEntries.map(entry => (
              <AdminTechTableRow
                key={entry._id}
                tech={entry}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <CustomTablePagination
        rowCount={techs.length} 
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  )
})

export default AdminTechTable;