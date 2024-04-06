import { CustomInputProps } from "@/types/components.type";
import { useRef, useState, KeyboardEvent } from "react";
import { urlImageCLoud } from "@/src/utils/utilsText";
// eslint-disable-next-line @next/next/no-img-element

const CustomInput = ({
  disabled = false,
  className = "",
  type,
  placeholder,
  label,
  defaultValue,
  width,
  rows,
  name,
  onChange,
  min,
  id,
  value,
  isRequeried = false,
  labelFontSize = "14px",
  infoTooltip = false,
  tooltipId,
  tooltipContent,
  tooltipPlacement = "right",
}: CustomInputProps) => {
  const messageError = "Este campo es obligatorio";
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      (event.key === "Enter" || event.key === "Tab") &&
      isRequeried &&
      !value
    ) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div>
      {label && (
        <p
          className={`text-[${labelFontSize}] text-left font-medium pb-2 flex gap-2 items-center`}
        >
          {label}
          {infoTooltip && (
            
            <img
              src={`${urlImageCLoud}/icons/iconInfo.svg`}
              alt="info"
              className="self-center w-3 h-3"
              data-tooltip-id={tooltipId}
              data-tooltip-content={tooltipContent}
              data-tooltip-placement={tooltipPlacement}
            />
          )}
        </p>
      )}
      {type === "textarea" ? (
        <textarea
          className={`placeholder:text-[#C4C4C4] ${className}`}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          id={id}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <input
          className={`placeholder:text-[#C4C4C4] ${className}`}
          disabled={disabled}
          type={type}
          width={width}
          placeholder={placeholder}
          defaultValue={defaultValue}
          name={name}
          onChange={onChange}
          id={id}
          min={min}
          value={value}
          required={isRequeried}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      )}
      {showError && <p className="text-red-500 text-xs">{messageError}</p>}
    </div>
  );
};

export default CustomInput;
