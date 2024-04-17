import React, { useState } from "react";
import CustomInput from "../CustomInput";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CustomSelect from "../CustomSelect/CustomSelect";
import Image from "next/image";
import { testStatus, urlImageCLoud } from "@/src/utils/utilsText";
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

  const data = [
    {
      id: "1",
      file_name: "Folder 1",
      color: "#FF0000",
      date_created: "2021-01-01",
      date_update: "2021-01-05",
    },
    {
      id: "2",
      file_name: "Folder 2",
      color: "#00FF00",
      date_created: "2021-01-02",
      date_update: "2021-01-06",
    },
    {
      id: "3",
      file_name: "Folder 3",
      color: "#0000FF",
      date_created: "2021-01-03",
      date_update: "2021-01-07",
    },
    {
      id: "4",
      file_name: "Folder 4",
      color: "#FFFF00",
      date_created: "2021-01-04",
      date_update: "2021-01-08",
    },
    {
      id: "5",
      file_name: "Folder 5",
      color: "#FF00FF",
      date_created: "2021-01-05",
      date_update: "2021-01-09",
    },
    {
      id: "6",
      file_name: "Folder 6",
      color: "#00FFFF",
      date_created: "2021-01-06",
      date_update: "2021-01-10",
    },
    {
      id: "7",
      file_name: "Folder 7",
      color: "#000000",
      date_created: "2021-01-07",
      date_update: "2021-01-11",
    },
    {
      id: "8",
      file_name: "Folder 8",
      color: "#FFFFFF",
      date_created: "2021-01-08",
      date_update: "2021-01-12",
    },
    {
      id: "9",
      file_name: "Folder 9",
      color: "#C0C0C0",
      date_created: "2021-01-09",
      date_update: "2021-01-13",
    },
    {
      id: "10",
      file_name: "Folder 10",
      color: "#808080",
      date_created: "2021-01-10",
      date_update: "2021-01-14",
    },
    {
      id: "11",
      file_name: "Folder 11",
      color: "#800000",
      date_created: "2021-01-11",
      date_update: "2021-01-15",
    },
    {
      id: "12",
      file_name: "Folder 12",
      color: "#808000",
      date_created: "2021-01-12",
      date_update: "2021-01-16",
    },
    {
      id: "13",
      file_name: "Folder 13",
      color: "#008000",
      date_created: "2021-01-13",
      date_update: "2021-01-17",
    },
    {
      id: "14",
      file_name: "Folder 14",
      color: "#800080",
      date_created: "2021-01-14",
      date_update: "2021-01-18",
    },
    {
      id: "15",
      file_name: "Folder 15",
      color: "#008080",
      date_created: "2021-01-15",
      date_update: "2021-01-19",
    },
    {
      id: "16",
      file_name: "Folder 16",
      color: "#000080",
      date_created: "2021-01-16",
      date_update: "2021-01-20",
    },
    {
      id: "17",
      file_name: "Folder 17",
      color: "#FFA500",
      date_created: "2021-01-17",
      date_update: "2021-01-21",
    },
    {
      id: "18",
      file_name: "Folder 18",
      color: "#A52A2A",
      date_created: "2021-01-18",
      date_update: "2021-01-22",
    },
    {
      id: "19",
      file_name: "Folder 19",
      color: "#800000",
      date_created: "2021-01-19",
      date_update: "2021-01-23",
    },
    {
      id: "20",
      file_name: "Folder 20",
      color: "#808000",
      date_created: "2021-01-20",
      date_update: "2021-01-24",
    },
  ];

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

  console.log("inputs", inputs)

  return (
    <section className="w-full h-full flex flex-col">
      {data.length === 0 ? (
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
            {data.map((item, index) => {
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
                      className="mr-4"
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
