import { TablePagination } from "@mui/material";

type tCustomTablePaginationProps = {
  rowCount: number,
  page: number,
  setPage: (page: number) => void,
  rowsPerPage: number,
  setRowsPerPage: (rowsPerPage: number) => void
}

const CustomTablePagination = ({ rowCount, page, setPage, rowsPerPage, setRowsPerPage }: tCustomTablePaginationProps) => {
  
  const rowsPerPageOptions = ([ 5, 10, 25, 50, 100 ])

  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={rowCount}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={(event, newPage) => { event; setPage(newPage); }}
      onRowsPerPageChange={(event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      }}
    />

  )
}

export default CustomTablePagination;