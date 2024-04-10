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