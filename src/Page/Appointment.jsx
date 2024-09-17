// import React from "react";
import { useEffect } from "react";
import Appform from "../Page_Components/Appointments/Book_Appointment/Appform";

function Appointment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Appform />
    </div>
  );
}

export default Appointment;
