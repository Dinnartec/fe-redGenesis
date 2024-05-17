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
    universityCareer: "",
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
      ...userInfo,
      names: inputs.names || userInfo.names,
      surname: inputs.surname || userInfo.surname,
      universityCareer: inputs.universityCareer || userInfo.universityCareer,
      semester: inputs.semester !== undefined ? inputs.semester : userInfo.semester,
      phone: inputs.phone || userInfo.phone,
      department: inputs.department || userInfo.department,
      postalCode: inputs.postalCode || userInfo.postalCode,
      city: inputs.city || userInfo.city,
    };
  
    const fieldsToUpdate = Object.entries(updatedFields).reduce(
      (acc: { [key: string]: any }, [key, value]) => {
        if (value !== undefined && value !== userInfo[key as keyof typeof userInfo]) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
  
    console.log("Actualizar datos", fieldsToUpdate);
    dispatch(updateUserInfo(fieldsToUpdate));
  };

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
            defaultValue={userInfo.names}
            onChange={handleChangeInput}
          />
          <CustomInput
            label="Apellidos"
            placeholder="Doe"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="surname"
            defaultValue={userInfo.surname}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex gap-8 w-full justify-between">
          <CustomInput
            label="Carrera universitaria"
            placeholder="Ingenieria de sistemas"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="universityCareer"
            defaultValue={userInfo.universityCareer}
            onChange={handleChangeInput}
          />
          <CustomSelect
            label="Ubicación semestral"
            placeholderText="Seleccione la ubicación semestral"
            name="semester"
            value={
              inputs.semester.value ||
              (userInfo.semester && userInfo.semester.value)
            }
            options={transformForSelect(semesterLocation || [], "label", "value")}
            setFormValue={setInputs}
            placeholderColor="text-gray"
          />
        </div>
        <div className="flex gap-8 w-full justify-between">
          <CustomInput
            label="Telefono"
            placeholder="3104461088"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="phone"
            defaultValue={userInfo.phone}
            onChange={handleChangeInput}
          />
          <CustomInput
            label="Departamento"
            placeholder="Magdalena"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="department"
            defaultValue={userInfo.department}
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
            defaultValue={userInfo.postalCode}
            onChange={handleChangeInput}
          />
          <CustomInput
            label="Ciudad"
            placeholder="El Banco"
            type="text"
            className="w-full h-10 p-2 rounded-md border brode-gray"
            name="city"
            defaultValue={userInfo.city}
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <footer className="w-full border-t border-gray py-2 flex flex-row-reverse ">
        <CustomButton
          label="Guardar cambios"
          onClick={submmitUpdate}
          className="w-44 h-11 rounded-md bg-secondary text-white font-semibold text-sm self-end disabled:bg-gray disabled:cursor-not-allowed "
          // disabled={isDisabled}
        />
      </footer>
    </div>
  );
};

export default UpdateInfoUser;
