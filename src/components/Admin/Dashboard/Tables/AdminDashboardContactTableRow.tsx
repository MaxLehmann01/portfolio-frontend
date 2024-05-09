import { TableCell, TableRow } from "@mui/material";
import { tContact } from "../../../../types/tContact";

type tAdminDashboardContactTableRowProps = {
  contact: tContact
}

const AdminDashboardContactTableRow = ({ contact }: tAdminDashboardContactTableRowProps) => {
  return (
    <TableRow>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.subject}</TableCell>
      <TableCell>{contact.message}</TableCell>
      <TableCell>{contact.timestamp}</TableCell>
    </TableRow>
  )
}

export default AdminDashboardContactTableRow;