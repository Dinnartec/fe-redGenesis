
import { CustomModalProps } from "@/types/components.type";
import Popup from "reactjs-popup";


const CustomModal: React.FC<CustomModalProps> = ({
  customRef,
  children,
  closeOnDocumentClick = true,
  closeOnEscape = true,
}) => {
  return (
    <Popup
      ref={customRef}
      modal
      nested
      closeOnDocumentClick={closeOnDocumentClick}
      closeOnEscape={closeOnEscape}
    >
      {children}
    </Popup>
  );
};

export default CustomModal;
