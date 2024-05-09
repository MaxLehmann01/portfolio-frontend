import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography, Zoom } from "@mui/material";
import { memo } from "react";
import { tProject } from "../../../../types/tProject";
import useTextForCurrentLanguage from "../../../../hooks/useTextForCurrentLanguage";

type tContentProjectSoftwareStackDialogProps = {
  open: boolean,
  onClose: () => void
  project: tProject | null
}

const ContentProjectSoftwareStackDialog = memo(({ open, onClose, project }: tContentProjectSoftwareStackDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Zoom}
      transitionDuration={200}
    >
      <DialogTitle variant="h5">{project?.name} - Software-Stack</DialogTitle>
      <Divider className="bg-white/75" />
      <DialogContent className="flex flex-wrap gap-4 justify-center">
        {project?.techs.map((tech, index) => (
          <div
            key={index}
            className="h-auto w-[90px] flex flex-col items-center gap-1 hover:scale-105 duration-200"
          >
            <a
              href={tech.url}
              target="_blank"
              children={(
                <img
                  src={`data:${tech.icon?.type};base64,${tech.icon?.base64}`}
                  alt={`${tech.name} - image`}
                  className="h-auto w-[50px] aspect-square"
                />
              )}
            />
            <Typography>{ tech.name }</Typography>
          </div>
        ))}
      </DialogContent>
      <Divider className="bg-white/75" />
      <DialogActions>
        <Button 
          size="small" 
          variant="text" 
          color="error" 
          onClick={onClose}
          children={useTextForCurrentLanguage([
            { lang: 'en', text: 'Close' },
            { lang: 'de', text: 'Schließen' }
          ])}
        />
      </DialogActions>
    </Dialog>
  )
})

export default ContentProjectSoftwareStackDialog;