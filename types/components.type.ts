import { documentState } from "@/interface/objetcs.interface";
import { ChangeEvent } from "react";

export type CustomButtonProps = {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  className?: string;
  loading?: boolean;
};

type TooltipPlacement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';


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
  infoTooltip?: boolean;
  tooltipId?: string;
  tooltipContent?: string;
  tooltipPlacement?: TooltipPlacement;
};

export type AuthProps = {
  children: React.ReactNode;
};


export type OptionItem = {
  id: number;
  name: string;
  icon: React.ReactNode;
  handlerOption: () => void;
}

export type MenuActionsProps = {
  options: OptionItem[];
}


export type HeaderPageProps = {
  titleHeader: string;
  breadcrumb?: string;
};


type Option = {
  value: string;
  label?: string;
  data?: any;
}

export type CustomSelectProps = {
  label?: string;
  width?: string;
  name: string;
  id?: string;
  defaultValue?: string;
  value?: string;
  placeholderText: string;
  options: Option[];
  setFormValue?: (values: any) => void;
  disabled?: boolean;
  loading?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  labelFontSize?: string;
}

export type CustomModalProps = {
  customRef: React.MutableRefObject<any> | React.RefObject<any> | null | (() => void);
  children: React.ReactNode;
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
};

interface AcceptedFiles {
  extensions: string[];
  type: string;
}


export type FileUploaderProps = {
  setInputs: React.Dispatch<React.SetStateAction<documentState>>;
  acceptedFiles: AcceptedFiles
  name: string;
  value: File | File[] | null | string;
  width?: string;
  label?: string;
  titleAcceptFile?: string;
  height?: string;
  imageDisplay?: string;
}