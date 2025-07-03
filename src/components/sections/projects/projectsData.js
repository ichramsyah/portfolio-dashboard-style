import { techIcons } from '../../common/techIcons';

export const categories = ['all', 'Fullstack', 'Frontend', 'Backend'];

export const projects = [
  {
    id: 4,
    image: './images/portfolio-dashboard.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/portfolio-dashboard-style',
    demoUrl: 'http://ichram-portfolio-v2.vercel.app/',
  },
  {
    id: 2,
    image: '/images/rinema.png',
    tech: [techIcons.php, techIcons.laravel, techIcons.tailwindcss, techIcons.mysql],
    githubUrl: 'https://github.com/ichramsyah/rinema-fullstack-webApp',
    demoUrl: 'https://rinemaa.paramadina.ac.id',
  },
  {
    id: 1,
    image: 'https://i.ytimg.com/vi/2FnM3nW0jvQ/hq720.jpg',
    tech: [techIcons.mongodb, techIcons.express, techIcons.react, techIcons.nodejs, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/velochat-fullstack-webApp',
    demoUrl: 'https://youtu.be/2FnM3nW0jvQ?feature=shared',
  },

  {
    id: 3,
    image: './images/rinema-rebuild.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/rinema-frontend-rebuild-filmPage',
    demoUrl: 'https://rinema-frontend-rebuild-film-page.vercel.app/',
  },

  {
    id: 5,
    image: './images/portfolio-landingpage.png',
    tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
    githubUrl: 'https://github.com/ichramsyah/rinema-frontend-rebuild-filmPage',
    demoUrl: 'https://rinema-frontend-rebuild-film-page.vercel.app/',
  },
];
