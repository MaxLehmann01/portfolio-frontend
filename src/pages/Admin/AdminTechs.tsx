import { Add, Search } from "@mui/icons-material";
import { Button, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AdminTechTableContext from "../../components/Admin/Techs/Contexts/AdminTechTableContext";
import { tTech } from "../../types/tTech";
import useAlert from "../../hooks/useAlert";
import { AxiosError } from "axios";
import API from "../../utils/API";
import AdminTechTable from "../../components/Admin/Techs/Tables/AdminTechTable";
import AdminTechDialogAdd from "../../components/Admin/Techs/Dialogs/AdminTechDialogAdd";
import AdminTechDialogDelete from "../../components/Admin/Techs/Dialogs/AdminTechDialogDelete";
import AdminTechDialogEdit from "../../components/Admin/Techs/Dialogs/AdminTechDialogEdit";

const AdminTechs = () => {
  const { setAlert } = useAlert();
  const refetchTimeoutRef = useRef<number | null>(null);

  const [ techs, setTechs ] = useState<tTech[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ dialogAdd, setDialogAdd ] = useState<boolean>(false);
  const [ dialogEdit, setDialogEdit ] = useState<tTech | null>(null);
  const [ dialogDelete, setDialogDelete ] = useState<tTech | null>(null);

  const setDialogEditState = useCallback((tech: tTech | null) => setDialogEdit(tech), []);
  const setDialogDeleteState = useCallback((tech: tTech | null) => setDialogDelete(tech), []);

  const fetchTechs = useCallback(async () => {
    const loadingTimeout = setTimeout(() => setLoading(true), 200); 

    try {
      const response = await API.get('/techs', { withCredentials: true });
      setTechs(response.data);
    } catch (err) {
      const error = err as AxiosError;
      
      if(error.response?.data && typeof error.response?.data === 'object') {
        const data = error.response.data as { err: string };
        setAlert({ severity: "error", children: data.err });
      }
      else setAlert({ severity: "error", children: "An error occured while loading the techs" });

      refetchTimeoutRef.current = setTimeout(fetchTechs, 5000)
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
  }), [setDialogEditState, setDialogDeleteState, searchTerm])

  const handleCloseDialogAdd = () => {
    setDialogAdd(false);
    fetchTechs();
  }

  const handleCloseDialogEdit = () => {
    setDialogEdit(null);
    fetchTechs();
  }

  const handleCloseDialogDelete = () => {
    setDialogDelete(null);
    fetchTechs();
  }

  useEffect(() => { 
    fetchTechs();

    return () => {
      if(refetchTimeoutRef.current) clearTimeout(refetchTimeoutRef.current);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTechs])

  if(loading) return (
    <div className="h-full w-full flex items-center justify-center">
      <CircularProgress size={50} />
    </div>
  )

  return (
    <AdminTechTableContext.Provider value={contextValue}>
      <div className="h-full w-full flex flex-col">
        <div className="h-[52px] w-full flex items-center justify-between">
          <Typography variant="h4">Techs</Typography>
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
          <AdminTechTable
            techs={techs}
          />
          <AdminTechDialogAdd
            open={dialogAdd}
            handleClose={handleCloseDialogAdd}
          />
          <AdminTechDialogEdit
            open={Boolean(dialogEdit)}
            handleClose={handleCloseDialogEdit}
            tech={dialogEdit}
          />
          <AdminTechDialogDelete
            open={Boolean(dialogDelete)}
            handleClose={handleCloseDialogDelete}
            tech={dialogDelete}
          />
        </div>
      </div>
    </AdminTechTableContext.Provider>
  )
}

export default AdminTechs;