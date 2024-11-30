import { useEffect, useState } from "react";
import PrevApps from "../Page_Components/Appointments/Previous_Online_Appointments/PrevApps";
import { getAppointmentsByUserId } from "../../api";
import Cookies from "js-cookie";
function Previous_Appointments() {
  const [data, setData] = useState([]);
  const user = Cookies.get("user");
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      const resp = await getAppointmentsByUserId(user);
      setData(resp);
    }
    fetch();
  }, [])

  return (
    <div>
      <PrevApps Previous_Appointments={data} />
    </div>
  );
}

export default Previous_Appointments;
