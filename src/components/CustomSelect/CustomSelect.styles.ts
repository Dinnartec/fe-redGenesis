import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MenuItem, Select } from "@mui/material";

interface ContainerProps {
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ width }) => css`
    width: ${width ? width : "100%"};
  `}
`;

interface StyledSelectProps {
  width?: string;
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
  height: 34px;
  ${({ disabled, width }) => css`
    border: ${disabled ? "none" : "1px solid #000"};
    background: ${disabled ? "#F2F2F2" : ""};
    width: ${width || "100%"};
  `}
  border-radius: 6px;
  font-size: 12px;
  
  
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 12px;
`;