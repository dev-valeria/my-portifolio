import { Container, Grid, Typography, Box } from '@mui/material';


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

const SkillsIcons = () => {
  return (
    <Container maxWidth="lg" id="skills" sx={{ pt: 2, pb: 5 }}>
      <Typography variant="h2" textAlign="center" paddingBottom={5} gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skillsData.map((skill, index) => (
          <Grid item xs={2}  key={index} sx={{ pb: 4, mw:8}}>
            <Box display="flex" flexDirection="column-reverse" alignItems="center">
              {skill.icon}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsIcons;





