import { ExpandLess, ExpandMore, List } from "@mui/icons-material";
import { Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import GitHubIcon from "../../assets/icons/github.png";
import WebsiteIcon from "../../assets/icons/website.png";
import ContentProjectSoftwareStackDialog from "../../components/Content/Projects/Dialogs/ContentProjectSoftwareStackDialog";
import Card from "../../components/Miscellaneous/Card";
import ImageButton from "../../components/Miscellaneous/ImageButton";
import useAlert from "../../hooks/useAlert";
import useLocalStorage from "../../hooks/useLocalStorage";
import { tProject } from "../../types/tProject";
import API from "../../utils/API";

const ContentProjects = () => {
  const { language } = useLocalStorage();
  const { setAlert } = useAlert();
  const retryIntervalRef = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [ projects, setProjects ] = useState<tProject[]>([]);
  const [ dialogProjectSoftwareStack, setDialogProjectSoftwareStack ] = useState<tProject | null>(null);

  const [showTopArrow, setShowTopArrow] = useState<boolean>(false);
  const [showBottomArrow, setShowBottomArrow] = useState<boolean>(false);

  const handleOpenDialogProjectSoftwareStack = useCallback((project: tProject) => setDialogProjectSoftwareStack(project), []);

  const fetchProjects = async () => {
    try {
      const response = await API.get('/content/projects');
      setProjects(response.data as tProject[]);

      if (retryIntervalRef.current) {
        clearInterval(retryIntervalRef.current);
        retryIntervalRef.current = null;
      }
    } catch (err) {
      const error = err as AxiosError;
      setAlert({ severity: 'error', children: `${language === 'de' ? 'Die Projekte konnten nicht geladen werden!' : 'The Projects could not be loaded!'} - Status: ${error.response?.status}` })
    }
  }

  const translatedDescriptions = projects.map(project => ({
    en: project.descriptions.en,
    de: project.descriptions.de,
  }));

  const handleScrollToTop = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToBottom = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => { 
    fetchProjects();

    retryIntervalRef.current = setInterval(() => {
      fetchProjects();
    }, 5000);
    
    return () => {
      if(retryIntervalRef.current) clearInterval(retryIntervalRef.current)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowBottomArrow(container.scrollHeight > container.clientHeight);
    }
  }, [projects]);

   useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      setShowBottomArrow(scrollTop === 0);
      setShowTopArrow(scrollTop + clientHeight === scrollHeight);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="h-full w-full flex items-center justify-center relative">
        {showTopArrow && (
          <IconButton
            className="absolute left-1/2 top-0 translate-x-[-50%] text-white"
            size="small"
            children={<ExpandLess fontSize="large" />}
            onClick={handleScrollToTop}
          />
        )}
        {showBottomArrow && (
          <IconButton
            className="absolute left-1/2 bottom-0 translate-x-[-50%] text-white"
            size="small"
            children={<ExpandMore fontSize="large" />}
            onClick={handleScrollToBottom}
          />
        )}
        <div className="h-full w-full flex justify-center flex-wrap lg:gap-20 max-lg:gap-8 overflow-y-auto lg:p-12 max-lg:p-[10%]" ref={scrollContainerRef}>
          {projects.map((project, index) => (
            <Card
              key={index}
              className="min-h-full w-1/4 min-w-[300px] max-w-[400px] max-lg:w-full"
            >
              <img 
                className="h-auto w-full aspect-video object-cover rounded-md shadow-md bg-purple-800"
                src={`data:${project.banner?.type};base64,${project.banner?.base64}`}
              />
              <Divider className="bg-white/75" />
              <div className="flex flex-col flex-1 gap-3">
                <div className="flex items-center justify-between">
                  <Typography 
                    variant="h4" 
                    fontWeight={200}
                    children={project.name}
                  />
                  <div className="flex items-center gap-2">
                    <Typography 
                      variant="h5" 
                      fontWeight={200}
                      children={`v${project.version}`}
                    />
                    <Tooltip title="Software Stack">
                      <IconButton
                        size="small"
                        className="text-white"
                        children={<List color="inherit" />}
                        onClick={() => handleOpenDialogProjectSoftwareStack(project)}
                      />
                    </Tooltip>
                  </div>
                </div>
                <div className="flex-1 overflow-y-scroll">
                  <Typography 
                    variant="body1"
                    fontWeight={200}
                    children={translatedDescriptions[index][language]}
                  />
                </div>
              </div>
              {(project.repositories.length > 0 || project.urls.length > 0) && (
                <>
                  <Divider className="bg-white/75" />
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      {project.repositories.map((repository, index) => (
                        <ImageButton
                          key={index}
                          href={repository.url}
                          image={GitHubIcon} 
                          title={repository.name}
                          className="w-[36px]"
                          tooltip
                        />
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.urls.map((url, index) => (
                        <ImageButton
                          key={index}
                          href={url.url}
                          image={WebsiteIcon} 
                          title={url.name}
                          className="w-[36px]"
                          tooltip
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
      <ContentProjectSoftwareStackDialog
        open={Boolean(dialogProjectSoftwareStack)}
        onClose={() => setDialogProjectSoftwareStack(null)}
        project={dialogProjectSoftwareStack}
      />
    </>
  )
}

export default ContentProjects;