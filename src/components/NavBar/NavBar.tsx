// NavBar.js ou NavBar.tsx
import { AppBar, MenuItem, Toolbar, styled } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
}));

const NavBar = () => {
  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <ScrollLink to="about" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          <MenuItem>About</MenuItem>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          <MenuItem>Skills</MenuItem>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          <MenuItem>Projects</MenuItem>
        </ScrollLink>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
