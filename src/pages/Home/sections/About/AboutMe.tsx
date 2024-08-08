import { Container, Grid, Typography, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import { StyledButtonEducation, StyledButtonExperience } from '../../../../components/StyledButton/StyledButton';
const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      <Typography variant="h2" id="about" textAlign="center" gutterBottom>
        About me
      </Typography>
      <Grid container  justifyContent="center">
        <Grid item xs={12} md={6}>
           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingLeft: '373px' }}>
            <StyledButtonExperience>
              <EmojiEventsIcon />
              <Typography fontSize={14}>
                <span style={{ fontWeight: 'bold' }}>Experience</span>
                <br />
                5+ Years
                <br />
                FrontEnd Development
              </Typography>
            </StyledButtonExperience>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledButtonEducation>
            <SchoolIcon />
            <Typography fontSize={14}>
              <span style={{ fontWeight: 'bold' }}>Education</span>
              <br />
              Informática para Negócios
              <br />
              FATEC-SP
            </Typography>
            </StyledButtonEducation>
        </Grid>
      </Grid>
      <Box mt={4} sx={{ textAlign: 'justify', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" paragraph>
          Pretendo atuar na área de desenvolvimento de software, Front-end, sempre utilizando as linguagens atuais,
          porque estou confiante que aumentará as minhas aptidões profissionais, além de garantir um equilíbrio eficaz
          entre o meu trabalho e os meus objetivos pessoais para a minha vida. Nos últimos 5 anos tenho atuado como
          analista de sistemas Front-end, sempre no setor financeiro. Tenho experiência na área de arquitetura de
          software. Desempenho minhas atividades com muita originalidade e cautela, visando sempre bons resultados
          e criar laços duradouros entre mim e a vossa empresa.
        </Typography>
        <Typography variant="body2" paragraph sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}>
          Desenvolvimento e manutenção da aplicação utilizando: HTML5, CSS, Angular10, testes unitários
          (Jest), versionamento de código (Git, GitLab), ZUP API Gateway, Jenkins, metodologias ágeis (Scrum,
          Kanban | Jira). Convívio com tecnologias como Sonar, Fortify, Openshift, Redis, Camunda. Responsável
          por manter os ambientes de desenvolvimento e homologação sempre atualizados. Atuando também
          com a implantação de sistemas. Seguindo padrões de projetos.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutMe;
