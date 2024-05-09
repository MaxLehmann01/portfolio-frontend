import { createContext } from "react";

type tAdminProjectRepositoryTableContext = {
  handleAdd: () => void,
  handleDelete: (index: number) => void,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AdminProjectRepositoryTableContext = createContext<tAdminProjectRepositoryTableContext>({
  handleAdd: () => {},
  handleDelete: (_) => {},
  handleInputChange: (_) => {}
})

export default AdminProjectRepositoryTableContext;