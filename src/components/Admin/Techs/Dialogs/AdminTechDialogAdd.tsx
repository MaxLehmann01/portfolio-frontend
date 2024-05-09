import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, SelectChangeEvent, TextField, Typography, Zoom } from "@mui/material"
import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import { tTech } from "../../../../types/tTech";
import InputChangeHandler from "../../../../utils/InputChangeHandler";
import useAlert from "../../../../hooks/useAlert";
import { AxiosError } from "axios";
import API from "../../../../utils/API";

type tAdminTechDialogAddProps = {
  open: boolean,
  handleClose: () => void
}

const AdminTechDialogAdd = memo(({ open, handleClose }: tAdminTechDialogAddProps) => {
  const { setAlert } = useAlert();

  const [ tech, setTech ] = useState<tTech>({
    name: '',
    url: '',
    icon: {
      filename: '',
      base64: '',
      type: ''
    }
  });

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent | SelectChangeEvent<string[]>) => InputChangeHandler(setTech, event), []);

  const handleSave = useCallback(async () => {
    try {
      await API.post(`/techs`, tech, { withCredentials: true });
      handleClose();
      setAlert({ severity: 'success', children: "The tech has been added successfully."})
    } catch (err) {
      const error = err as AxiosError;

      if(error.response?.data) {
        const data = error.response.data as { err: string };
        setAlert({ severity: 'error', children: data.err });
      }
      else setAlert({ severity: 'error', children: "The tech could not be saved." });
    }
  }, [tech, handleClose, setAlert]);

  useEffect(() => {
    setTech({
      name: '',
      url: '',
      icon: {
        filename: '',
        base64: '',
        type: ''
      }
    });
  }, [open])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      TransitionComponent={Zoom} 
      transitionDuration={200}
    >
      <DialogTitle variant="h5">New Tech</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} className="flex flex-col gap-2">
            <Typography variant="subtitle2">Name</Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Enter Name"
              name="name"
              value={tech.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="flex flex-col gap-2">
            <Typography variant="subtitle2">URL</Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Enter URL"
              name="url"
              value={tech.url}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="flex flex-col gap-2">
            <Typography variant="subtitle2">Icon</Typography>
            <input
              type="file"
              name="icon"
              onChange={handleInputChange}
              className="hidden"
            />
            <Button
              color="primary"
              variant="contained"
              size="small"
              children={tech.icon ? tech.icon.filename : "Upload Icon"}
              onClick={() => document.getElementsByName('icon')[0].click()}
            />
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

export default AdminTechDialogAdd;