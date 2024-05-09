import { Delete, Edit } from "@mui/icons-material";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import { useContext } from "react";
import { tProject } from "../../../../types/tProject";
import AdminProjectTableContext from "../Contexts/AdminProjectTableContext";
import ConvertTimestampToDE from "../../../../utils/ConvertTimestampToDE";

type tAdminProjectTableRowProps = {
  project: tProject
}

const AdminProjectTableRow = ({ project }: tAdminProjectTableRowProps) => {
  const { setDialogEditState, setDialogDeleteState } = useContext(AdminProjectTableContext)

  const handleSetDialogEdit = () => setDialogEditState(project);
  const handleSetDialogDelete = () => setDialogDeleteState(project);

  return (
    <TableRow>
      <TableCell>{project.name}</TableCell>
      <TableCell>{project.version}</TableCell>
      <TableCell>{ConvertTimestampToDE(project.timestamp as string)}</TableCell>
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

export default AdminProjectTableRow;