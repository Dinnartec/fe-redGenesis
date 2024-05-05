import { Tab, Tabs } from "@mui/material";
import React from "react";

interface TabsLabelProps {
  label: string;
  index: number;
}

type Props = {
  valueSteps: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  dataTabs: [] | TabsLabelProps[];
};

const CustomTabHeader = ({ valueSteps, onChange, dataTabs }: Props) => {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <header className="w-full h-auto border-b border-grayLight mb-8 ">
      <Tabs
        value={valueSteps}
        onChange={onChange}
        aria-label="basic tabs example"
      >
        {dataTabs.map((tab: TabsLabelProps) => {
          const isLastTab = tab.index === dataTabs.length - 1;
          
          return (
            <Tab
              key={tab.index}
              label={tab.label}
              {...a11yProps(tab.index)}
              sx={{
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: "600",
              }}
              disabled={isLastTab}
            />
          );
        })}
      </Tabs>
    </header>
  );
};

export default CustomTabHeader;
