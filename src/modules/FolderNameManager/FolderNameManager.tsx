import CustomButton from "@/src/components/CustomButton/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import React, { useState } from "react";

const FolderNameManager = ({ onClose }: { onClose: () => void }) => {
  const [inputFolder, setInputFolder] = useState<string>("");

  const handleInputFolder = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputFolder(e.target.value);
  };

  const handleSaveFolder = () => {
    console.log("Guardar carpeta", inputFolder);
    onClose();
  }

  return (
    <div className="w-[684px] h-72 rounded-2xl bg-white py-10 px-24 flex flex-col justify-between">
      <h1 className="text-4xl font-bold text-secondary self-center">Crear carpeta</h1>

      <CustomInput
        type="text"
        placeholder="Escribe el nombre de la carpeta"
        className="w-full h-8 rounded-lg border border-gray px-3 py-2"
        label="Nombre del archivo"
        name="folderName"
        id="folderName"
        value={inputFolder}
        onChange={handleInputFolder}
      />

      <div className="flex w-full justify-between">
        <CustomButton
          label="Cancelar"
          className="w-32 h-8 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white"
          onClick={onClose}
        />

        <CustomButton
          label="Guardar"
          className="w-32 h-8 bg-secondary text-white rounded-lg disabled:bg-[#D9D9D9] disabled:text-black"
          onClick={handleSaveFolder}
          disabled={inputFolder === ""}
        />
      </div>
    </div>
  );
};

export default FolderNameManager;
