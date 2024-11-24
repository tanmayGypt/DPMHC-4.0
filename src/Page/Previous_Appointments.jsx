import { useEffect, useState } from "react";
import PrevApps from "../Page_Components/Appointments/Previous_Online_Appointments/PrevApps";
import { getAppointments } from "../../api";

function Previous_Appointments() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const resp = await getAppointments();
      setData(resp);
    }
    fetch();
  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PrevApps Previous_Appointments={data} />
    </div>
  );
}

export default Previous_Appointments;
