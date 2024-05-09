import { TableCell, TableRow } from "@mui/material";
import { tContact } from "../../../../types/tContact";
import ConvertTimestampToDE from "../../../../utils/ConvertTimestampToDE";

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
      <TableCell>{ConvertTimestampToDE(contact.timestamp as string)}</TableCell>
    </TableRow>
  )
}

export default AdminDashboardContactTableRow;