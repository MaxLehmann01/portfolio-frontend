import { createContext } from "react";
import { tProject } from "../../../../types/tProject";

type tAdminProjectTableContext = {
  setDialogEditState: (tech: tProject) => void,
  setDialogDeleteState: (tech: tProject) => void,
  searchTerm: string
}

const AdminProjectTableContext = createContext<tAdminProjectTableContext>({
  setDialogEditState: (_) => {},
  setDialogDeleteState: (_) => {},
  searchTerm: ''
})

export default AdminProjectTableContext;