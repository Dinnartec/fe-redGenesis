import React, { useState } from "react";
import CustomInput from "../CustomInput";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CustomSelect from "../CustomSelect/CustomSelect";
import Image from "next/image";
import { dataDummy, testStatus, urlImageCLoud } from "@/src/utils/utilsText";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PaletteIcon from "@mui/icons-material/Palette";
import MenuActions from "../MenuActions/MenuActions";
import { transformForSelect } from "@/src/utils/utilsFunctions";


const DataFolderSearch = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [inputs, setInputs] = useState({
    typeTest: { code: "", label: "", value: "", id: 0 },
    search: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  

  const optionsListData = [
    {
      id: 1,
      name: "Descargar zip",
      icon: <SaveAltIcon />,
      handlerOption: () => console.log("Descargar zip"),
    },
    {
      id: 2,
      name: "Editar nombre",
      icon: <ModeEditIcon />,
      handlerOption: () => console.log("Editar nombre"),
    },
    {
      id: 3,
      name: "Color de carpeta",
      icon: <PaletteIcon />,
      handlerOption: () => console.log("Color de carpeta"),
    },
  ];


  return (
    <section className="w-full h-full flex flex-col">
      {dataDummy.length === 0 ? (
        <>
          <h1 className="text-4xl font-bold">
            Aún no has subido ningún archivo.
          </h1>
          <p className="text-blue text-2xl">
            Para subir tu primer archivo, haz clic en el botón (+)
          </p>
        </>
      ) : (
        <>
          <CustomInput
            type="text"
            placeholder="Buscar en mis documentos"
            className="w-80 h-8 rounded-md border border-gray px-2 py-1 mb-7 "
            name="search"
            id="search"
            value={inputs.search || ""}
            onChange={handleChange}
          />
          <div className="flex flex-row gap-4">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className="w-28 h-8 rounded-md border border-black px-2 py-1"
            />
            <CustomSelect
              name="typeTest"
              id="typeTest"
              placeholderText="Estado de examen"
              options={transformForSelect(testStatus || [], "label", "value")}
              width="145px"
              value={inputs.typeTest.value}
              setFormValue={setInputs}
            />
          </div>
          <section className="w-auto h-auto grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-9">
            {dataDummy.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-80 h-11  rounded-md bg-grayLight flex items-center pl-4 pr-6 justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <Image
                      src={`${urlImageCLoud}/icons/iconFolder.svg`}
                      width={20}
                      height={20}
                      alt="search"
                      className="mr-4 w-5 h-5"
                    />
                    <p className="text-xs font-semibold">{item.file_name}</p>
                  </div>

                  <MenuActions options={optionsListData} />
                </div>
              );
            })}
          </section>
        </>
      )}
    </section>
  );
};

export default DataFolderSearch;
