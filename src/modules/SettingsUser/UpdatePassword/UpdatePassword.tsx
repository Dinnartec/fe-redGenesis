import CustomButton from "@/src/components/CustomButton/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import React, { useState } from "react";

type Props = {
  onClose: () => void;
};

interface Inputs {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const UpdatePassword = ({ onClose }: Props) => {
  const [inputs, setInputs] = useState<Inputs>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className=" w-96 h-auto gap-10 rounded-2xl bg-white py-10 px-6 flex flex-col justify-between">
      <h1 className="text-3xl font-bold text-secondary self-center">
        Actualizar contraseña
      </h1>

      <div className=" flex flex-col gap-4">
        <CustomInput
          label="Contraseña actual"
          type="password"
          placeholder="Contraseña actual"
          onChange={(e) => console.log(e.target.value)}
          className="w-full h-10 p-2 rounded-md border brode-gray"
        />
        <CustomInput
          label="Nueva contraseña"
          type="password"
          placeholder="Nueva contraseña"
          onChange={(e) => console.log(e.target.value)}
          className="w-full h-10 p-2 rounded-md border brode-gray"
        />
        <CustomInput
          label="Confirmar contraseña"
          type="password"
          placeholder="Confirmar contraseña"
          onChange={(e) => console.log(e.target.value)}
          className="w-full h-10 p-2 rounded-md border brode-gray"
        />
      </div>

      <div className="flex w-full justify-between">
        <CustomButton
          label="Cancelar"
          className="w-32 h-8 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white"
          onClick={onClose}
        />

        <CustomButton
          label="Guardar"
          className="w-32 h-8 bg-secondary text-white rounded-lg disabled:bg-[#D9D9D9] disabled:text-black"
          onClick={() => console.log("Guardar contraseña")}
        />
      </div>
    </div>
  );
};

export default UpdatePassword;
