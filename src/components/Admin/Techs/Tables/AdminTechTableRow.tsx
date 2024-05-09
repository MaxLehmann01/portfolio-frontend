import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import { tTech } from "../../../../types/tTech";
import { Delete, Edit } from "@mui/icons-material";
import { useContext } from "react";
import AdminTechTableContext from "../Contexts/AdminTechTableContext";

type tAdminTechTableRowProps = {
  tech: tTech
}

const AdminTechTableRow = ({ tech }: tAdminTechTableRowProps) => {
  const { setDialogEditState, setDialogDeleteState } = useContext(AdminTechTableContext)

  const handleSetDialogEdit = () => setDialogEditState(tech);
  const handleSetDialogDelete = () => setDialogDeleteState(tech);

  return (
    <TableRow>
      <TableCell>{tech.name}</TableCell>
      <TableCell>{tech.url}</TableCell>
      <TableCell>
        <img 
          src={`data:${tech.icon?.type};base64,${tech.icon?.base64}`}
          className="h-auto w-[30px] aspect-square"
        />
      </TableCell>
      <TableCell className="flex gap-4">
        <Tooltip 
          title="Edit"
          children={(
            <IconButton
              size="small"
              onClick={handleSetDialogEdit}
              children={<Edit fontSize="small" />}
            />
          )}
        />
        <Tooltip 
          title="Delete"
          children={(
            <IconButton
              size="small"
              onClick={handleSetDialogDelete}
              children={<Delete fontSize="small" />}
            />
          )}
        />
      </TableCell>
    </TableRow>
  )
}

export default AdminTechTableRow;