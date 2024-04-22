import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { borderStyles } from "@/src/utils/utilsText";
import { FileContainerProps } from "@/interface/objetcs.interface";


const getBorderStyle = ({ value, correctTypeFile }: FileContainerProps) => {
  const borderValue = value === null
    ? borderStyles.default
    : correctTypeFile
    ? borderStyles.correct
    : borderStyles.incorrect;

  return borderValue;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${({ width, disabled }: { width?: string; disabled?: boolean }) => css`
    width: ${width ? width : "100%"};
    pointer-events: ${disabled ? "none" : "auto"};
  `}
`;

export const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${({ value, width, height, correctTypeFile }: FileContainerProps) => css`
    border: ${getBorderStyle({ value, correctTypeFile })};
    width: ${width ? width : '100%'};
    height: ${height ? height : '100%'};
  `}
  border-radius: 6px;
  align-items: center;
  padding: 5px;
  z-index: 1;
`;