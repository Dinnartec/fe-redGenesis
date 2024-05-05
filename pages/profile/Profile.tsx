import { selectUserInfo } from "@/slices/userInfoSlice";
import { selectUser } from "@/slices/userSlice";
import CustomButton from "@/src/components/CustomButton/CustomButton";
import Home from "@/src/components/Layout/Home";
import SettingsUser from "@/src/components/SettingsUser/SettingsUser";
import { useAppSelector } from "@/src/hooks/useReduxHooks";
import { urlImageCLoud } from "@/src/utils/utilsText";
import { Chip } from "@mui/material";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const user = useAppSelector(selectUser);
  const userInfo = useAppSelector(selectUserInfo);
  console.log(user);
  console.log("userInfo", userInfo)

  return (
    <Home>
      <h1 className="text-4xl font-bold text-secondary ">Mi cuenta</h1>
      <section className="w-full flex gap-14 justify-center items-center">
        <section className="flex flex-col bg-[#FCFCF] gap-10 pt-16 px-4 pb-12 shadow-custom-tooltip rounded-md min-w-[360px] h-auto items-center">
          <div className="flex flex-col gap-6">
            <Image
              src={`${urlImageCLoud}/images/userProfile.svg`}
              alt="logo"
              width={206}
              height={206}
              className="rounded-lg"
            />
            <h2 className="text-4xl font-bold text-center ">{user.name}</h2>
            <Chip
              label="Universidad de Pamplona"
              style={{
                backgroundColor: "rgba(159, 213, 209, 0.5)",
                color: "#157B74",
                borderRadius: "4px",
                boxShadow: "3px 3px 20px 0px rgba(0, 0, 0, 0.1)",
                fontSize: "12px",
                fontWeight: "500",
              }}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium ">Correo electronico</p>
              <p className=" text-sm font-medium ">{user.email}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium ">Carrera universitaria</p>
              <p className=" text-sm font-medium ">Ingenieria de sistemas</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium ">Semestre</p>
              <p className=" text-sm font-medium ">8vo</p>
            </div>
          </div>
          <CustomButton
            label="Cerrar sesion"
            onClick={() => console.log("Editar perfil")}
            className="w-44 h-11 rounded-md bg-secondary text-white font-semibold text-sm"
          />
        </section>
        <section className="flex flex-col bg-[#FCFCF] gap-10 pt-4 px-4 pb-12 shadow-custom-tooltip rounded-md w-[695px] max-2xl:w-full h-auto items-center">
          <SettingsUser/>
        </section>
      </section>
    </Home>
  );
};

export default Profile;
