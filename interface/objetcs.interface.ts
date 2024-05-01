export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterForm {
  names: string;
  surname: string;
  email: string;
  password: string;
}

export interface documentState {
  file: File | File[] | null | string;
  nameDocument: string;
}

export interface FileContainerProps {
  value?: File | File[] | null | string;
  width?: string;
  height?: string;
  correctTypeFile?: boolean
}