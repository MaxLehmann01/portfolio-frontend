import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography, Zoom } from "@mui/material";
import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import useAlert from "../../../../hooks/useAlert";
import { tProject } from "../../../../types/tProject";
import { tTech } from "../../../../types/tTech";
import API from "../../../../utils/API";
import InputChangeHandler from "../../../../utils/InputChangeHandler";
import AdminProjectRepositoryTable from "../Tables/AdminProjectRepositoryTable";
import AdminProjectRepositoryTableContext from "../Contexts/AdminProjectRepositoryTableContext";
import AdminProjectURLTableContext from "../Contexts/AdminProjectURLTableContext";
import AdminProjectURLTable from "../Tables/AdminProjectURLTable";
import { AxiosError } from "axios";

type tAdminProjectDialogAddProps = {
  open: boolean,
  handleClose: () => void
}

const AdminProjectDialogAdd = memo(({ open, handleClose }: tAdminProjectDialogAddProps) => {
  const { setAlert } = useAlert();

  const [ project, setProject ] = useState<tProject>({
    name: '',
    descriptions: {
      en: '',
      de: ''
    },
    repositories: [],
    version: '',
    urls: [],
    techs: []
  });

  const [ techs, setTechs ] = useState<tTech[]>([]);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent | SelectChangeEvent<string[]>) => InputChangeHandler(setProject, event), []);

  const fetchTechs = useCallback(async () => {
    try {
      const response = await API.get('/techs', { withCredentials: true });
      setTechs(response.data);
    } catch (err) {
      console.log(err);
     
    }
  }, []);

  const handleSave = useCallback(async () => {
    console.log(project);
    
    try {
      await API.post(`/projects`, project, { withCredentials: true });
      handleClose();
      setAlert({ severity: 'success', children: "The project has been added successfully."})
    } catch (err) {
      const error = err as AxiosError;

      if(error.response?.data) {
        const data = error.response.data as { err: string };
        setAlert({ severity: 'error', children: data.err });
      }
      else setAlert({ severity: 'error', children: "The project could not be saved." });
    }
  }, [project, handleClose, setAlert]);

  const repositoryContext = {
    handleAdd: () => {
      const repositories = project.repositories;
      repositories.push({ name: '', url: '' });
      setProject({ ...project, repositories });
    },
    handleDelete: (index: number) => {
      const repositories = project.repositories;
      repositories.splice(index, 1);
      setProject({ ...project, repositories });
    },
    handleInputChange
  }

  const urlContext = {
    handleAdd: () => {
      const urls = project.urls;
      urls.push({ name: '', url: '' });
      setProject({ ...project, urls });
    },
    handleDelete: (index: number) => {
      const urls = project.urls;
      urls.splice(index, 1);
      setProject({ ...project, urls });
    },
    handleInputChange
  }

  useEffect(() => {
    if(open) fetchTechs();
    setProject({
      name: '',
      descriptions: {
        en: '',
        de: ''
      },
      repositories: [],
      version: '',
      urls: [],
      techs: []
    });
  }, [open, fetchTechs])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      TransitionComponent={Zoom} 
      transitionDuration={200}
    >
      <DialogTitle variant="h5">New Project</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={6} container spacing={3}>
            <Grid item xs={12} className="flex flex-col gap-2">
              <Typography variant="subtitle2">Name</Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter Name"
                name="name"
                value={project.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} className="flex flex-col gap-2">
              <Typography variant="subtitle2">Version</Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter Version"
                name="version"
                value={project.version}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} className="flex flex-col gap-2">
              <Typography variant="subtitle2">Techs</Typography>
              <FormControl>
                <Select<string[]>
                  fullWidth
                  size="small"
                  name="techs"
                  value={project.techs.map(tech => typeof tech === 'string' ? tech : (tech._id || ''))}
                  multiple
                  onChange={handleInputChange}
                >
                  {techs.map(tech => (
                    <MenuItem 
                      key={tech._id}
                      value={tech._id}
                      children={tech.name}
                    />
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className="flex flex-col gap-2">
              <Typography variant="subtitle2">Banner</Typography>
              <input
                type="file"
                name="banner"
                onChange={handleInputChange}
                className="hidden"
              />
              <Button
                color="primary"
                variant="contained"
                size="small"
                children={project.banner ? project.banner.filename : "Upload Banner"}
                onClick={() => document.getElementsByName('banner')[0].click()}
              />
            </Grid>
            <Grid item xs={12} className="flex flex-col gap-2">
              <Typography variant="subtitle2">Description - EN</Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter Description - EN"
                name="descriptions.en"
                value={project.descriptions.en}
                onChange={handleInputChange}
                multiline
                rows={5}
              />
            </Grid>
            <Grid item xs={12} className="flex flex-col gap-2">
              <Typography variant="subtitle2">Description - DE</Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter Description - DE"
                name="descriptions.de"
                value={project.descriptions.de}
                onChange={handleInputChange}
                multiline
                rows={5}
              />
            </Grid>
          </Grid>
          <Grid item xs={6} container spacing={3}>
            <Grid item xs={12} className="h-1/2 flex flex-col gap-2">
              <Typography variant="subtitle2">Repositories</Typography>
              <AdminProjectRepositoryTableContext.Provider value={repositoryContext}>
                <AdminProjectRepositoryTable
                  repositories={project.repositories}
                  handleInputChange={handleInputChange}
                />
              </AdminProjectRepositoryTableContext.Provider>
            </Grid>
            <Grid item xs={12} className="h-1/2 flex flex-col gap-2">
              <Typography variant="subtitle2">URLs</Typography>
              <AdminProjectURLTableContext.Provider value={urlContext}>
                <AdminProjectURLTable
                  urls={project.urls}
                  handleInputChange={handleInputChange}
                />
              </AdminProjectURLTableContext.Provider>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button 
          size="small" 
          variant="text" 
          color="error" 
          onClick={handleClose}
          children="Cancel"
          />
        <Button 
          size="small" 
          variant="contained" 
          color="primary" 
          onClick={handleSave}
          children="Save"
        />
      </DialogActions>
    </Dialog>
  )
})

export default AdminProjectDialogAdd;