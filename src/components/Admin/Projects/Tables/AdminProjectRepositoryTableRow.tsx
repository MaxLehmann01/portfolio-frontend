import { Delete } from "@mui/icons-material";
import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import { memo, useContext } from "react";
import AdminProjectRepositoryTableContext from "../Contexts/AdminProjectRepositoryTableContext";

type tAdminProjectRepositoryTableRowProps = {
  index: number,
  repository: {
    name: string,
    url: string
  },
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdminProjectRepositoryTableRow = memo(({ index, repository, handleInputChange }: tAdminProjectRepositoryTableRowProps) => {
  const { handleDelete } = useContext(AdminProjectRepositoryTableContext);

  return (
    <TableRow>
      <TableCell>
        <TextField
          size="small"
          value={repository.name}
          name={`repositories[${index}].name`}
          onChange={handleInputChange}
        />
      </TableCell>
      <TableCell> 
        <TextField
          size="small"
          value={repository.url}
          name={`repositories[${index}].url`}
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

export default AdminProjectRepositoryTableRow;