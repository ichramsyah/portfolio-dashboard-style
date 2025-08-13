import { motion } from 'framer-motion';

const techStack = [
  'React',
  'Node.js',
  'Next.js',
  'Express.js',
  'PHP',
  'Laravel',
  'Python',
  'Javascript',
  'Typescript',
  'CSS3',
  'HTML5',
  'Tailwind CSS',
  'Bootstrap',
  'MySQL',
  'MongoDB',
  'Git',
  'Postman',
  'Figma',
  'Adobe Illustrator',
  'Cloudinary',
  'Axios',
  'JWT',
  'Framer Motion',
  'React Router',
  'Vite',
];

const iconMap = {
  React: <img src="https://cdn.simpleicons.org/react" alt="React" className="w-[22px] " />,
  'Node.js': <img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" className="w-[22px] " />,
  'Next.js': <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Next.js" className="w-[22px] " />,
  'Express.js': <img src="https://cdn.simpleicons.org/express" alt="Express.js" className="w-[22px] " />,
  PHP: <img src="https://cdn.simpleicons.org/php" alt="PHP" className="w-[22px] " />,
  Laravel: <img src="https://cdn.simpleicons.org/laravel" alt="Laravel" className="w-[22px] " />,
  Python: <img src="https://www.svgrepo.com/show/452091/python.svg" alt="Python" className="w-[22px] " />,
  Javascript: <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="w-[22px] " />,
  Typescript: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="Typescript" className="w-[22px] " />,
  CSS3: <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="CSS" className="w-[22px] " />,
  HTML5: <img src="https://cdn.simpleicons.org/html5" alt="HTML" className="w-[22px] " />,
  'Tailwind CSS': <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="w-[22px] " />,
  Bootstrap: <img src="https://cdn.simpleicons.org/bootstrap" alt="Bootstrap" className="w-[22px] " />,
  MySQL: <img src="https://cdn.simpleicons.org/mysql" alt="MySQL" className="w-[22px] " />,
  MongoDB: <img src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" className="w-[22px] " />,
  Git: <img src="https://cdn.simpleicons.org/git" alt="Git" className="w-[22px] " />,
  Postman: <img src="https://cdn.simpleicons.org/postman" alt="Postman" className="w-[22px] " />,
  Figma: <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="Figma" className="w-[22px] " />,
  'Adobe Illustrator': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png" alt="Adobe Illustrator" className="w-[22px] " />,
  Cloudinary: <img src="https://canada1.discourse-cdn.com/flex029/uploads/tableforums/original/2X/3/39a5db440cc04f1b34010e7bb0e4658c01a0a898.png" alt="Cloudinary" className="w-[22px] " />,
  Axios: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/2560px-Axios_%28computer_library%29_logo.svg.png" alt="Axios" className="w-[22px] " />,
  JWT: <img src="https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png" alt="JWT" className="w-[22px] " />,
  'Framer Motion': <img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="Framer Motion" className="w-[22px] " />,
  'React Router': <img src="https://www.svgrepo.com/show/354262/react-router.svg" alt="React Router" className="w-[22px] " />,
  Vite: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png" alt="" className="w-[22px] " />,
};

const TechStackItem = ({ tech }) => (
  <span
    className="flex-shrink-0 flex items-center gap-2 px-[20px] py-2 
    bg-whitee dark:bg-gray-8 
    border border-gray-2 dark:border-gray-7 
    rounded-full text-[15px] font-medium 
    text-gray-7 dark:text-gray-3 mr-3 
    transition-transform duration-300 hover:inset-shadow-sm hover:inset-shadow-gray-2 dark:hover:inset-shadow-gray-9
"
  >
    {iconMap[tech]}
    {tech}
  </span>
);

const TechStackMarquee = () => {
  return (
    <div className="">
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-right">
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <TechStackItem key={index} tech={tech} />
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden whitespace-nowrap mt-3">
        <div className="animate-marquee-left">
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <TechStackItem key={index} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackMarquee;
