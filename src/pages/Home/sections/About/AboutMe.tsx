import { Container, Typography, Box, Select, MenuItem, SelectChangeEvent, Button, styled } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';
import brasil from '../../../../assets/images/brasil.png'
import  estadosUnidos  from'../../../../assets/images/estadosUnidos.png'

type Content = {
  title: string;
  description: string;
  experience: string;
  years: string;
  development: string;
  course: string;
  education: string;
};

const StyledImg = styled("img")(({ }) => ({
   width: '24px',
  height: 'auto',
  marginRight: '8px',
}));
  
const content: Record<'en' | 'pt', Content> = {
  en: {
    title: 'About Me',
    education: 'Education',
    experience: 'experience',
    years: '5+ Years',
    development: 'FrontEnd Development',
    course: 'Business Informatics',
    description: `I'm a passionate Front-end developer with over 5 years of experience in crafting intuitive and dynamic user interfaces. My journey in software development has been driven by a commitment to leveraging cutting-edge technologies and creating seamless user experiences.

    With a strong background in the financial sector, I've honed my skills in designing and implementing innovative solutions that balance functionality and aesthetics. I thrive on tackling complex challenges and delivering high-quality results that align with both business goals and personal aspirations.

    I approach each project with creativity and precision, always aiming to build lasting connections and contribute to the success of the team and the organization. My expertise spans across various tools and frameworks, and I’m always eager to explore new technologies and methodologies to stay ahead in the ever-evolving tech landscape.`,
  },
  pt: {
    title: 'Sobre Mim',
    experience: 'Experiência',
    education: 'Educação',
    years: '5+ Anos',
    development: 'Engenharia de Software',
    course: 'Informática para Negócios',
    description: `Sou uma desenvolvedora Front-end apaixonada com mais de 5 anos de experiência em criar interfaces de usuário intuitivas e dinâmicas. Minha jornada no desenvolvimento de software tem sido impulsionada pelo compromisso de utilizar tecnologias de ponta e criar experiências de usuário perfeitas.

    Com um forte background no setor financeiro, refinei minhas habilidades em projetar e implementar soluções inovadoras que equilibram funcionalidade e estética. Adoro enfrentar desafios complexos e entregar resultados de alta qualidade que alinhem objetivos de negócios e aspirações pessoais.

    Abordo cada projeto com criatividade e precisão, sempre com o objetivo de construir conexões duradouras e contribuir para o sucesso da equipe e da organização. Minha experiência abrange várias ferramentas e frameworks, e estou sempre ansiosa para explorar novas tecnologias e metodologias para me manter à frente no cenário tecnológico em constante evolução.`,
  }
};

const AboutMe = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

   const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value as 'pt' | 'en');
  };

  return (
    <Container maxWidth="lg" id="about" sx={{ pt: 2, backgroundColor: 'white', color: 'black', mb: 5 }}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Select
        value={language}
        onChange={handleLanguageChange}
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
        <StyledImg src={language === 'en' ? estadosUnidos : brasil} alt="Language Flag" />
      )}
        >
          <MenuItem value="pt"><StyledImg src={ brasil } alt="Brazilian Flag" /></MenuItem>
          <MenuItem value="en"><StyledImg src={ estadosUnidos } alt="US Flag" /></MenuItem>
        </Select>
        </Box>
      <Typography variant="h1" textAlign="center" gutterBottom>
        {content[language].title}
      </Typography>
       <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" >
          <Typography fontSize={14}>
            <EmojiEventsIcon />
            <br />
              <span style={{ fontWeight: 'bold' }}>{content[language].experience}</span>
              <br />
              {content[language].years}
              <br />
              {content[language].development}
            </Typography>
          </Button>
          <Button variant="outlined" color="secondary">
          <Typography fontSize={14}>
            <SchoolIcon />
            <br/>
              <span style={{ fontWeight: 'bold' }}>{content[language].education}</span>
              <br />
              {content[language].course}
              <br />
              FATEC-SP
            </Typography>
        </Button>
         </Box>
      <Box mb={5} mt={5}>
        <Typography variant="body1"  sx={{ 
    textAlign: 'justify', 
    lineHeight: 1.6, 
    letterSpacing: '0.02em',
    fontWeight: 400,
    fontSize: '1rem',
    color: 'text.primary',
    mt: 3,
  }}>
          {content[language].description}
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutMe;