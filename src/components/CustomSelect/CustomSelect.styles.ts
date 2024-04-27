import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MenuItem, Select } from "@mui/material";

interface ContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ width, height }) => css`
    width: ${width ? width : "100%"};
    height: ${height ? height : "auto"};
  `}
`;

interface StyledSelectProps {
  width?: string;
  disabled?: boolean;
  height?: string;
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
  ${({ disabled, width, height }) => css`
    border: ${disabled ? "none" : "1px solid #000"};
    background: ${disabled ? "#F2F2F2" : ""};
    width: ${width || "100%"};
    height: 40px;
  `}
  border-radius: 6px;
  font-size: 12px;
  
  
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 12px;
`;