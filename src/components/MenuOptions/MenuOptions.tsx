import Image from "next/image";
import React, { useRef, useState } from "react";

import FolderNameManager from "@/src/modules/FolderNameManager";
import CustomModal from "../CustomModal";
import { urlImageCLoud } from "@/src/utils/utilsText";
import UploadDocument from "@/src/modules/UploadDocument";
import GenerateTest from "@/src/modules/GenerateTest/GenerateTest";


const MenuOptions = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const createFolder = useRef();
  const uploadDocument = useRef();
  const generateTest = useRef();

  const toggleGenerateTest = () => {
    (generateTest.current as any).toggle();
  }

  const toggleCreateFolder = () => {
    (createFolder.current as any).toggle();
  };

  const toggleUploadDocument = () => {
    (uploadDocument.current as any).toggle();
  }

  const dataOptions = [
    {
      id: 1,
      name: "Crear una carpeta",
      onClickFunction: () => {
        toggleCreateFolder();
        setIsOpen(!isOpen);
      },
      icon: `${urlImageCLoud}/icons/iconAddFolder.svg`,
      widthImage: 30,
    },
    {
      id: 2,
      name: "Subir un documento",
      onClickFunction: () => {
        toggleUploadDocument();
        setIsOpen(!isOpen);
      },
      icon: `${urlImageCLoud}/icons/iconAddFile.svg`,
      widthImage: 18,
    },
    {
      id: 3,
      name: "Generrar un examen",
      onClickFunction: () => {
        toggleGenerateTest();
        setIsOpen(!isOpen);
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
                className="bg-grayLight rounded-xl shadow-custom-tooltip flex items-center justify-center gap-4 w-full h-16 cursor-pointer"
                onClick={item.onClickFunction}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={item.widthImage}
                  height={24}
                />
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

      <CustomModal customRef={createFolder} closeOnEscape={false}>
        <FolderNameManager onClose={toggleCreateFolder} />
      </CustomModal>
      <CustomModal customRef={uploadDocument} closeOnEscape={false}>
        <UploadDocument onClose={toggleUploadDocument}/>
      </CustomModal>
      <CustomModal customRef={generateTest} closeOnEscape={false}>
        <GenerateTest onClose={toggleGenerateTest}/>
      </CustomModal>
    </div>
  );
};

export default MenuOptions;
