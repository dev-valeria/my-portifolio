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

const Hero = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const StyledHero = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: "flex",
    alignItems: "center",
  }));

  const handleContactClick = () => {
    setTimeout(() => {
      window.location.href = "mailto:valeriamelo.dev@gmail.com";
    }, 0);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '/path/to/curriculo.pdf'; 
    link.download = 'curriculo-valeria-melo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
         <StyledHero>
    <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} 
            sx={{
              pt: { xs: '13px !important', md: '80px !important'  }, 
              pr: { xs: '46px !important', md: '84px !important'  }, 
              pl: { xs: '63px !important', md: '63px !important' }
            }}
          >
            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
              Valeria Melo
            </Typography>
            <Typography color="primary.contrastText" variant={isMobile ? 'h5' : 'h3'}  textAlign="center">
              I'm a Software Engineer
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButtonDefault onClick={handleDownloadClick}>
                  <DownloadIcon />
                  <Typography fontSize={14}>
                    Download CV
                  </Typography>
                </StyledButtonDefault>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButtonDefault onClick={handleContactClick}>
                  <MailOutlineIcon />
                  <Typography fontSize={14}>
                    Contact me
                  </Typography>
                </StyledButtonDefault>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Container>
      </StyledHero >
      <AboutMe />
      <SkillsIcons />
      <Projects />
    </>

  );
}

export default Hero;
