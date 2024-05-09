import { createContext } from "react";
import { tTech } from "../../../../types/tTech";

type tAdminTechTableContext = {
  setDialogEditState: (tech: tTech) => void,
  setDialogDeleteState: (tech: tTech) => void,
  searchTerm: string
}

const AdminTechTableContext = createContext<tAdminTechTableContext>({
  setDialogEditState: (_) => {},
  setDialogDeleteState: (_) => {},
  searchTerm: ''
})

export default AdminTechTableContext;