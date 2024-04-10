import { urlImageCLoud } from "@/src/utils/utilsText";
import { EventCallbacks } from "next-auth";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const MenuOptions = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const dataOptions = [
    {
      id: 1,
      name: "Crear una carpeta",
      onClickFunction: () => {
        console.log("Crear una carpeta");
      },
      icon: `${urlImageCLoud}/icons/iconAddFolder.svg`,
      widthImage: 30,
    },
    {
      id: 2,
      name: "Subir un documento",
      onClickFunction: () => {
        console.log("Subir un documento");
      },
      icon: `${urlImageCLoud}/icons/iconAddFile.svg`,
      widthImage: 18,
    },
    {
      id: 3,
      name: "Generrar un examen",
      onClickFunction: () => {
        console.log("Generrar un examen");
      },
      icon: `${urlImageCLoud}/icons/iconGenerateTest.svg`,
      widthImage: 23,
    },
  ];

  return (
    <div className="flex justify-end w-16 h-16 self-end relative">
      {isOpen && (
        <ul className="flex flex-col absolute w-60 h-52 bottom-[4.5rem] justify-between">
          {dataOptions.map((item) => {

            return (
              <li
                key={item.id}
                className="bg-grayLight rounded-xl shadow-custom-tooltip flex items-center justify-center gap-4 w-full h-16"
                onClick={item.onClickFunction}
              >
                <Image src={item.icon} alt={item.name} width={item.widthImage} height={24} />
                <p className="text-sm font-medium">{item.name}</p>
              </li>
            );
          })}
        </ul>
      )}
      <button
        className=" w-16 h-16 bg-grayLight rounded-full shadow-custom-button flex justify-center items-center"
        onClick={handleClick}
      >
        <Image
          src={`${urlImageCLoud}/icons/iconAdd.svg`}
          alt="iconAdd"
          width={32}
          height={32}
          style={{
            transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </button>
    </div>
  );
};

export default MenuOptions;
