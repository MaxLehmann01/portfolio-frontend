import { Delete } from "@mui/icons-material";
import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import { memo, useContext } from "react";
import AdminProjectURLTableContext from "../Contexts/AdminProjectURLTableContext";

type tAdminProjectURLTableRowProps = {
  index: number,
  url: {
    name: string,
    url: string
  },
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdminProjectURLTableRow = memo(({ index, url, handleInputChange }: tAdminProjectURLTableRowProps) => {
  const { handleDelete } = useContext(AdminProjectURLTableContext);

  return (
    <TableRow>
      <TableCell>
        <TextField
          size="small"
          value={url.name}
          name={`urls[${index}].name`}
          onChange={handleInputChange}
        />
      </TableCell>
      <TableCell> 
        <TextField
          size="small"
          value={url.url}
          name={`urls[${index}].url`}
          onChange={handleInputChange}
        />
        </TableCell>
      <TableCell>
        <IconButton
          size="small"
          children={<Delete fontSize="small" />}
          onClick={() => handleDelete(index)}
        />
      </TableCell>
    </TableRow>
  )
})

export default AdminProjectURLTableRow;