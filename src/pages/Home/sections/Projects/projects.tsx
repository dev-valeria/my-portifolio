import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { t } from 'i18next';


const Background = styled('div')({
  backgroundColor: '#000',
  minHeight: '100vh',
  padding: '50px 0',
  color: '#fff',
});

const ProjectCard = styled(motion(Card))({
  backgroundColor: '#1a1a1a',
  color: '#fff',
  borderRadius: '8px',
  overflow: 'hidden',
  padding: '20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
});

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      startDate: 'January 2023',
      endDate: 'March 2023',
      description: 'Description of Project 1',
      technologies: 'React, Node.js, Express',
      image: 'path_to_image_1.jpg',
      projectLink: '#',
      codeLink: '#',
    },
    {
      title: 'Project 2',
      startDate: 'April 2023',
      endDate: 'July 2023',
      description: 'Description of Project 2',
      technologies: 'Angular, Firebase, Material UI',
      image: 'path_to_image_2.jpg',
      projectLink: '#',
      codeLink: '#',
    },
  ];
  

  return (
    <Background>
      <Container id="projectsSection">
        <Typography variant="h2" align="center" gutterBottom>
          {t('projects.title')}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProjectCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {t(`projects.projectsList.${index}.title`)}
                  </Typography>
                  <Typography variant="subtitle1">
                {t(`projects.projectsList.${index}.startDate`)} - {t(`projects.projectsList.${index}.endDate`)}
                  </Typography>
                  <Typography variant="body1" paragraph>
                   {t(`projects.projectsList.${index}.description`)}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {t('projects.technologies')}: {t(`projects.projectsList.${index}.technologies`)}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button variant="contained" color="primary" href={project.projectLink} target="_blank">
                      {t('projects.viewProject')}
                    </Button>
                    <Button variant="outlined" color="secondary" href={project.codeLink} target="_blank">
                      {t('projects.viewCode')}
                    </Button>
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Background>
  );
};

export default Projects;
