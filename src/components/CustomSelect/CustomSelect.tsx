import { CustomSelectProps } from "@/types/components.type";
import { Container, StyledMenuItem, StyledSelect } from "./CustomSelect.styles";


function CustomSelect({
  label = "",
  width,
  name,
  id,
  defaultValue,
  value,
  placeholderText,
  options,
  setFormValue,
  disabled = false,
  loading,
  open,
  defaultOpen,
  labelFontSize = "14px",
  height,
  placeholderColor="text-black"
}: CustomSelectProps) {
  return (
    <Container width={width} height={height} className="selectField">
      {label && (
        <p
          className={`font-mont text-[${labelFontSize}] text-left font-medium text-redq pb-2`}
        >
          {label}
        </p>
      )}
      <StyledSelect
        disabled={disabled}
        placeholder={placeholderText}
        displayEmpty
        name={name}
        defaultValue={defaultValue}
        value={value}
        label={label}
        onChange={(event) => {
          const optionSelected = options.find(
            (option) => option.value === event.target.value
          );
          setFormValue &&
            setFormValue((values: any) => ({
              ...values,
              [name]: optionSelected?.data || "",
            }));
        }}
        open={open}
        defaultOpen={defaultOpen}
      >
        <StyledMenuItem disabled value="">
          <p className={`${placeholderColor}`}>
            {loading ? "Cargando..." : placeholderText}
          </p>
        </StyledMenuItem>
        {options.map((option, index) =>
          !option.data?.NA ? (
            <StyledMenuItem
              key={index}
              value={option.value}
              className={index % 2 === 0 ? "bg-[#F9F9F9]" : ""}
            >
              {option.label || option.value}
            </StyledMenuItem>
          ) : null
        )}
      </StyledSelect>
    </Container>
  );
}

export default CustomSelect;
