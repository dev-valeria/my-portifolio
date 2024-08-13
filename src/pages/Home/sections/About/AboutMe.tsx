import { Container, Typography, Box, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import { t } from 'i18next';

const AboutMe = () => {
  return (
    <Container maxWidth="lg" id="about" sx={{ pt: 2, backgroundColor: 'white', color: 'black', mb: 5 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        {t('aboutMe.title')}
      </Typography>
      <Box display="flex" justifyContent="center" mt={2} gap={2}>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            padding: '6px 12px', // Ajusta o padding para reduzir a altura
            fontSize: '0.875rem' // Ajusta o tamanho da fonte
          }}
        >
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
        <Button 
          variant="outlined" 
          color="secondary" 
          sx={{ 
            padding: '6px 12px', // Ajusta o padding para reduzir a altura
            fontSize: '0.875rem' // Ajusta o tamanho da fonte
          }}
        >
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
