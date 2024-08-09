import { Container, Grid, Typography, Box, styled,  keyframes } from '@mui/material';

// Dados das habilidades
const skillsData = [
  { icon: <img src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000" alt="Angular" />  },
  { icon: <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="Html"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript ES6"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" alt="TypeScript"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="NodeJs"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="ReactJs"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" alt="Next.js"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="Git"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="AWS"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000" alt="Material UI"/> },
  { icon: <img src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="Figma"/> },
];

// Defina a animação
const fadeInAndScaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Estilos para a imagem do ícone
const IconImage = styled('img')(({ theme }) => ({
  width: '60px',
  height: 'auto',
  marginBottom: theme.spacing(2),
}));

// Estilos para o contêiner de habilidades
const SkillBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  py: 2,
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: theme.shadows[1],
  animation: `${fadeInAndScaleUp} 1s ease-out`,
}));

const SkillsIcons = () => {
  return (
    <Container maxWidth="lg" id="skills" sx={{ pt: 4, pb: 6, backgroundColor: '#f5f5f5', mb: 8 }}>
      <Typography variant="h1" align="center" gutterBottom>
          Skills
        </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skillsData.map((skill, index) => (
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}  key={index}>
            <SkillBox
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <IconImage src={skill.icon.props.src} alt={skill.icon.props.alt} />
              <Typography variant="h6" sx={{ mb: 2 }}>{skill.icon.props.alt}</Typography>
            </SkillBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsIcons;
