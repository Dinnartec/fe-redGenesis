

export const urlImageCLoud = process.env.NEXT_PUBLIC_URL_CLOUD_FRONT_ASSETS;

export const testStatus = [
  {
    id: 1,
    value: "Aprobado",
    label: "Aprobado",
    code: "Approved",
  },
  {
    id: 2,
    value: "Rechazado",
    label: "Rechazado",
    code: "Rejected",
  },
  {
    id: 3,
    value: "Pendiente",
    label: "Pendiente",
    code: "Pending",
  },
  {
    id: 4,
    value: "En proceso",
    label: "En proceso",
    code: "process",
  },
  {
    id: 5,
    value: "Sin procesar",
    label: "Sin procesar",
    code: "Unprocessed",
  },

];


export const borderStyles = {
  default: '2px dashed #9E9E9E',
  correct: '2px dashed #2C98A0',
  incorrect: '2px dashed #EB5757'
};