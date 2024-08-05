import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";
import theme from "../../../../theme";

const Hero = () => {
  const StyledHero = styled('div')(() => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '100%'
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '0'
    }
  }));

   const handleContactClick = () => {
    setTimeout(() => {
      window.location.href = "mailto:valeriamelo.dev@gmail.com";
    }, 0);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '../../../../../public/curriculo.pdf'; 
    link.download = 'curriculo-valeria-melo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
}))
 
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
          <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Valeria Melo</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleDownloadClick}>
                  <DownloadIcon />
                  <Typography>
                    Download CV
                  </Typography>
                  </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleContactClick}>
                  <MailOutlineIcon />
                  <Typography>
                    Contact me
                  </Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
    </>
  );
}

export default Hero;