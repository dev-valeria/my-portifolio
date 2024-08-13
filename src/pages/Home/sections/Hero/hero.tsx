import { Box, Container, Grid, Typography, styled, useMediaQuery } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";
import theme from "../../../../theme";
import { StyledButtonDefault } from "../../../../components/StyledButton/StyledButton";
import AboutMe from "../About/AboutMe";
import SkillsIcons from "../SkillsIcons/SkillsIcons";
import Projects from "../Projects/projects";
import { useTranslation } from 'react-i18next';

// Estilos para a seção Hero
const StyledHero = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100vh',
  display: "flex",
  alignItems: "center",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "80%",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleContactClick = () => {
    window.location.href = "mailto:valeriamelo.dev@gmail.com";
  };

  const handleDownloadClick = () => {
    const language = i18n.language;
    let fileName = 'curriculo.pdf';

    if (language === 'en') {
      fileName = 'curriculoEnglish.pdf';
    } else if (language === 'es') {
      fileName = 'curriculoEspanhol.pdf';
    }

    const link = document.createElement('a');
    link.href = `/path/to/${fileName}`;
    link.download = `curriculo-valeria-melo${language === 'en' ? '-english' : language === 'es' ? '-spanish' : ''}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width="150%" top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} alt={t('hero.avatarAlt')} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} 
              sx={{
                pt: { xs: '13px !important', md: '80px !important' }, 
                pr: { xs: '46px !important', md: '84px !important' }, 
                pl: { xs: '63px !important', md: '63px !important' }
              }}
            >
              <Typography color="primary.contrastText" variant="h3" textAlign="center" pb={2}>
                {t('hero.title')}
              </Typography>
              <Typography color="primary.contrastText" variant={isMobile ? 'h5' : 'h4'} textAlign="center">
                {t('hero.subtitle')}
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButtonDefault onClick={handleDownloadClick}>
                    <DownloadIcon />
                    <Typography fontSize={14} sx={{ ml: 1 }}>
                      {t('hero.downloadCV')}
                    </Typography>
                  </StyledButtonDefault>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButtonDefault onClick={handleContactClick}>
                    <MailOutlineIcon />
                    <Typography fontSize={14} sx={{ ml: 1 }}>
                      {t('hero.contactMe')}
                    </Typography>
                  </StyledButtonDefault>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
      <AboutMe />
      <SkillsIcons />
      <Projects />
    </>
  );
}

export default Hero;


