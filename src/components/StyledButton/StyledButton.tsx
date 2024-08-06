import React from 'react';
import { styled } from '@mui/material/styles';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButtonExperience = styled('button')(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.main}`,
  width: "177px",
  height: "115px",
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledButtonEducation = styled('button')(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.main}`, 
  width: "177px",
  height: "115px",
  color: theme.palette.primary.main,
  alignItems: "center",
  justifyContent: "center",
  
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));


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

const StyledButtonEducationComponent: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButtonEducation onClick={onClick}>
      {children}
    </StyledButtonEducation>
  );
};

const StyledButtonExperienceComponent: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButtonExperience onClick={onClick}>
      {children}
    </StyledButtonExperience>
  );
};

export { StyledButtonDefaultComponent as StyledButtonDefault, StyledButtonExperienceComponent as StyledButtonExperience, StyledButtonEducationComponent as StyledButtonEducation };

