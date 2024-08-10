import { Container, Typography, Box, Select, MenuItem, Button, styled, SelectChangeEvent } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import { useTranslation } from 'react-i18next'; // Importar o hook do i18n


const StyledImg = styled("img")(({ }) => ({
  width: '24px',
  height: 'auto',
  marginRight: '8px',
}));

const AboutMe = () => {
  const { t, i18n } = useTranslation(); // Hook para acessar o i18n

 

  return (
    <Container maxWidth="lg" id="about" sx={{ pt: 2, backgroundColor: 'white', color: 'black', mb: 5 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        {t('aboutMe.title')}
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="primary">
          <Typography fontSize={14}>
            <EmojiEventsIcon />
            <br />
            <span style={{ fontWeight: 'bold' }}>{t('aboutMe.experience')}</span>
            <br />
            {t('aboutMe.years')}
            <br />
            {t('aboutMe.development')}
          </Typography>
        </Button>
        <Button variant="outlined" color="secondary">
          <Typography fontSize={14}>
            <SchoolIcon />
            <br />
            <span style={{ fontWeight: 'bold' }}>{t('aboutMe.education')}</span>
            <br />
            {t('aboutMe.course')}
            <br />
            FATEC-SP
          </Typography>
        </Button>
      </Box>
      <Box mb={5} mt={5}>
        <Typography variant="body1" sx={{
          textAlign: 'justify',
          lineHeight: 1.6,
          letterSpacing: '0.02em',
          fontWeight: 400,
          fontSize: '1rem',
          color: 'text.primary',
          mt: 3,
        }}>
          {t('aboutMe.description')}
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutMe;