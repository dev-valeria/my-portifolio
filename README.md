
# Portfolio - Valeria Melo

## Sobre

Este é o meu portfólio como Software Engineer, onde apresento alguns dos projetos em que trabalhei e minhas habilidades técnicas. O portfólio foi desenvolvido utilizando **React**, **Material-UI**, e outras tecnologias modernas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material-UI**: Biblioteca de componentes React que implementa o design do Google Material.
- **Framer Motion**: Biblioteca para animações em React.
- **i18next**: Framework de internacionalização para aplicações web.
- **Styled Components**: Utilizado para estilização dos componentes.

## Estrutura do Projeto

- **Hero Section**: Introdução ao portfólio com meu nome, título profissional, e botões para download do currículo e contato via e-mail.
- **About Me**: Descrição sobre mim e minha trajetória profissional.
- **Skills**: Ícones das minhas principais habilidades técnicas.
- **Projects**: Lista de projetos desenvolvidos, com detalhes sobre as tecnologias utilizadas e links para visualização do código e demonstração.

## Internacionalização

O projeto suporta múltiplos idiomas utilizando `i18next`. Idiomas atualmente suportados:

- **Português**
- **Inglês**
- **Espanhol**

### Exemplo de Tradução em JSON

```json
{
  "about": "About",
  "skills": "Skills",
  "projectsSection": "Projects",
  "hero": {
    "title": "Valeria Melo",
    "subtitle": "I'm a Software Engineer",
    "downloadCV": "Download CV",
    "contactMe": "Contact me",
    "avatarAlt": "Valeria Melo"
  },
  "projects": {
    "title": "Projects",
    "viewProject": "View Project",
    "viewCode": "View Code",
    "projectsList": [
      {
        "title": "Project 1",
        "startDate": "January 2023",
        "endDate": "March 2023",
        "description": "Description of Project 1",
        "technologies": "React, Node.js, Express"
      },
      {
        "title": "Project 2",
        "startDate": "April 2023",
        "endDate": "July 2023",
        "description": "Description of Project 2",
        "technologies": "Angular, Firebase, Material UI"
      }
    ]
  }
}

