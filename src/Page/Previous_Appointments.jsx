import { useEffect } from "react";
import PrevApps from "../Page_Components/Appointments/Previous_Online_Appointments/PrevApps";

function Previous_Appointments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PrevApps />
    </div>
  );
}

export default Previous_Appointments;
