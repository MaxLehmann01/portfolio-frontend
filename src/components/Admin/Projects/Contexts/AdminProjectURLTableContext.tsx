import { createContext } from "react";

type tAdminProjectURLTableContext = {
  handleAdd: () => void,
  handleDelete: (index: number) => void,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdminProjectURLTableContext = createContext<tAdminProjectURLTableContext>({
  handleAdd: () => {},
  handleDelete: (_) => {},
  handleInputChange: (_) => {}
})

export default AdminProjectURLTableContext;