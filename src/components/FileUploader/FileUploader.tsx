import Image from "next/image";
import React, { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Container, FileContainer } from "./FileUploader.style";
import { FileUploaderProps } from "@/types/components.type";
import { urlImageCLoud } from "@/src/utils/utilsText";

const FileUploader = ({
  setInputs,
  acceptedFiles,
  name,
  value,
  width = "100%",
  label,
  titleAcceptFile,
  height,
  imageDisplay,
}: FileUploaderProps) => {
  const [correctTypeFile, setCorrectTypeFile] = useState<boolean>(true);
  const valueFile = value?.valueOf() as File | null;
  const onDrop = useCallback(
    (acceptFiles: File[], rejectedFiles: FileRejection[]) => {
      setInputs((values) => ({
        ...values,
        [name]: acceptFiles[0],
      }));

      setCorrectTypeFile(rejectedFiles.length === 0);
    },
    [name, setInputs]
  );

  const dropzoneProps = useDropzone({
    onDrop,
    accept: {
      [acceptedFiles.type]: acceptedFiles.extensions,
    },
  });

  const { getRootProps, getInputProps } = dropzoneProps;

  const resetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputs((values) => ({ ...values, [name]: "" }));
  };

  return (
    <div className="flex flex-row">
      <Container width={width}>
        {label && <p className="text-sm font-medium pb-2">{label}</p>}
        <FileContainer
          {...getRootProps({
            value,
            width,
            correctTypeFile,
            height,
          })}
        >
          <input
            {...getInputProps({
              name,
              id: name,
              multiple: false,
            })}
          />
          {(value && correctTypeFile) || imageDisplay ? (
            <div className="flex justify-center items-center w-full gap-14">
              <Image
                src={`${urlImageCLoud}/icons/iconSuccess.svg`}
                alt="iconSuccess"
                width={80}
                height={80}
                className=""
              />
              <div className="flex flex-col gap-4 w-60">
                <p className="font-medium text-lg">
                  {valueFile?.name} está listo.
                </p>
                <p className="font-bold underline text-base text-secondary cursor-pointer ">
                  Reemplazar archivo
                </p>
              </div>
            </div>
          ) : !correctTypeFile ? (
            <div className="flex justify-center items-center w-full gap-14">
              <Image
                src={`${urlImageCLoud}/icons/iconFileInvalid.svg`}
                alt="File invalid"
                width={80}
                height={80}
                className=""
              />
              <div className="flex flex-col gap-4 w-60">
                <p className="font-medium text-lg text-red">
                  El archivo que estás cargando <b>no cumple los requisitos.</b>
                </p>
                <p className="font-bold underline text-base text-secondary cursor-pointer ">
                  Cargar un archivo valido.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row w-full justify-between cursor-pointer">
              <p className="text-xs text-[#888888] leading-[1rem] font-medium text-center max-w-[180px]">
                Arrastra o haz clic aquí para adjuntar un archivo.
              </p>
            </div>
          )}
        </FileContainer>
      </Container>
      {/* {value && correctTypeFile && acceptedFiles && (
        <button
          className="ml-3 self-end flex gap-2 items-center"
          onClick={resetClick}
        >
          <Image
            src="/icons/iconDelete.svg"
            alt="iconDelete"
            width={20}
            height={20}
          />
          <p className="text-xs text-error underline">Eliminar archivo</p>
        </button>
      )} */}
    </div>
  );
};

export default FileUploader;
