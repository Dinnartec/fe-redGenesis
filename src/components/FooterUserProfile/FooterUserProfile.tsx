import { urlImageCLoud } from "@/src/utils/utilsText";
import Image from "next/image";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuActions from "../MenuActions/MenuActions";
import { signOut } from "next-auth/react";

const FooterUserProfile = () => {


  const optionsListData = [
    {
      id: 1,
      name: "Perfil de usuario",
      icon: <AccountCircleIcon />,
      handlerOption: () => console.log("Perfil de usuario"),
    },
    {
      id: 2,
      name: "Cerrar session",
      icon: <LogoutIcon />,
      handlerOption: () => signOut(),
    },
  ];

  return (
    <footer className="flex flex-row justify-between items-center w-full h-16 py-3 px-4 bg-grayLight">
      <Image
        src={`${urlImageCLoud}/images/userProfile.svg`}
        alt="logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold">John Doe</p>
        <p className="text-xs font-semibold">johndoe@test.com</p>
      </div>

      <MenuActions options={optionsListData} />
    </footer>
  );
};

export default FooterUserProfile;
