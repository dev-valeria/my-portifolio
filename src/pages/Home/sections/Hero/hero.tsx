import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import Grid from "@mui/material/Grid"
import { Box, Container, Typography } from "@mui/material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DownloadIcon from '@mui/icons-material/Download';
import theme from '../../../../theme';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";



const Hero = () => {
  const StyleHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }))

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,

  }))

  return (
    <>
      <StyleHero>
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
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>
                       Dowload CV 
                    </Typography>
                    </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
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
      </StyleHero>
    </>
  )
}

export default Hero