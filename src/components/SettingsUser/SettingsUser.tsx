import React, { useState } from "react";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel";
import CustomTabHeader from "../CustomTabHeader/CustomTabHeader";
import UpdateInfoUser from "@/src/modules/SettingsUser/UpdateInfoUser/UpdateInfoUser";
import UpdateCredentialsUser from "@/src/modules/SettingsUser/UpdateCredentialsUser";

const SettingsUser = () => {
  const [valueSteps, setValueSteps] = useState<number>(0);
  
  const dataTabs = [
    { label: "General", index: 0 },
    { label: "Seguridad", index: 1 },
    { label: "Notificaciones", index: 2 },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueSteps(newValue);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <CustomTabHeader
        valueSteps={valueSteps}
        onChange={handleChange}
        dataTabs={dataTabs}
      />
      <CustomTabPanel value={valueSteps} index={0}>
        <UpdateInfoUser/>
      </CustomTabPanel>
      <CustomTabPanel value={valueSteps} index={1}>
        <UpdateCredentialsUser/>
      </CustomTabPanel>
      <CustomTabPanel value={valueSteps} index={2}>
        Item Three
      </CustomTabPanel>
    </div>
  );
};

export default SettingsUser;
