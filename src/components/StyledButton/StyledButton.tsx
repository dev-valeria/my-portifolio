import React from 'react';
import { styled } from '@mui/material/styles';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const StyledButtonDefault = styled('button')(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledButtonDefaultComponent: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButtonDefault onClick={onClick}>
      {children}
    </StyledButtonDefault>
  );
};
export { StyledButtonDefaultComponent as StyledButtonDefault };

