import { CustomButtonProps } from "@/types/components.type";
import Image from "next/image";

const CustomButton: React.FC<CustomButtonProps> = ({
  disabled,
  onClick = () => {},
  label,
  className,
  loading,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={className}
    >
      {label}
      {loading && (
        <Image
          src="/icons/loadData.svg"
          alt="loading"
          width={24}
          height={24}
          className="animate-spin"
        />
      )}
    </button>
  );
};

export default CustomButton;
