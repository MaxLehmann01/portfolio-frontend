import { useCallback, useEffect, useRef, useState } from "react";
import useAlert from "../../hooks/useAlert";
import { tVisit } from "../../types/tVisit";
import { tContact } from "../../types/tContact";
import { AxiosError } from "axios";
import API from "../../utils/API";
import { CircularProgress, Typography } from "@mui/material";
import AdminDashboardContactTable from "../../components/Admin/Dashboard/Tables/AdminDashboardContactTable";
import AdminDashboardVisitTable from "../../components/Admin/Dashboard/Tables/AdminDashboardVisitTable";

const AdminDashboard = () => {
  const { setAlert } = useAlert();
  const refetchTimeoutRef = useRef<number | null>(null);

  const [ visits, setVisits ] = useState<tVisit[]>([]);
  const [ contacts, setContacts ] = useState<tContact[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);

  const fetchVisits = useCallback(async () => {
    const loadingTimeout = setTimeout(() => setLoading(true), 200); 

    try {
      const response = await API.get('/visits?sort=timestamp&sort-direction=desc', { withCredentials: true });
      setVisits(response.data);
    } catch (err) {
      const error = err as AxiosError;
      
      if(error.response?.data && typeof error.response?.data === 'object') {
        const data = error.response.data as { err: string };
        setAlert({ severity: "error", children: data.err });
      }
      else setAlert({ severity: "error", children: "An error occured while loading visits" });

      refetchTimeoutRef.current = setTimeout(fetchVisits, 5000)
    }
    finally {
      clearTimeout(loadingTimeout);
      setLoading(false);
    }
  }, [setAlert])

  const fetchContacts = useCallback(async () => {
    const loadingTimeout = setTimeout(() => setLoading(true), 200); 

    try {
      const response = await API.get('/contacts?sort=timestamp&sort-direction=desc', { withCredentials: true });
      setContacts(response.data);
    } catch (err) {
      const error = err as AxiosError;
      
      if(error.response?.data && typeof error.response?.data === 'object') {
        const data = error.response.data as { err: string };
        setAlert({ severity: "error", children: data.err });
      }
      else setAlert({ severity: "error", children: "An error occured while loading contacts" });

      refetchTimeoutRef.current = setTimeout(fetchContacts, 5000)
    }
    finally {
      clearTimeout(loadingTimeout);
      setLoading(false);
    }
  }, [setAlert])

  useEffect(() => { 
    fetchVisits();
    fetchContacts();

    return () => {
      if(refetchTimeoutRef.current) clearTimeout(refetchTimeoutRef.current);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchVisits, fetchContacts])

  if(loading) return (
    <div className="h-full w-full flex items-center justify-center">
      <CircularProgress size={50} />
    </div>
  )
  
  return (
    <div className="h-full w-full flex gap-2">
      <div className="h-full w-1/2 flex flex-col">
        <div className="h-[52px] w-full flex items-center justify-between">
          <Typography variant="h4">Visits</Typography>
        </div>
        <div className="h-[calc(100%-53px)] w-full">
          <AdminDashboardVisitTable 
            visits={visits} 
          />
        </div>
      </div>
      <div className="h-full w-1/2 flex flex-col">
        <div className="h-[52px] w-full flex items-center justify-between">
          <Typography variant="h4">Contacts</Typography>
        </div>
        <div className="h-[calc(100%-53px)] w-full">
          <AdminDashboardContactTable 
            contacts={contacts} 
          />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;