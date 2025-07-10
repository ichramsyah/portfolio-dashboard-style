import { techIcons } from '../../common/techIcons';

export const categories = ['all', 'Fullstack', 'Frontend', 'Backend'];

export const projects = [
  {
    id: 1,
    image: './images/velochat.png',
    tech: [techIcons.mongodb, techIcons.express, techIcons.react, techIcons.nodejs, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/velochat-fullstack-webApp',
    demoUrl: 'https://velochat.vercel.app',
  },
  {
    id: 2,
    image: './images/rinema.png',
    tech: [techIcons.php, techIcons.laravel, techIcons.tailwindcss, techIcons.mysql],
    githubUrl: 'https://github.com/ichramsyah/rinema-fullstack-webApp',
    demoUrl: 'https://rinemaa.paramadina.ac.id',
  },
  {
    id: 3,
    image: './images/rinema-rebuild.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/rinema-frontend-rebuild-filmPage',
    demoUrl: 'https://rinema-frontend-rebuild-film-page.vercel.app/',
  },
  {
    id: 4,
    image: './images/portfolio-dashboard.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/portfolio-dashboard-style',
    demoUrl: 'http://ichram-portfolio-v2.vercel.app/',
  },
  {
    id: 5,
    image: './images/portfolio-landingpage.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/portfolio-landingpage-style',
    demoUrl: 'https://ichram-portofolio.vercel.app/',
  },
  {
    id: 6,
    image: 'https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg',
    tech: [techIcons.nodejs, techIcons.express],
    githubUrl: 'https://github.com/ichramsyah/RESTful-API-notes-backend',
    demoUrl: '',
  },
];
