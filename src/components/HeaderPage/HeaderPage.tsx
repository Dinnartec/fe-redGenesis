import React from "react";

import { useAppSelector } from "@/src/hooks/useReduxHooks";
import { selectUser } from "@/slices/userSlice";
import { HeaderPageProps } from "@/types/components.type";

const HeaderPage = ({ titleHeader, breadcrumb }: HeaderPageProps) => {
  const user = useAppSelector(selectUser);
  const date = new Date();
  const nameSplit = user.name.split(" ");
  const formatDate = date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-row w-full h-auto justify-between items-center">
      <div className="flex flex-col">
        {
          breadcrumb && (
            <p className="text-sm font-normal text-gray mb-2">{breadcrumb}</p>
          )
        } 
        <h1 className="text-4xl font-bold text-secondary">{titleHeader}</h1>
      </div>
      <div className="flex flex-col gap-1 items-end ">
        <p className="text-xl font-semibold text-secondary">
          ¡Hola, {nameSplit[0]}!
        </p>
        <p className="text-sm font-normal text-gray">{formatDate}</p>
      </div>
    </div>
  );
};

export default HeaderPage;
