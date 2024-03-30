import { ChangeEvent } from "react";

export type CustomButtonProps = {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  className?: string;
  loading?: boolean;
};

export type CustomInputProps = {
  disabled?: boolean;
  className?: string;
  type: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  width?: string;
  rows?: number;
  name?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  min?: number;
  id?: string;
  value?: string;
  isRequeried?: boolean;
  labelFontSize?: string;
};

export type AuthProps = {
  children: React.ReactNode;
};
