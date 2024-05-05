import { TabPanelProps } from "@/types/components.type";


const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="w-full h-[509px]"
    >
      {value === index && <>{children}</>}
    </section>
  );
}

export default CustomTabPanel;
