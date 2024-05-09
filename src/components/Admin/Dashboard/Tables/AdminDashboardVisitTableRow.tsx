import { TableCell, TableRow } from "@mui/material";
import { tVisit } from "../../../../types/tVisit";

type tAdminDashboardVisitTableRowProps = {
  visit: tVisit
}

const AdminDashboardVisitTableRow = ({ visit }: tAdminDashboardVisitTableRowProps) => {
  return (
    <TableRow>
      <TableCell>{visit.ip}</TableCell>
      <TableCell>{visit.city}</TableCell>
      <TableCell>{visit.region}</TableCell>
      <TableCell>{visit.country}</TableCell>
      <TableCell>{visit.timezone}</TableCell>
      <TableCell>{visit.timestamp}</TableCell>
    </TableRow>
  )
}

export default AdminDashboardVisitTableRow;