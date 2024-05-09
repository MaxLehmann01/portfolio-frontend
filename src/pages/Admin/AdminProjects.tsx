import { Add, Search } from "@mui/icons-material";
import { Button, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AdminProjectTableContext from "../../components/Admin/Projects/Contexts/AdminProjectTableContext";
import { tProject } from "../../types/tProject";
import useAlert from "../../hooks/useAlert";
import { AxiosError } from "axios";
import API from "../../utils/API";
import AdminProjectTable from "../../components/Admin/Projects/Tables/AdminProjectTable";
import AdminProjectDialogAdd from "../../components/Admin/Projects/Dialogs/AdminProjectDialogAdd";
import AdminProjectDialogDelete from "../../components/Admin/Projects/Dialogs/AdminProjectDialogDelete";
import AdminProjectDialogEdit from "../../components/Admin/Projects/Dialogs/AdminProjectDialogEdit";

const AdminProjects = () => {
  const { setAlert } = useAlert();
  const refetchTimeoutRef = useRef<number | null>(null);

  const [ projects, setProjects ] = useState<tProject[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ dialogAdd, setDialogAdd ] = useState<boolean>(false);
  const [ dialogEdit, setDialogEdit ] = useState<tProject | null>(null);
  const [ dialogDelete, setDialogDelete ] = useState<tProject | null>(null);

  const setDialogEditState = useCallback((project: tProject | null) => setDialogEdit(project), []);
  const setDialogDeleteState = useCallback((project: tProject | null) => setDialogDelete(project), []);

  const fetchProjects = useCallback(async () => {
    const loadingTimeout = setTimeout(() => setLoading(true), 200); 

    try {
      const response = await API.get('/projects', { withCredentials: true });
      setProjects(response.data);
    } catch (err) {
      const error = err as AxiosError;
      
      if(error.response?.data && typeof error.response?.data === 'object') {
        const data = error.response.data as { err: string };
        setAlert({ severity: "error", children: data.err });
      }
      else setAlert({ severity: "error", children: "An error occured while loading the projects" });

      refetchTimeoutRef.current = setTimeout(fetchProjects, 5000)
    }
    finally {
      clearTimeout(loadingTimeout);
      setLoading(false);
    }
  }, [setAlert]);

  const contextValue = useMemo(() => ({
    setDialogEditState,
    setDialogDeleteState,
    searchTerm
  }), [setDialogEditState, setDialogDeleteState, searchTerm]);

  const handleCloseDialogAdd = () => {
    setDialogAdd(false);
    fetchProjects();
  }

  const handleCloseDialogEdit = () => {
    setDialogEdit(null);
    fetchProjects();
  }

  const handleCloseDialogDelete = () => {
    setDialogDelete(null);
    fetchProjects();
  }

  useEffect(() => { 
    fetchProjects();

    return () => {
      if(refetchTimeoutRef.current) clearTimeout(refetchTimeoutRef.current);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProjects])

  if(loading) return (
    <div className="h-full w-full flex items-center justify-center">
      <CircularProgress size={50} />
    </div>
  )

  return (
    <AdminProjectTableContext.Provider value={contextValue}>
      <div className="h-full w-full flex flex-col">
        <div className="h-[52px] w-full flex items-center justify-between">
          <Typography variant="h4">Projects</Typography>
          <div className="flex gap-2">
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    children={<Search fontSize="small" />}  
                  />
                )
              }}
              onChange={(event) => setSearchTerm(event.currentTarget.value)}
            />
            <Button
              variant="contained"
              className="w-[100px]"
              children={<Add fontSize="small" className="text-white" />}
              onClick={() => setDialogAdd(true)}
            />
          </div>
        </div>
        <div className="h-[calc(100%-53px)] w-full">
          <AdminProjectTable
            projects={projects}
          />
          <AdminProjectDialogAdd
            open={dialogAdd}
            handleClose={handleCloseDialogAdd}
          />
          <AdminProjectDialogEdit
            open={Boolean(dialogEdit)}
            handleClose={handleCloseDialogEdit}
            project={dialogEdit}
          />
          <AdminProjectDialogDelete
            open={Boolean(dialogDelete)}
            handleClose={handleCloseDialogDelete}
            project={dialogDelete}
          />
        </div>
      </div>
    </AdminProjectTableContext.Provider>
  )
}

export default AdminProjects;