import { AppBar, MenuItem, Select, SelectChangeEvent, Toolbar, styled } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import brasil from '../../assets/images/brasil.png';
import estadosUnidos from '../../assets/images/estadosUnidos.png';
import espanha from '../../assets/images/espanha.png';

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
}));

const StyledImg = styled("img")(({ }) => ({
  width: '24px',
  height: 'auto',
  marginRight: '8px',
}));

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <ScrollLink to="about" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          <MenuItem>{t('about')}</MenuItem>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          <MenuItem>{t('skills')}</MenuItem>
        </ScrollLink>
        <ScrollLink to="projectsSection" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          <MenuItem>{t('projectsSection')}</MenuItem>
        </ScrollLink>
        <Select
          value={language}
          onChange={handleChange}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{
            width: '67px',
            minWidth: '40px',
            height: '32px',
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              padding: '0 8px',
            },
          }}
          renderValue={() => (
            <StyledImg src={
              language === 'en' ? estadosUnidos
              : language === 'es' ? espanha
              : brasil
            } alt="Language Flag" />
          )}
        >
          <MenuItem value="pt"><StyledImg src={brasil} alt="Brazilian Flag" /></MenuItem>
          <MenuItem value="en"><StyledImg src={estadosUnidos} alt="US Flag" /></MenuItem>
          <MenuItem value="es"><StyledImg src={espanha} alt="Spanish Flag" /></MenuItem>
        </Select>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
