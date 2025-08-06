import { techIcons } from '../../common/techIcons';

export const categories = ['all', 'Fullstack', 'Frontend', 'Backend'];

export const projects = [
  {
    id: 1,
    image: './images/velochat.png',
    tech: [techIcons.mongodb, techIcons.express, techIcons.react, techIcons.nodejs, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/velochat-fullstack-webApp',
    demoUrl: 'https://velochat.vercel.app',
    postmanUrl: '',
  },
  {
    id: 2,
    image: './images/rinema.png',
    tech: [techIcons.php, techIcons.laravel, techIcons.tailwindcss, techIcons.mysql],
    githubUrl: 'https://github.com/ichramsyah/rinema-fullstack-webApp',
    demoUrl: 'https://rinemaa.paramadina.ac.id',
    postmanUrl: '',
  },
  {
    id: 7,
    image: './images/bebasblog-backend.jpeg',
    tech: [techIcons.mongodb, techIcons.typescript, techIcons.express, techIcons.nodejs],
    githubUrl: 'https://github.com/ichramsyah/bebasblog-backend',
    demoUrl: '',
    postmanUrl: `https://ichramsyah.postman.co/workspace/ichramsyah's-Workspace~79410002-fbc3-42b3-8244-d6e51e95ade6/collection/44849239-3e527de1-9579-47d2-9ef5-c0fde29019ce?action=share&creator=44849239`,
  },
  {
    id: 3,
    image: './images/rinema-rebuild.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/rinema-frontend-rebuild-filmPage',
    demoUrl: 'https://rinema-frontend-rebuild-film-page.vercel.app/',
    postmanUrl: '',
  },
  {
    id: 4,
    image: './images/portfolio-dashboard.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/portfolio-dashboard-style',
    demoUrl: 'http://ichram-portfolio-v2.vercel.app/',
    postmanUrl: '',
  },
  {
    id: 5,
    image: './images/portfolio-landingpage.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/portfolio-landingpage-style',
    demoUrl: 'https://ichram-portofolio.vercel.app/',
    postmanUrl: '',
  },
  {
    id: 6,
    image: 'https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg',
    tech: [techIcons.nodejs, techIcons.express],
    githubUrl: 'https://github.com/ichramsyah/RESTful-API-notes-backend',
    demoUrl: '',
    postmanUrl: '',
  },
];
