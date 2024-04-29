import { selectUserInfo, updateUserInfo } from "@/slices/userInfoSlice";
import CustomButton from "@/src/components/CustomButton/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import CustomSelect from "@/src/components/CustomSelect/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useReduxHooks";
import { transformForSelect } from "@/src/utils/utilsFunctions";
import { semesterLocation } from "@/src/utils/utilsText";
import React, { useState } from "react";

const UpdateInfoUser = () => {
  const [inputs, setInputs] = useState({
    names: "",
    surname: "",
    career: "",
    semester: { code: "", label: "", value: "", id: 0 },
    phone: "",
    department: "",
    postalCode: "",
    city: "",
  });

  const userInfo = useAppSelector(selectUserInfo);
  console.log("userInfo update", userInfo);
  const dispatch = useAppDispatch();

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submmitUpdate = () => {
    const updatedFields = {
      names: inputs.names || "",
      surname: inputs.surname || "",
      career: inputs.career || "",
      semester: inputs.semester || { code: "", label: "", value: "", id: 0 },
      phone: inputs.phone || "",
      department: inputs.department || "",
      postalCode: inputs.postalCode || "",
      city: inputs.city || "",
    };
  
    const fieldsToUpdate = Object.entries(updatedFields).reduce(
      (acc: { [key: string]: any }, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
  
    console.log("Actualizar datos", fieldsToUpdate);
    // Despachar la acción updateUserInfo con los campos a actualizar
    dispatch(updateUserInfo(fieldsToUpdate));
  };

  const isDisabled = Object.values(inputs).some((value) => value === "");

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-6">
        <div className="flex gap-8 w-full justify-between">
          <CustomInput
            label="Nombres"
            placeholder="John"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="names"
            value={inputs.names || userInfo.names}
            onChange={handleChangeInput}
          />
          <CustomInput
            label="Apellidos"
            placeholder="Doe"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="surname"
            value={inputs.surname || userInfo.surname}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex gap-8 w-full justify-between">
          <CustomInput
            label="Carrera universitaria"
            placeholder="Ingenieria de sistemas"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="career"
            value={inputs.career || userInfo.carrerUniversity}
            onChange={handleChangeInput}
          />
          <CustomSelect
            label="Ubicación semestral"
            placeholderText="Seleccione la ubicación semestral"
            name="semester"
            value={inputs.semester.value || userInfo?.semester?.value}
            options={
              transformForSelect(semesterLocation || [], "label", "value") || [
                userInfo?.semester,
              ]
            }
            setFormValue={setInputs}
            placeholderColor="text-gray"
          />
        </div>
        <div className="flex gap-8 w-full justify-between">
          <CustomInput
            label="Telefono"
            placeholder="Ingenieria de sistemas"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="phone"
            value={inputs.phone || userInfo?.phone}
            onChange={handleChangeInput}
          />
          <CustomInput
            label="Departamento"
            placeholder="Magdalena"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="department"
            value={inputs.department || userInfo?.deparment}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex gap-8 w-full justify-between">
          <CustomInput
            label="Codigo postal"
            placeholder="473040"
            type="number"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="postalCode"
            value={inputs.postalCode || userInfo?.postalCode}
            onChange={handleChangeInput}
          />
          <CustomInput
            label="Ciudad"
            placeholder="El Banco"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="city"
            value={inputs.city || userInfo?.city}
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <footer className="w-full border-t border-gray py-2 flex flex-row-reverse ">
        <CustomButton
          label="Guardar cambios"
          onClick={submmitUpdate}
          className="w-44 h-11 rounded-md bg-secondary text-white font-semibold text-sm self-end disabled:bg-gray disabled:cursor-not-allowed "
          disabled={isDisabled}
        />
      </footer>
    </div>
  );
};

export default UpdateInfoUser;
