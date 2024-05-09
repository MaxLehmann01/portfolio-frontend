import { Delete } from "@mui/icons-material";
import { Avatar, Button, Dialog, DialogActions, DialogContent, Divider, Typography, Zoom } from "@mui/material";
import { AxiosError } from "axios";
import { memo, useCallback } from "react";
import useAlert from "../../../../hooks/useAlert";
import { tProject } from "../../../../types/tProject";
import API from "../../../../utils/API";

type tAdminProjectDialogDeleteProps = {
  open: boolean,
  handleClose: () => void,
  project: tProject | null
}

const AdminProjectDialogDelete = memo(({ open, handleClose, project }: tAdminProjectDialogDeleteProps) => {
  const { setAlert } = useAlert();

  const handleSave = useCallback(async () => {
    try {
      await API.delete(`/projects/${project?._id}`, { withCredentials: true });
      handleClose();
      setAlert({ severity: 'success', children: "The project has been deleted successfully."})
    } catch (err) {
      const error = err as AxiosError;

      if(error.response?.data) {
        const data = error.response.data as { err: string };
        setAlert({ severity: 'error', children: data.err });
      }
      else setAlert({ severity: 'error', children: "The project could not be saved." });
    }
  }, [project, handleClose, setAlert]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      TransitionComponent={Zoom} 
      transitionDuration={200}
    >
      <DialogContent>
        <div className="flex flex-col items-center gap-2 text-center">
          <Avatar 
            className="h-[72px] w-[72px] mb-[7px]" 
            sx={{ color: '#ff4d4f', bgcolor: '#fff1f0'}}
            children={<Delete fontSize="large" />}
          />
          <Typography gutterBottom variant="h6">Delete?</Typography>
        </div>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button 
          size="small" 
          variant="text" 
          color="secondary" 
          onClick={handleClose}
          children="Cancel"
          />
        <Button 
          size="small" 
          variant="contained" 
          color="error" 
          onClick={handleSave}
          children="Delete"
        />
      </DialogActions>
    </Dialog>
  )
})

export default AdminProjectDialogDelete;