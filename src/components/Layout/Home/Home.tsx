import React from "react";
import { redGenesisTheme } from "@/styles/muiTheme";
import { ThemeProvider } from "@mui/material";
import SideMenu from "../../SideMenu";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={redGenesisTheme}>
      <div className="flex flex-row h-screen w-screen">
        <SideMenu />
        <main className="flex flex-col pr-20 pt-20 pl-16 w-screen">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Home;
