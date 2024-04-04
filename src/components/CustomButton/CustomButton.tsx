import { CustomButtonProps } from "@/types/components.type";
import Image from "next/image";

const CustomButton = ({
  disabled,
  onClick = () => {},
  label,
  className,
  loading,
}: CustomButtonProps) => {
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
          src={`${process.env.NEXT_PUBLIC_URL_CLOUD_FRONT_ASSETS}/images/imgLoadData.svg`}
          alt="loading"
          width={16}
          height={16}
          className="animate-spin"
        />
      )}
    </button>
  );
};

export default CustomButton;
