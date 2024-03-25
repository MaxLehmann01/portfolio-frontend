import { useEffect, useState } from "react";
import { tProject } from "../../types/tProject";
import { AxiosError } from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import useAlert from "../../hooks/useAlert";
import API from "../../utils/API";

const Projects = () => {
  const { language } = useLocalStorage();
  const { setAlert } = useAlert();

  const [ projects, setProjects ] = useState<tProject[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await API.get('/projects');
      setProjects(response.data as tProject[])
    } catch (err) {
      const error = err as AxiosError;
      setAlert({ severity: 'error', children: `${language === 'de' ? 'Die Projekte konnten nicht geladen werden!' : 'The Projects could not be loaded!'} - Status ${error.response?.status}` })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchProjects(); }, [])

  return (
    <div>
      Projects
      { projects.map((project: tProject, index: number) => (
        <div key={index}>{JSON.stringify(project)}</div>
      ))}
    </div>
  )
}

export default Projects;