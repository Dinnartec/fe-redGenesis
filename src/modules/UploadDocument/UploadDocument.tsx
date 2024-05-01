import { documentState } from "@/interface/objetcs.interface";
import CustomButton from "@/src/components/CustomButton/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import FileUploader from "@/src/components/FileUploader";
import React, { useState } from "react";

const UploadDocument = ({ onClose }: { onClose: () => void }) => {
  const [inputs, setInputs] = useState<documentState>({
    file: null,
    nameDocument: "",
  });

  const handleChange =(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSaveFile = () => {
    console.log("Guardar documento", inputs);
    onClose();
  }


  return (
    <div className="bg-white py-9 px-32 rounded-2xl w-[757px] h-auto flex flex-col gap-7">
      <h1 className="text-4xl font-bold text-secondary text-center">Subir documento</h1>
      <FileUploader
        label="Subir documento"
        name="file"
        setInputs={setInputs}
        value={inputs.file}
        acceptedFiles={{
            type: "application/pdf",
            extensions: [".pdf"],
          }}
        height={"237px"}
      />
      <CustomInput
        type="text"
        placeholder="Nombre del documento"
        className="w-full h-8 rounded-md border border-gray px-2 py-1"
        name="nameDocument"
        id="nameDocument"
        label="Nombre del archivo"
        value={inputs.nameDocument}
        onChange={handleChange}
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
          onClick={handleSaveFile}
        />
      </div>
    </div>
  );
};

export default UploadDocument;
