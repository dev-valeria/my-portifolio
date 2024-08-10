import { Container, Typography, Box, styled, keyframes } from '@mui/material';
import { t } from 'i18next';

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
  width: '30px', // Aumentando o tamanho do ícone
  height: 'auto',
  margin: theme.spacing(4), // Ajustando o espaçamento
}));

// Estilos para o contêiner de habilidades
const SkillBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  py: 2, // Aumentando o padding vertical
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: theme.shadows[1],
  animation: `${fadeInAndScaleUp} 1s ease-out`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SkillsIcons = () => {
  return (
    <Container maxWidth="lg" id="skills" sx={{ pt: 4, pb: 6, backgroundColor: '#f5f5f5', mb: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        {t('skillsList.title')}
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {skillsData.map((skill, index) => (
          <SkillBox key={index}>
            <IconImage src={skill.icon.props.src} alt={skill.icon.props.alt} />
          </SkillBox>
        ))}
      </Box>
    </Container>
  );
};

export default SkillsIcons;
