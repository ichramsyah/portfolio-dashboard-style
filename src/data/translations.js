export const translations = {
  // English
  en: {
    notification: {
      signIn: 'Welcome',
      signOut: 'Successfully signed out!',
      error: 'An error occurred. Please try again.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      achievements: 'Achievements',
      projects: 'Projects',
      chatroom: 'Chat Room',
      aichat: 'AI Assistant',
      contact: 'Contact',
      copyright1: 'Copyright © 2025',
      copyright2: 'Ichramsyah. All rights reserved.',
      view: 'View',
    },
    home: {
      greeting: "Hello, I'm Ichramsyah Abdurrachman",
      religion: 'from Jakarta, Indonesia',
      description:
        'Full-Cycle DevSecOps Engineer focused on building secure, scalable, and reliable end-to-end solutions. Experienced in managing the entire development lifecycle—from coding, security hardening, cloud provisioning, and automation to deployment and monitoring. Adept at transforming complex requirements into robust, scalable, and easily operable systems. Committed to clean architecture, comprehensive security, and effective cross-functional collaboration.',
      skills: 'Skills',
      skills_paragraph: 'My professional skills.',
      githubcontribution: 'GitHub Contributions',
      githubcontribution_paragraph: 'My GitHub activity over the past year.',
      githubcontribution_total: 'Total',
      githubcontribution_week: 'Week',
      githubcontribution_best: 'Best',
      githubcontribution_average: 'Average',
      githubcontribution_day: 'day',
      bannerH: 'Start chatting with Hailyo, ichramsyah personal AI assistant',
      bannerBtn: 'Try Now',
      service: 'Featured',
      services_paragraph: 'Explore everything I’ve crafted, contributed, and accomplished.',
      service_skills_tools: 'Skills & Tools',
      service_skills_tools_desc: 'A collection of my technical skills and tools.',
      service_about: 'About me',
      service_about_desc: 'A brief introduction about myself.',
      service_project: 'Project Showcase',
      service_project_desc: 'A selection of real apps built to solve real problems.',
      service_services: 'Services',
      service_services_desc: 'A brief overview of the services offered.',
      service_chatroom: 'Chat Room',
      service_chatroom_desc: 'Join the conversation and connect with others.',
      service_achievements: 'Achievements.',
      service_achievements_desc: 'A brief overview of my achievements.',
    },
    about: {
      title: 'About Me',
      bio: `Hello, I’m Ichram! I am a Full-Cycle DevSecOps Engineer focused on building secure, scalable, and operationally friendly end-to-end solutions. My background as a software engineer has given me a strong foundation in building applications from both the frontend and backend. Over time, I expanded my scope to include cloud infrastructure, automation, and system security. It was through this journey that I discovered a deep passion for the Full-Cycle DevSecOps approach, where every stage—from development to operations—is handled comprehensively within a single, integrated workflow.

I thoroughly enjoy the process of building systems from the ground up: writing application code, provisioning servers on AWS EC2, implementing security hardening and access controls, orchestrating container deployments with Docker, managing reverse proxies with Nginx, and ensuring stability through continuous monitoring and observability. I believe that a system shouldn't just function well; it must be secure, efficient, consistent, and maintainable in the long run.

One of the most defining moments in my professional journey was designing and implementing a Distributed File Integrity Monitoring (FIM) system to monitor five production servers simultaneously. I developed a custom Python-based FIM agent capable of detecting file changes, identifying the user responsible, capturing the command used, and analyzing the execution context. I implemented filtering logic to distinguish normal operations from high-risk activities, including the detection of malicious files and suspicious after-hours behavior. On the server side, I built a Django backend to process and store data from all agents, coupled with a Next.js real-time monitoring dashboard that displays integrity status and server activity with full authentication. I even extended the scope to the application layer by monitoring WordPress activities, such as failed login attempts and suspicious administrative actions, complete with perpetrator IP identification. Furthermore, I have experience executing various system migrations, such as transitioning applications from PM2 to Docker to enhance deployment consistency. I also migrated security log pipelines to SQLite, resulting in a lighter, more stable, and easier-to-manage process for log storage and analysis.

As an engineer, I hold the principle that system quality relies not just on technology, but on the mindset behind it. I strive to write clean code, design solid architectures, prioritize proactive security, and build automation at every step to create efficient and predictable workflows. I believe in the importance of full ownership over what I build, as well as open and constructive cross-disciplinary collaboration.

To me, technology is a space to solve real-world problems and create solutions that last. If you’re interested in discussing DevSecOps, cloud infrastructure, security engineering, or end-to-end system development, I’d love to connect and share insights.`,
      language: 'Language',
      education: 'Education',
      experience: 'Work Experience',
      interests: 'Personal Interests',
      educationItems: [
        {
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          degree: 'Bachelor Degree - Informatic Engineering',
          school: 'Paramadina University',
          year: '2022 - 2026',
          description: 'Focused on software development, algorithms, and information systems.',
          location: '• Jakarta, Indonesia',
        },
      ],
      experienceItems: [
        {
          logo: './images/favicon.png',
          position: 'Private Frontend Mentor',
          company: 'Freelance',
          location: 'Jakarta, Indonesia',
          year: 'Nov 2025 - Now',
          time: '• Ongoing',
          pos: '• Freelance',
          workfrom: '• Hybrid',
          description: '',
          current: false,

          skills: ['React', 'JavaScript', 'Tailwind CSS'],
        },
        {
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          position: 'Full-Cycle DevSecOps Engineer',
          company: 'Directorate of TSI Paramadina University',
          location: 'Jakarta, Indonesia',
          year: 'Sep 2025 - Now',
          time: '• Ongoing',
          pos: '• Internship',
          workfrom: '• Hybrid',
          description:
            'Designed and built a distributed File Integrity Monitoring (FIM) system monitoring five production servers in real-time, utilizing custom Python agents integrated with incron, auditd, and sudoers access controls.\nBuilt Python agents capable of granular file change detection, capturing user identity, command execution details, execution location, and system activity context.\nDeveloped an automated classification engine to distinguish normal operations from risks, including malicious file detection (.php, .exe, .js) and smart noise reduction filters for irrelevant events.\nImplemented detection logic for suspicious after-hours activity, automatically flagging potential insider threats and behavioral anomalies.\nEstablished a monthly data rotation pipeline that exports security logs to CSV and auto-purges obsolete data via scheduled Python scripts (cron), ensuring optimal monitoring performance.\nBuilt a distributed Django-based backend deployed across five servers to process and store monitoring data, implementing secure and structured APIs for dashboard consumption.\nImplemented secure Cross-Domain Authentication using strict Secure Cookies and CORS policies, enabling a seamless Single Sign-On (SSO) experience between the dashboard and backend servers.\nDesigned a centralized Next.js dashboard featuring TypeScript-based Multi-Server API Orchestration for dynamic routing and data normalization, alongside interactive visualizations for real-time attack trends.\nIntegrated a WordPress monitoring module to detect failed logins, suspicious administrative actions, and system file changes, complete with perpetrator IP identification.\nMigrated runtime from PM2 to Docker to enhance deployment consistency and isolation. Migrated log pipelines to SQLite for lighter, more stable, and scalable storage across multi-server environments.\nManaged end-to-end AWS EC2 infrastructure, including server provisioning, security group configuration, user management, firewall setup, and OS hardening.\nDesigned a secure Docker-based deployment infrastructure (DNS, Nginx Reverse Proxy, SSL/TLS), utilizing separate Build-Args and Environment Variables to protect credentials and ensure configuration consistency.\nBuilt GitHub Actions pipelines covering build, test, containerization, and automated deployment to production.\nExecuted the entire project using a Full-Cycle DevSecOps approach, bridging development, security, infrastructure, deployment, and continuous monitoring.',
          current: false,
          skills: ['AWS', 'Linux', 'Docker', 'Ubuntu', 'Nginx', 'Apache', 'PM2', 'Git', 'Python', 'Django', 'Next.js', 'TypeScript'],
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/id/5/5d/Logo_Hino.png',
          position: 'IT Change Management',
          company: 'Head Office PT. Hino Motor Sales Indonesia',
          location: 'Jakarta, Indonesia',
          year: 'Jul 2023 - Nov 2023',
          time: '• 4 Month',
          pos: '• Internship',
          workfrom: '• Onsite',
          description:
            'Collaborated with technical teams to translate complex IT concepts into easily understandable visual content. \nCreated visual documentation and communication materials (such as flyers, animated videos, and presentations) to support IT Change Management initiatives. \nEnsured all communication materials adhered to company branding standards and IT governance. \nUtilized tools such as Canva, Adobe Illustrator, and PowerPoint to produce engaging and informative visuals.',
          current: false,
          skills: ['Adobe Illustrator', 'Canva', 'Doratoon', 'Microsoft PowerPoint', 'Microsoft Word'],
        },
      ],
    },
    achievements: {
      title: 'Achievements',
      description: 'A collection of certificates and achievements that I have obtained throughout my professional journey.',
      all: 'All',
      certifications: 'Certificate',
      other: 'Other',
      items: [
        { type: 'certification', image: 'images/certificate/hackaton.jpg', title: 'Certificate of Participation in the Hackathon Competition', organizer: 'Paramadina University', date: 'Juny 2025' },
        { type: 'certification', image: 'images/certificate/legacyfrontend.png', title: 'Legacy Front End Certification', organizer: 'FreeCodeCamp', date: 'July 2025' },
        { type: 'certification', image: 'images/certificate/frontenddevelopment.png', title: 'Front End Development Libraries Certification', organizer: 'FreeCodeCamp', date: 'July 2025' },
        { type: 'certification', image: 'images/certificate/Sertifikat IBM.png', title: 'Code Generation and Optimization Using IBM Granite Certification', organizer: 'IBM SkillsBuild', date: 'July 2025' },
        { type: 'certification', image: 'images/certificate/javascriptintermediate.jpg', title: 'Javascript Intermediate Certification', organizer: 'Sololearn', date: 'July 2025' },
        { type: 'certification', image: 'images/certificate/javascriptalgorithm.png', title: 'JavaScript Algorithms and Data Structures Certification', organizer: 'FreeCodeCamp', date: 'July 2025' },
        { type: 'other', image: 'images/certificate/IBM Badge.JPG', title: 'Code Generation and Optimization Using IBM Granite Badge', organizer: 'IBM SkillsBuild', date: 'July 2025' },
        { type: 'certification', image: 'images/certificate/responsivewebdesign.png', title: 'Responsive Web Design Certification', organizer: 'FreeCodeCamp', date: 'July 2025' },
        { type: 'other', image: 'images/certificate/jurnal.JPG', title: 'Journal Publications', organizer: 'Jurnal Teknoif Institut Teknologi Padang', date: 'October 2024' },
      ],
    },
    projects: {
      title: 'Projects',
      description: 'Several projects I have worked on, including personal, education, and open source projects.',
      all: 'All',
      Fullstack: 'FullStack',
      Frontend: 'Frontend',
      Backend: 'Backend',
      search: 'Search projects...',

      viewDetails: 'View Details',
      items: [
        {
          id: 1,
          title: 'VeloChat - Realtime Chat Web App',
          description: 'A functional and secure modern messaging application (similar to WhatsApp Web), powered by Socket.IO for instant, low-latency communication.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'VeloChat is an ambitious project to build a functional and feature-rich single-page application (SPA) chat app. This project covers the entire development cycle, from designing a RESTful API backend architecture and real-time connections with Socket.IO (Websockets), to building a reactive and modern frontend interface using React. The main focus of this project is on security (JWT authentication & Google OAuth), user experience features like real-time notifications, typing indicators, read receipts, a responsive layout, and clean, well-structured code quality.',
              htechstack: 'Technologies Used',
              techstack:
                'React, Vite, Tailwind CSS, Zustand, React Router DOM, Axios, Socket.IO Client, @react-oauth/google, react-hot-toast, react-loading-skeleton, date-fns, Node.js, Express.js, Socket.IO, JSON Web Token (JWT), Passport.js (for Google OAuth), Mongoose, Bcrypt.js, Multer, Cloudinary, Express Session, Dotenv, MongoDB Atlas (NoSQL), Google Cloud Platform (OAuth), Cloudinary (Media Storage)',
              hfeat: 'Main Features',
              feat: "Manual registration with email domain validation (@gmail.com)., Secure login system with hashed passwords., Third-party login & registration via Google OAuth 2.0., JWT-based authorization to protect the API., Protected pages accessible only after login., Search for other users by exact email., Friend Request System (Send, Accept, Decline)., Real-time friend request notifications., Dynamic contact list separate from conversations., Contact list search with a debounce feature., Instant one-to-one personal messaging with Socket.IO., Permanently saved message history., 'Typing...' indicator when another user is typing., Unread message notification badge with a count on the conversation list., Read Receipts with 'sent' and 'seen' checkmark icons., Timestamps and Date Dividers (Today, Yesterday, etc.) for chat history clarity., Ability to change profile name., Ability to change account password., Upload and change profile picture with cloud storage (Cloudinary)., Default profile picture for all new users.",
              hlinkyt: 'Demo Video',
              linkyt: 'https://www.youtube.com/embed/2FnM3nW0jvQ?si=ENxc0igjz3ENQXpb',
            },
          ],
        },
        {
          id: 2,
          title: 'Rinema - Indonesian Movie Lovers Social Platform',
          description: 'A comprehensive digital platform for the Indonesian film community, integrating a film database, rating system, and active discussion forums into a single unified ecosystem.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'Rinema is designed as a digital solution for the Indonesian film community, bridging the gap between a complete film database and dynamic social interaction. The project focuses on a seamless User Experience (UX), allowing users to discover movies through advanced search and dynamic filters, while participating in deep discussions via interactive forums. On the technical side, Rinema is built upon a robust backend architecture using Laravel 12, implementing industry-standard security with Role-Based Access Control (RBAC) and Google OAuth integration.',
              htechstack: 'Technology Stack',
              techstack: 'Laravel 12 (PHP), Blade Template, Tailwind CSS, MySQL (Relational DB), RESTful API, Laravel Sanctum.',
              hfeat: 'Key Features',
              feat: 'Advanced film discovery with Query Params and dynamic filters (Popular/Newest/Genre)., Comprehensive and informative film detail database., Interactive Rating & Review system (Star rating + Comments)., Community discussion forum featuring Threads and Nested Replies., Secure authentication via Register/Login (Sanctum/JWT) with Password Hashing., Instant third-party login using Google OAuth., Role-Based Access Control (RBAC) distinguishing User Editor and Admin access., User profile dashboard with rating history and account management., Complete film content management (CRUD) specifically for Editors., Responsive and modern Mobile-First interface design.',
              hlinkyt: 'Demo Video',
              linkyt: '',
            },
          ],
        },
        {
          id: 3,
          title: 'BebasBlog - Secure & Type-Safe Social Media',
          description: 'A comprehensive Fullstack social media platform (Instagram-like), built with strict Type Safety standards using the MERN Stack and end-to-end TypeScript.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'BebasBlog stands as a testament to modern and disciplined Fullstack Engineering. More than just a social media app, this project focuses on scalable and secure code architecture. Built using the TypeScript ecosystem end-to-end (Frontend & Backend) to minimize bugs and ensure data consistency. The Frontend offers an interactive and responsive UX, while the Backend implements a robust MVC architecture with layered security, including Hybrid Authentication and strict data validation. This serves as a real-world simulation of enterprise-grade application development.',
              htechstack: 'Technology Stack',
              techstack: 'TypeScript (End-to-End), React.js, Node.js, Express (MVC), MongoDB (Mongoose), Tailwind CSS, Passport.js (OAuth), Cloudinary.',
              hfeat: 'Key Features',
              feat: 'Full TypeScript implementation across the entire stack for absolute Type Safety., Structured, clean, and maintainable MVC Backend architecture., Hybrid Authentication System: Manual Login (Bcrypt/JWT) & Google OAuth., Cloud Media Management (Cloudinary) for profile and post uploads., Real-time Social Interaction: Post CRUD, Like System, and Comments., Modern & Responsive Interface Design (Mobile-First) with Tailwind CSS., Strict API security with input validation and route protection (Middleware).',
              hlinkyt: 'Demo Video',
              linkyt: '',
            },
          ],
        },
        {
          id: 4,
          title: 'Portfolio Website',
          description: 'A modern SPA-based personal branding platform, featuring a custom personal AI assistant and a realtime global chat feature.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'This portfolio website is built as a high-performance Single Page Application (SPA). Its standout feature is the integration of "Ichram AI," a custom AI model trained via Google AI Studio to intelligently answer visitor questions about my skills and experience. It also features a Global Chatroom enabling realtime visitor interaction. Technically, the site showcases efficient state management, including a custom-built internationalization (i18n) system engineered from scratch using the React Context API.',
              htechstack: 'Technology Stack',
              techstack: 'React.js, Tailwind CSS, Firebase (Realtime DB), Google Gemini API (AI Tuning), Context API (Custom i18n).',
              hfeat: 'Key Features',
              feat: '"Ichram AI" Integration (Custom LLM) trained via Google AI Studio., Realtime Global Chatroom using Firebase Realtime Database., Custom Multi-language System (i18n) built with React Context., Persistent Dynamic Dark and Light Mode support., Responsive UI/UX design with smooth interactive animations., SPA (Single Page Application) architecture for seamless navigation.',
              hlinkyt: 'Demo Video',
              linkyt: '',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Scroll through this page and contact me!',
    },
    chatroom: {
      title: 'Chat Room',
      description: 'Feel free to share your thoughts, suggestions, questions, or anything else!',
      login: "Please sign in to join the conversation. Don't worry, your data is safe with us.",
      login_google: 'Sign in with Google',
      input_form: 'Type your message here...',
      sign_in_as: 'Sign in as',
      exit: 'Exit',
    },
    aiassistant: {
      greeting: 'Hello!👋 I am Hailyo, ichram personal AI assistant.',
      description: 'Personal AI assistant ready to answer questions about Ichram.',
      footer: 'Your privacy is protected. This conversation is temporary and will automatically disappear when the page is reloaded.',
      input: 'Chat with Hailyo...',
    },
  },

  // Indonesia
  id: {
    notification: {
      signIn: 'Selamat datang',
      signOut: 'Berhasil keluar!',
      error: 'Terjadi kesalahan. Silakan coba lagi.',
    },
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      achievements: 'Pencapaian',
      projects: 'Proyek',
      chatroom: 'Ruang Obrolan',
      aichat: 'Asisten AI',
      contact: 'Kontak',
      copyright1: 'Hak Cipta © 2025',
      copyright2: 'Ichramsyah. Semua hak dilindungi undang-undang.',
      view: 'Lihat',
    },
    home: {
      greeting: 'Halo, saya Ichramsyah Abdurrachman',
      religion: 'berasal Jakarta, Indonesia',
      description:
        'Full-Cycle DevSecOps Engineer yang berfokus pada pembangunan solusi end-to-end yang aman, scalable, dan reliabel. Berpengalaman mengelola seluruh siklus hidup pengembangan—mulai dari coding, security hardening, cloud provisioning, automation, hingga deployment dan monitoring. Mengubah kebutuhan kompleks menjadi sistem yang kuat, terukur, dan mudah dioperasikan. Berkomitmen pada arsitektur yang bersih, keamanan yang menyeluruh, dan kolaborasi lintas fungsi yang efektif.',
      skills: 'Keahlian',
      skills_paragraph: 'Keahlian profesional saya.',
      githubcontribution: 'Kontribusi GitHub',
      githubcontribution_paragraph: 'Aktivitas GitHub saya selama setahun terakhir.',
      githubcontribution_total: 'Total',
      githubcontribution_week: 'Minggu',
      githubcontribution_best: 'Terbaik',
      githubcontribution_average: 'Rata-rata',
      githubcontribution_day: 'hari',
      bannerH: 'Mulai chat dengan Hailyo, AI asisten pribadi ichramsyah',
      bannerBtn: 'Coba Sekarang',
      service: 'Unggulan',
      services_paragraph: 'Jelajahi semua yang telah saya buat, kontribusikan, dan capai.',
      service_skills_tools: 'Keahlian & Alat',
      service_skills_tools_desc: 'Kumpulan keahlian dan alat teknis saya.',
      service_about: 'Tentang Saya',
      service_about_desc: 'Perkenalan singkat tentang diri saya.',
      service_project: 'Pameran Proyek',
      service_project_desc: 'Pilihan aplikasi nyata yang dibuat untuk menyelesaikan masalah nyata.',
      service_services: 'Layanan',
      service_services_desc: 'Gambaran singkat tentang layanan yang ditawarkan.',
      service_chatroom: 'Ruang Obrolan',
      service_chatroom_desc: 'Bergabunglah dalam percakapan dan terhubung dengan orang lain.',
      service_achievements: 'Pencapaian',
      service_achievements_desc: 'Gambaran singkat tentang pencapaian saya.',
    },
    about: {
      title: 'Tentang Saya',
      bio: `Halo, saya Ichram! Saya seorang Full-Cycle DevSecOps Engineer yang berfokus pada pembangunan solusi end-to-end yang aman, scalable, dan mudah dioperasikan. Latar belakang saya sebagai software engineer membuat saya terbiasa membangun aplikasi dari sisi frontend maupun backend, namun seiring waktu saya berkembang ke ranah yang lebih luas—mencakup cloud infrastructure, automation, dan keamanan sistem. Dari pengalaman itulah saya menemukan ketertarikan mendalam pada pendekatan Full-Cycle DevSecOps, di mana setiap tahap dari pengembangan hingga operasional dapat ditangani secara menyeluruh dalam satu alur kerja yang terintegrasi.

Saya menikmati proses membangun sistem dari dasar, mulai dari menulis kode aplikasi, menyiapkan server di AWS EC2, melakukan hardening dan pengamanan akses, mengatur container deployment dengan Docker, mengelola reverse proxy dengan Nginx, hingga memastikan semua layanan berjalan stabil melalui monitoring dan observasi berkelanjutan. Saya percaya bahwa sebuah sistem tidak hanya harus berfungsi dengan baik, tetapi juga harus aman, efisien, konsisten, dan mudah dipelihara dalam jangka panjang.

Salah satu pengalaman paling berkesan dalam perjalanan profesional saya adalah ketika saya merancang dan mengimplementasikan sebuah distributed File Integrity Monitoring (FIM) system yang berfungsi memantau lima server produksi secara bersamaan. Saya mengembangkan custom FIM agent berbasis Python yang mampu mendeteksi perubahan file, mengidentifikasi siapa yang melakukan perubahan, command apa yang digunakan, dan konteks eksekusinya. Sistem tersebut saya lengkapi dengan filtering untuk memisahkan perubahan normal dari aktivitas berisiko, termasuk pendeteksian file berbahaya serta aktivitas mencurigakan di luar jam kerja. Di sisi server utama, saya membangun backend berbasis Django untuk mengolah dan menyimpan data dari seluruh agent, kemudian menyediakan dashboard monitoring real-time menggunakan Next.js yang menampilkan status integritas dan aktivitas server dengan otentikasi penuh. Saya juga memperluas cakupan pengawasan hingga ke lapisan aplikasi dengan memonitor aktivitas WordPress seperti percobaan login gagal dan tindakan administratif yang mencurigakan beserta identitas IP pelakunya. Selain itu, saya juga berpengalaman melakukan berbagai migrasi sistem seperti transisi aplikasi dari PM2 ke Docker untuk meningkatkan konsistensi deployment, serta memigrasikan pipeline log keamanan ke SQLite agar proses penyimpanan dan analisis log menjadi lebih ringan, stabil, dan mudah dikelola.

Sebagai engineer, saya memegang prinsip bahwa kualitas sistem tidak hanya bergantung pada teknologi, tetapi juga pada cara berpikir di baliknya. Saya selalu berusaha menulis kode yang bersih, merancang arsitektur yang solid, mengedepankan keamanan secara proaktif, dan membangun automasi di setiap langkah untuk menciptakan proses kerja yang efisien dan dapat diprediksi. Saya percaya pada pentingnya ownership penuh terhadap apa yang saya bangun, serta kolaborasi lintas disiplin yang terbuka dan konstruktif.

Bagi saya, teknologi adalah ruang untuk menyelesaikan masalah nyata dan menciptakan sesuatu yang bertahan lama. Jika kamu tertarik berdiskusi tentang DevSecOps, cloud infrastructure, security engineering, atau pengembangan sistem end-to-end, saya selalu senang untuk terhubung dan berbagi wawasan.`,
      language: 'Bahasa',
      education: 'Pendidikan',
      experience: 'Pengalaman Kerja',
      interests: 'Minat Pribadi',
      educationItems: [
        {
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          degree: 'Gelar Sarjana - Teknik Informatika',
          school: 'Universitas Paramadina',
          year: '2022 - 2026',
          description: 'Fokus pada pengembangan perangkat lunak, algoritma, dan sistem informasi.',
          location: '• Jakarta, Indonesia',
        },
      ],
      experienceItems: [
        {
          logo: './images/favicon.png',
          position: 'Private Frontend Mentor',
          company: 'Freelance',
          location: 'Jakarta, Indonesia',
          year: 'Nov 2025 - Sekarang',
          time: '• Berlangsung',
          pos: '• Freelance',
          workfrom: '• Gabungan',
          description: '',
          current: false,

          skills: ['React', 'JavaScript', 'Tailwind CSS'],
        },
        {
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          position: 'Full-Cycle DevSecOps Engineer',
          company: 'Direktorat TSI Universitas Paramadina',
          location: 'Jakarta, Indonesia',
          year: 'Sep 2025 - Sekarang',
          time: '• Berlangsung',
          pos: '• Magang',
          workfrom: '• Gabungan',
          description:
            'Merancang dan membangun distributed File Integrity Monitoring (FIM) system yang memantau lima server produksi secara real-time dengan agen Python kustom yang terintegrasi dengan incron, auditd, dan kontrol akses berbasis sudoers. \nMembangun agen Python yang mampu mendeteksi perubahan file secara detail, termasuk informasi siapa yang mengubah, command apa yang dijalankan, lokasi eksekusi, serta konteks aktivitas pengguna di sistem. \nMengembangkan sistem klasifikasi otomatis untuk membedakan perubahan normal dan aktivitas berisiko, termasuk deteksi file berbahaya (.php, .exe, .js, dan lain-lain) serta filter smart noise reduction untuk event yang tidak relevan. \nMengimplementasikan deteksi aktivitas mencurigakan di luar jam kerja, termasuk flagging otomatis untuk potensi insider threat dan anomali perilaku pengguna. \nMengimplementasikan monthly data rotation pipeline yang mengekspor log keamanan ke CSV dan secara otomatis menghapus data usang melalui Python script terjadwal (cron), memastikan performa dan stabilitas sistem monitoring tetap optimal. \nMembangun backend berbasis Django yang di-deploy ke lima server berbeda untuk menerima, mengolah, dan menyimpan data monitoring secara terdistribusi. menerapkan API untuk konsumsi dashboard secara aman dan terstruktur. \nMengimplementasikan mekanisme autentikasi lintas-domain (Cross-Domain Authentication) yang aman menggunakan konfigurasi Secure Cookies dan CORS Policy yang ketat, memungkinkan Single Sign-On (SSO) experience antara dashboard monitoring dan backend server. \nMerancang dashboard Next.js terpusat dengan arsitektur Multi-Server API Orchestration berbasis TypeScript untuk routing dinamis dan normalisasi data, serta mengimplementasikan visualisasi data interaktif untuk memantau tren serangan dan integritas sistem secara real-time. \nMenambahkan modul pemantauan aktivitas WordPress, meliputi deteksi login gagal, tindakan administratif mencurigakan, perubahan file sistem WP, serta identifikasi alamat IP pengguna yang terlibat dalam event berisiko. \nMelakukan migrasi runtime dari PM2 ke Docker, meningkatkan konsistensi deployment, isolasi environment, dan portabilitas aplikasi lintas server. Memigrasikan pipeline log dari format lama menuju SQLite untuk penyimpanan yang lebih stabil, ringan, dan mudah dievaluasi pada skala multi-server. \n Menangani seluruh proses infrastruktur AWS EC2, termasuk provisioning server, konfigurasi security group, pembuatan user terpisah, firewall, OS hardening, dan pengamanan akses. \nMerancang infrastruktur deployment yang aman (DNS, Nginx Reverse Proxy, SSL/TLS) dan teroptimasi pada Docker, dengan menerapkan strategi pemisahan Build-Args dan Environment Variables untuk menjaga keamanan kredensial serta konsistensi konfigurasi antar-server. \nMembangun pipeline CI/CD GitHub Actions mencakup build, test, containerization, hingga deployment otomatis ke server produksi. \nMenyelesaikan keseluruhan proyek secara end-to-end menggunakan pendekatan Full-Cycle DevSecOps, mencakup development, security, infrastructure, deployment, dan monitoring berkelanjutan.',
          current: false,

          skills: ['AWS', 'Linux', 'Docker', 'Ubuntu', 'Nginx', 'Apache', 'PM2', 'Git', 'Python', 'Django', 'Next.js', 'TypeScript'],
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/id/5/5d/Logo_Hino.png',
          position: 'IT Change Management',
          company: 'Head Office PT. Hino Motor Sales Indonesia',
          location: 'Jakarta, Indonesia',
          year: 'Jul 2023 - Nov 2023',
          time: '• 4 Bulan',
          pos: '• Magang',
          workfrom: '• Di tempat',
          description:
            'Bekerja sama dengan tim teknis untuk menerjemahkan konsep IT yang kompleks menjadi konten visual yang mudah dipahami.\nMembuat dokumentasi visual dan materi komunikasi (seperti flyer, video animasi, dan presentasi) untuk mendukung inisiatif IT Change Management. \nMemastikan semua materi komunikasi sesuai dengan standar branding perusahaan dan tata kelola IT. \nMenggunakan tools seperti Canva, Adobe Illustrator, dan PowerPoint untuk membuat visual yang menarik dan informatif.',
          current: false,
          skills: ['Adobe Illustrator', 'Canva', 'Doratoon', 'Microsoft PowerPoint', 'Microsoft Word'],
        },
      ],
    },
    achievements: {
      title: 'Prestasi',
      description: 'Kumpulan sertifikat dan prestasi yang saya peroleh sepanjang perjalanan profesional saya.',
      all: 'Semua',
      certifications: 'Sertifikat',
      other: 'lainnya',
      items: [
        { type: 'certification', image: 'images/certificate/hackaton.jpg', title: 'Sertifikat Apresiasi Partisipasi Lomba Hackathon', organizer: 'Universitas Paramadina', date: 'Juni 2025' },
        { type: 'certification', image: 'images/certificate/legacyfrontend.png', title: 'Sertifikat Legacy Front End', organizer: 'FreeCodeCamp', date: 'Juli 2025' },
        { type: 'certification', image: 'images/certificate/frontenddevelopment.png', title: 'Sertifikat Front End Development Libraries', organizer: 'FreeCodeCamp', date: 'Juli 2025' },
        { type: 'certification', image: 'images/certificate/Sertifikat IBM.png', title: 'Sertifikat Code Generation and Optimization Using IBM Granite', organizer: 'IBM SkillsBuild', date: 'Juli 2025' },
        { type: 'certification', image: 'images/certificate/javascriptintermediate.jpg', title: 'Sertifikat Javascript Intermediate', organizer: 'Sololearn', date: 'Juli 2025' },
        { type: 'certification', image: 'images/certificate/javascriptalgorithm.png', title: 'Sertifikat JavaScript Algorithms and Data Structures', organizer: 'FreeCodeCamp', date: 'Juli 2025' },
        { type: 'other', image: 'images/certificate/IBM Badge.JPG', title: 'Code Generation and Optimization Using IBM Granite Badge', organizer: 'IBM SkillsBuild', date: 'July 2025' },
        { type: 'certification', image: 'images/certificate/responsivewebdesign.png', title: 'Sertifikat Responsive Web Design', organizer: 'FreeCodeCamp', date: 'Juli 2025' },
        {
          type: 'other',
          image: 'images/certificate/jurnal.JPG',
          title: 'Publikasi Journal',
          organizer: 'Jurnal Teknoif Institut Teknologi Padang',
          date: 'Oktober 2024',
        },
      ],
    },
    projects: {
      title: 'Proyek',
      description: 'Beberapa proyek yang telah saya kerjakan, baik proyek pribadi maupun pendidikan',
      all: 'Semua',
      Fullstack: 'Fullstack',
      Frontend: 'Frontend',
      Backend: 'Backend',
      search: 'Cari proyek...',

      viewDetails: 'Lihat Detail',
      items: [
        {
          id: 1,
          title: 'VeloChat - Aplikasi Web Chat Realtime',
          description: 'Aplikasi percakapan modern (mirip WhatsApp Web) yang fungsional dan aman, ditenagai oleh Socket.IO untuk komunikasi instan dan latensi rendah.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'VeloChat adalah sebuah proyek ambisius untuk membangun aplikasi percakapan single-page application (SPA) yang fungsional dan kaya fitur. Proyek ini mencakup seluruh siklus pengembangan, mulai dari desain arsitektur backend RESTful APIs dan koneksi real-time dengan Socket.IO (Websocket), hingga pembangunan antarmuka frontend yang reaktif dan modern menggunakan React Javascript. Fokus utama proyek ini adalah pada keamanan (autentikasi JWT & Google OAuth), pengalaman pengguna seperti notifikasi real-time, indikator typing, pesan terbaca, tampilan responsif, dan kualitas kode yang bersih dan terstruktur.',
              htechstack: 'Teknologi yang digunakan',
              techstack:
                'React, Vite, Tailwind CSS, Zustand, React Router DOM, Axios, Socket.IO Client, @react-oauth/google, react-hot-toast, react-loading-skeleton, date-fns, Node.js, Express.js, Socket.IO, JSON Web Token (JWT), Passport.js (untuk Google OAuth), Mongoose, Bcrypt.js, Multer, Cloudinary, Express Session, Dotenv, MongoDB Atlas (NoSQL), Google Cloud Platform (OAuth), Cloudinary (Media Storage)',
              hfeat: 'Fitur Utama',
              feat: 'Registrasi manual dengan validasi domain email (@gmail.com)., Sistem login aman dengan password yang di-hash. ,Login & Registrasi pihak ketiga via Google OAuth 2.0., Otorisasi berbasis JWT (JSON Web Tokens) untuk melindungi API., Halaman terproteksi yang hanya bisa diakses setelah login., Pencarian pengguna lain berdasarkan email yang tepat., Sistem Permintaan Pertemanan (Mengirim, Menerima, Menolak)., Notifikasi permintaan pertemanan secara real-time., Daftar Kontak yang dinamis dan terpisah dari percakapan., Pencarian daftar kontak dengan fitur debounce.,Komunikasi pesan personal (one-to-one) secara instan dengan Socket.IO., Riwayat pesan yang tersimpan permanen., Indikator "Typing..." saat pengguna lain sedang mengetik., Notifikasi Pesan Belum Dibaca berupa badge angka di daftar percakapan., Tanda Pesan Terbaca (Read Receipts) dengan ikon centang terkirim dan dilihat., Stempel Waktu dan Pembatas Tanggal (Hari Ini, Kemarin, dll.) untuk kejelasan riwayat chat., Kemampuan untuk mengubah nama profil., Kemampuan untuk mengubah password akun., Mengunggah dan mengubah foto profil dengan penyimpanan di layanan cloud (Cloudinary)., Foto profil default untuk semua pengguna baru. ',
              hlinkyt: 'Demo Video',
              linkyt: 'https://www.youtube.com/embed/2FnM3nW0jvQ?si=ENxc0igjz3ENQXpb',
            },
          ],
        },
        {
          id: 2,
          title: 'Rinema - Platform Sosial Pecinta Film Indonesia',
          description: 'Platform digital komunitas pecinta film Indonesia yang komprehensif, menggabungkan basis data film, sistem rating, dan forum diskusi aktif dalam satu ekosistem terintegrasi.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'Rinema dirancang sebagai solusi digital untuk komunitas perfilman di Indonesia, menjembatani kebutuhan akan basis data film yang lengkap dengan interaksi sosial yang dinamis. Proyek ini berfokus pada pengalaman pengguna (UX) yang mulus, memungkinkan pengguna untuk menemukan film melalui pencarian canggih dan filter dinamis, serta berpartisipasi dalam diskusi mendalam melalui forum interaktif. Di sisi teknis, Rinema dibangun dengan arsitektur backend yang kokoh menggunakan Laravel 12, menerapkan keamanan standar industri dengan Role-Based Access Control (RBAC) dan integrasi Google OAuth.',
              htechstack: 'Teknologi yang digunakan',
              techstack: 'Laravel 12 (PHP), Blade Template, Tailwind CSS, MySQL (Relational DB), RESTful API, Laravel Sanctum.',
              hfeat: 'Fitur Utama',
              feat: 'Pencarian film canggih dengan Query Params dan filter dinamis (Terpopuler/Terbaru/Genre)., Basis data detail film yang lengkap dan informatif., Sistem Rating & Review interaktif (Star rating + Komentar)., Forum diskusi komunitas dengan fitur Thread dan Nested Replies., Autentikasi aman via Register/Login (Sanctum/JWT) dengan Password Hashing., Login instan pihak ketiga menggunakan Google OAuth., Role-Based Access Control (RBAC) membedakan akses User Editor dan Admin., Dashboard profil user dengan histori rating dan manajemen akun., Manajemen konten film (CRUD) lengkap khusus untuk Editor., Desain antarmuka Mobile-First yang responsif dan modern.',
              hlinkyt: 'Demo Video',
              linkyt: '',
            },
          ],
        },
        {
          id: 3,
          title: 'BebasBlog - Secure & Type-Safe Social Media',
          description: 'Platform media sosial Fullstack yang komprehensif, dibangun dengan standar Type Safety ketat menggunakan MERN Stack dan TypeScript end-to-end.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'BebasBlog adalah pembuktian kemampuan Fullstack Engineering yang modern. Proyek ini berfokus pada arsitektur kode yang scalable dan aman. Dibangun menggunakan ekosistem TypeScript secara menyeluruh (Frontend & Backend) untuk meminimalisir bug. Backend menerapkan arsitektur MVC yang kokoh dengan sistem keamanan berlapis, manajemen media cloud, dan logika bisnis sosial yang kompleks.',
              htechstack: 'Teknologi yang digunakan',
              techstack: 'TypeScript (End-to-End), React.js, Node.js, Express (MVC), MongoDB (Mongoose), Tailwind CSS, Passport.js (OAuth), Cloudinary.',
              hfeat: 'Fitur Utama',
              feat: 'Sistem Registrasi & Login Manual aman dengan hashing password (Bcrypt) dan validasi input., Login Instan pihak ketiga menggunakan Google OAuth 2.0 (Passport.js)., Keamanan Endpoint API menggunakan verifikasi JSON Web Token (JWT)., Manajemen Profil Pengguna lengkap (Update Foto Bio Email Password)., Sistem CRUD Postingan interaktif dengan dukungan upload gambar., Integrasi Cloudinary via Middleware Multer untuk validasi dan penyimpanan media cloud., Fitur Interaksi Sosial Real-time: Sistem Like dan Komentar pada postingan., Implementasi End-to-End TypeScript untuk integritas kode frontend dan backend.',
              hlinkyt: 'Demo Video',
              linkyt: '',
            },
          ],
        },
        {
          id: 4,
          title: 'Portofolio Website',
          description: 'Platform personal branding interaktif berbasis SPA yang modern, dilengkapi asisten AI pribadi dan fitur obrolan realtime global.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'Website portofolio ini dibangun sebagai Single Page Application (SPA) yang cepat dan responsif tanpa reload. Fitur unggulannya adalah integrasi "Ichram AI", sebuah model kecerdasan buatan yang dilatih khusus menggunakan Google AI Studio untuk menjawab pertanyaan pengunjung mengenai pengalaman dan keahlian saya secara interaktif. Selain itu, terdapat fitur Global Chatroom yang memungkinkan pengunjung berkomunikasi secara realtime. Dari sisi teknis, website ini menerapkan sistem manajemen state yang efisien, termasuk implementasi fitur multi-bahasa (i18n) yang dibangun dari nol menggunakan React Context API.',
              htechstack: 'Teknologi yang digunakan',
              techstack: 'React.js, Tailwind CSS, Firebase (Realtime DB), Google Gemini API (AI Tuning), Context API (Custom i18n).',
              hfeat: 'Fitur Utama',
              feat: 'Integrasi "Ichram AI" (Custom LLM) yang dilatih via Google AI Studio., Global Chatroom Realtime menggunakan Firebase Realtime Database., Sistem Multi-bahasa (i18n) Custom yang dibangun dengan React Context., Dukungan Tema Gelap (Dark Mode) dan Terang yang persisten., Desain UI/UX Responsif dan interaktif dengan animasi halus., Arsitektur SPA (Single Page Application) untuk navigasi instan.',
              hlinkyt: 'Demo Video',
              linkyt: '',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'Kontak',
      description: 'Scroll halaman ini dan hubungi saya!',
    },
    chatroom: {
      title: 'Ruang Obrolan',
      description: 'Silakan bagikan pemikiran, saran, pertanyaan, atau apa pun yang Anda inginkan!',
      login: 'Silakan masuk untuk bergabung dalam percakapan. Jangan khawatir, data Anda aman bersama kami.',
      login_google: 'Masuk dengan Google',
      input_form: 'Ketik pesan Anda di sini...',
      sign_in_as: 'Masuk sebagai',
      exit: 'Keluar',
    },
    aiassistant: {
      greeting: 'Halo!👋 Aku Hailyo, asisten virtual Ichram.',
      description: 'Asisten AI pribadi yang siap menjawab pertanyaan seputar Ichram.',
      footer: 'Privasi Anda terjaga. Percakapan ini bersifat sementara dan akan hilang otomatis saat halaman dimuat ulang.',
      input: 'Tanya Hailyo...',
    },
  },
  jp: {
    notification: {
      signIn: 'ようこそ',
      signOut: 'ログアウトに成功しました！',
      error: 'エラーが発生しました。もう一度お試しください。',
    },
    nav: {
      home: 'ホーム',
      about: '自己紹介',
      achievements: '実績',
      projects: 'プロジェクト',
      chatroom: 'チャットルーム',
      aichat: 'AIアシスタント',
      contact: 'お問い合わせ',
      copyright1: '著作権 © 2025',
      copyright2: 'Ichramsyah. 全ての権利を保有します。',
      view: '表示',
    },
    home: {
      greeting: 'こんにちは、イクラムシャ・アブドゥラックマンです',
      religion: 'インドネシア、ジャカルタ出身',
      description:
        '安全でスケーラブル、かつ信頼性の高いエンドツーエンドソリューションの構築に注力するフルサイクルDevSecOpsエンジニア。コーディング、セキュリティ強化（Hardening）、クラウドプロビジョニング、自動化、デプロイから監視に至るまで、開発ライフサイクル全体の管理に豊富な経験を持つ。複雑な要件を、堅牢で拡張性が高く、運用しやすいシステムへと変革することを得意とする。クリーンアーキテクチャ、包括的なセキュリティ対策、そして効果的な部門間連携（クロスファンクショナル・コラボレーション）にコミットしている',
      skills: 'スキル',
      skills_paragraph: '私のプロフェッショナルスキル。',
      githubcontribution: 'GitHubでの貢献',
      githubcontribution_paragraph: '過去1年間の私のGitHubアクティビティ。',
      githubcontribution_total: '合計',
      githubcontribution_week: '週',
      githubcontribution_best: 'ベスト',
      githubcontribution_average: '平均',
      githubcontribution_day: '日',
      bannerH: 'IchramsyahのパーソナルAIアシスタント、Hailyoとのチャットを開始しましょう',
      bannerBtn: '今すぐ試す',
      service: '特集',
      services_paragraph: '私が作成、貢献、達成したすべてをご覧ください。',
      service_skills_tools: 'スキルとツール',
      service_skills_tools_desc: '私の技術的なスキルとツールのコレクション。',
      service_about: '自己紹介',
      service_about_desc: '私についての簡単な紹介。',
      service_project: 'プロジェクトショーケース',
      service_project_desc: '実際の問題を解決するために構築された実際のアプリのセレクション。',
      service_services: 'サービス',
      service_services_desc: '提供されるサービスの概要。',
      service_chatroom: 'チャットルーム',
      service_chatroom_desc: '会話に参加して、他の人とつながりましょう。',
      service_achievements: '実績',
      service_achievements_desc: '私の実績の概要。',
    },
    about: {
      title: '自己紹介',
      bio: `こんにちは、イクラムと申します！ 私は、安全でスケーラブル、かつ運用しやすいエンドツーエンド（E2E）ソリューションの構築に注力するフルサイクルDevSecOpsエンジニアです。元々ソフトウェアエンジニアとしてフロントエンドとバックエンドの両方を開発していた背景がありますが、次第にクラウドインフラ、自動化、システムセキュリティへと領域を広げてきました。その経験を通じて、開発から運用までの全工程を統合されたワークフローとして包括的に扱う『フルサイクルDevSecOps』というアプローチに深い関心を持つようになりました。

アプリケーションコードの執筆から始まり、AWS EC2でのサーバー構築、セキュリティの堅牢化（Hardening）、Dockerによるコンテナデプロイ、Nginxでのリバースプロキシ管理、そして継続的な監視によるサービスの安定化に至るまで、システムをゼロから構築するプロセスを楽しんでいます。システムは単に機能するだけでなく、安全で効率的であり、一貫性があり、長期的に保守しやすいものであるべきだと信じています。

これまでのキャリアで最も印象に残っているプロジェクトの一つは、5台の本番サーバーを同時に監視する分散型ファイル整合性監視（FIM）システムの設計と実装です。私はPythonベースのカスタムFIMエージェントを開発し、ファイルの変更検知だけでなく、変更者の特定、使用されたコマンド、実行コンテキストの追跡を可能にしました。また、通常業務とリスクの高い活動を区別するフィルタリング機能を実装し、悪意のあるファイルや営業時間外の不審な動きを検出できるようにしました。 サーバーサイドでは、全エージェントからのデータを処理・保存するためにDjangoバックエンドを構築し、Next.jsを使用してリアルタイムの監視ダッシュボードを提供しました。さらに、WordPressへのログイン失敗や不審な管理操作、実行者のIP特定など、アプリケーション層の監視まで適用範囲を広げました。

エンジニアとして、システムの品質は技術そのものだけでなく、その背後にある思考法に依存すると考えています。クリーンなコード、堅実なアーキテクチャ、プロアクティブなセキュリティ対策、そして各ステップでの自動化を常に心がけ、効率的で予測可能なワークフローを作り出すことを目指しています。また、自分が構築するものに対する完全なオーナーシップ（責任感）と、オープンで建設的な部門間のコラボレーションを大切にしています。さらに、システム移行の経験も豊富です。デプロイの一貫性を向上させるためにアプリケーションをPM2からDockerへ移行したり、ログの保存・分析プロセスをより軽量かつ安定して管理しやすくするために、セキュリティログのパイプラインをSQLiteへ移行した実績があります。

私にとってテクノロジーとは、現実の問題を解決し、長く価値が続くものを創造するための空間です。DevSecOps、クラウドインフラ、セキュリティエンジニアリング、あるいはエンドツーエンドのシステム開発についてディスカッションできることを楽しみにしています。ぜひ繋がって、知見を共有しましょう。`,
      language: '言語',
      education: '学歴',
      experience: '職歴',
      interests: '趣味・関心事',
      educationItems: [
        {
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          degree: '学士号 - 情報工学',
          school: 'Paramadina University',
          year: '2022年 - 2026年',
          description: 'ソフトウェア開発、アルゴリズム、情報システムを中心に学習。',
          location: '• インドネシア、ジャカルタ',
        },
      ],
      experienceItems: [
        {
          logo: './images/favicon.png',
          position: 'Private Frontend Mentor',
          company: 'フリーランス',
          location: 'ジャカルタ、インドネシア',
          year: '2025年11月 - 現在',
          time: '• 継続中',
          pos: '• フリーランス',
          workfrom: '• ハイブリッド',
          description: '',
          current: false,

          skills: ['React', 'JavaScript', 'Tailwind CSS'],
        },
        {
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          position: 'Full-Cycle DevSecOps Engineer',
          company: 'Directorate of TSI Paramadina University',
          location: 'インドネシア、ジャカルタ',
          year: '2025年9月 - 現在',
          time: '• 継続中',
          pos: '• インターンシップ',
          workfrom: '• ハイブリッド',
          description:
            'incron、auditd、sudoersと統合されたカスタムPythonエージェントを使用し、5台の本番サーバーをリアルタイムで監視する分散型ファイル整合性監視（FIM）システムを設計・構築。\n変更者の特定、実行コマンド、実行場所、システムアクティビティのコンテキストを含む、詳細なファイル変更検知が可能なPythonエージェントを開発。\n悪意のあるファイル（.php, .exe, .js等）の検知やスマートノイズリダクションフィルターを含め、通常の変更とリスクある活動を自動で区別するシステムを開発。\n営業時間外の不審なアクティビティ検知を実装し、インサイダー脅威やユーザー行動の異常（アノマリー）を自動的にフラグ付けする機能を導入。\nセキュリティログをCSVにエクスポートし、スケジュールされたPythonスクリプト（cron）で古いデータを自動削除する月次データローテーションパイプラインを実装し、パフォーマンスを維持。\n5台のサーバーに分散デプロイされたDjangoベースのバックエンドを構築し、モニタリングデータの処理・保存およびダッシュボード用のセキュアなAPIを実装。\nStrictなSecure CookiesとCORSポリシー設定を用いた安全なクロスドメイン認証メカニズムを実装し、ダッシュボードとバックエンド間でのシングルサインオン（SSO）体験を実現。\nTypeScriptベースのマルチサーバーAPIオーケストレーションを採用したNext.jsダッシュボードを設計。動的ルーティング、データ正規化、およびリアルタイムの攻撃傾向の可視化を実現。\nログイン失敗、不審な管理操作、システムファイル変更、および実行者のIP特定を含む、WordPressアクティビティ監視機能を追加。\nPM2からDockerへのランタイム移行を行い、デプロイの一貫性と分離性を向上。また、ログパイプラインをSQLiteへ移行し、マルチサーバー規模での保存処理を軽量化・安定化。\nサーバープロビジョニング、セキュリティグループ設定、ユーザー管理、ファイアウォール、OSの堅牢化（Hardening）を含む、AWS EC2インフラの全プロセスを担当。\nビルド引数（Build-Args）と環境変数（Env Vars）の分離戦略を採用し、クレデンシャル保護と構成の一貫性を保ちつつ、Docker上で最適化されたインフラ（DNS, Nginx Reverse Proxy, SSL/TLS）を設計。\nビルド、テスト、コンテナ化、本番環境への自動デプロイをカバーするGitHub Actionsパイプラインを構築。\n開発、セキュリティ、インフラ、デプロイ、継続的監視を包括するフルサイクルDevSecOpsアプローチを用いて、プロジェクト全体をエンドツーエンドで完遂。',
          current: false,
          skills: ['AWS', 'Linux', 'Docker', 'Ubuntu', 'Nginx', 'Apache', 'PM2', 'Git', 'Python', 'Django', 'Next.js', 'TypeScript'],
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/id/5/5d/Logo_Hino.png',
          position: 'IT Change Management',
          company: 'Head Office PT. Hino Motor Sales Indonesia',
          location: 'インドネシア、ジャカルタ',
          year: '2023年7月 - 2023年11月',
          time: '• 4ヶ月間',
          pos: '• インターンシップ',
          workfrom: '• オンサイト',
          description:
            '技術チームと協力し、複雑なITコンセプトを分かりやすいビジュアルコンテンツに変換。\nIT変更管理イニシアチブをサポートするため、ビジュアルドキュメントやコミュニケーション資料（チラシ、アニメーション動画、プレゼンテーションなど）を作成。\nすべてのコミュニケーション資料が、会社のブランディング基準とITガバナンスに準拠していることを確認。\nCanva、Adobe Illustrator、PowerPointなどのツールを活用し、魅力的で有益なビジュアルを制作。',
          current: false,
          skills: ['Adobe Illustrator', 'Canva', 'Doratoon', 'Micorosoft PowerPoint', 'Microsoft Word'],
        },
      ],
    },
    achievements: {
      title: '実績',
      description: '私のプロフェッショナルなキャリアを通じて取得した証明書と実績のコレクションです。',
      all: 'すべて',
      certifications: '証明書',
      other: 'その他',
      items: [
        {
          type: 'certification',
          image: 'images/certificate/hackaton.jpg',
          title: 'ハッカソン大会参加感謝状',
          organizer: 'パラマディナ大学',
          date: '2025年6月',
        },
        {
          type: 'certification',
          image: 'images/certificate/legacyfrontend.png',
          title: 'レガシーフロントエンド証明書',
          organizer: 'FreeCodeCamp',
          date: '2025年7月',
        },
        {
          type: 'certification',
          image: 'images/certificate/frontenddevelopment.png',
          title: 'フロントエンド開発ライブラリ証明書',
          organizer: 'FreeCodeCamp',
          date: '2025年7月',
        },
        {
          type: 'certification',
          image: 'images/certificate/Sertifikat IBM.png',
          title: 'IBM Graniteを使用したコード生成と最適化証明書',
          organizer: 'IBM SkillsBuild',
          date: '2025年7月',
        },
        {
          type: 'certification',
          image: 'images/certificate/javascriptintermediate.jpg',
          title: 'Javascript（中級）証明書',
          organizer: 'Sololearn',
          date: '2025年7月',
        },
        {
          type: 'certification',
          image: 'images/certificate/javascriptalgorithm.png',
          title: 'JavaScriptアルゴリズムとデータ構造証明書',
          organizer: 'FreeCodeCamp',
          date: '2025年7月',
        },
        {
          type: 'other',
          image: 'images/certificate/IBM Badge.JPG',
          title: 'IBM Graniteを使用したコード生成と最適化バッジ',
          organizer: 'IBM SkillsBuild',
          date: '2025年7月',
        },
        {
          type: 'certification',
          image: 'images/certificate/responsivewebdesign.png',
          title: 'レスポンシブウェブデザイン証明書',
          organizer: 'FreeCodeCamp',
          date: '2025年7月',
        },
        {
          type: 'other',
          image: 'images/certificate/jurnal.JPG',
          title: '論文発表',
          organizer: 'パダン工科大学テクノイフジャーナル',
          date: '2024年10月',
        },
      ],
    },
    projects: {
      title: 'プロジェクト',
      description: '私が手がけた個人プロジェクトや学業プロジェクトの一部です。',
      all: 'すべて',
      Fullstack: 'フルスタック',
      Frontend: 'フロントエンド',
      Backend: 'バックエンド',
      search: 'プロジェクトを検索...',
      viewDetails: '詳細を見る',
      items: [
        {
          id: 1,
          title: 'VeloChat - リアルタイムチャットウェブアプリ',
          description: 'Socket.IOを搭載し、インスタントで低遅延な通信を実現した、機能的かつ安全なモダンメッセージングアプリケーション（WhatsApp Web風）。',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'VeloChatは、機能豊富で高機能なシングルページアプリケーション（SPA）チャットアプリを構築する意欲的なプロジェクトです。このプロジェクトは、RESTful APIのバックエンドアーキテクチャ設計やSocket.IO（Websocket）によるリアルタイム接続から、Reactを使用したリアクティブでモダンなフロントエンドインターフェースの開発まで、開発サイクル全体をカバーしています。主な焦点は、セキュリティ（JWT認証とGoogle OAuth）、リアルタイム通知、タイピングインジケーター、既読通知、レスポンシブデザインなどのユーザーエクスペリエンス、そしてクリーンで構造化されたコード品質です。',
              htechstack: '使用技術',
              techstack:
                'React, Vite, Tailwind CSS, Zustand, React Router DOM, Axios, Socket.IO Client, @react-oauth/google, react-hot-toast, react-loading-skeleton, date-fns, Node.js, Express.js, Socket.IO, JSON Web Token (JWT), Passport.js (Google OAuth用), Mongoose, Bcrypt.js, Multer, Cloudinary, Express Session, Dotenv, MongoDB Atlas (NoSQL), Google Cloud Platform (OAuth), Cloudinary (メディアストレージ)',
              hfeat: '主な機能',
              feat: 'メールのドメイン検証（@gmail.com）付き手動登録., ハッシュ化されたパスワードによる安全なログインシステム., Google OAuth 2.0を介したサードパーティのログインと登録., APIを保護するためのJWT（JSON Web Tokens）ベースの認可., ログイン後にのみアクセス可能な保護されたページ., 正確なメールアドレスによる他のユーザーの検索., 友達リクエストシステム（送信、承認、拒否）., リアルタイムの友達リクエスト通知., 会話とは別の動的な連絡先リスト., デバウンス機能付きの連絡先リスト検索., Socket.IOによるリアルタイムの1対1パーソナルメッセージング., 永久に保存されるメッセージ履歴., 他のユーザーが入力中の「入力中...」インジケーター., 会話リストの未読メッセージ通知バッジ., 「送信済み」および「既読」のチェックマークアイコンによる既読通知., チャット履歴を明確にするためのタイムスタンプと日付区切り（今日、昨日など）., プロフィール名の変更機能., アカウントのパスワード変更機能., クラウドサービス（Cloudinary）へのプロフィール写真のアップロードと変更., すべての新規ユーザー向けのデフォルトのプロフィール写真。',
              hlinkyt: 'デモビデオ',
              linkyt: 'https://www.youtube.com/embed/2FnM3nW0jvQ?si=ENxc0igjz3ENQXpb',
            },
          ],
        },
        {
          id: 2,
          title: 'Rinema - インドネシア映画ファンのためのソーシャルプラットフォーム',
          description: '映画データベース、評価システム、活発なディスカッションフォーラムを統合した、インドネシアの映画コミュニティ向け包括的デジタルプラットフォーム。',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'Rinemaは、インドネシアの映画コミュニティのためのデジタルソリューションとして設計されており、充実した映画データベースと動的な社会的交流の架け橋となります。このプロジェクトはシームレスなユーザー体験（UX）に重点を置いており、ユーザーは高度な検索や動的フィルターを通じて映画を発見し、インタラクティブなフォーラムで深い議論に参加できます。技術面では、Laravel 12を使用した堅牢なバックエンドアーキテクチャ上に構築されており、ロールベースアクセス制御（RBAC）やGoogle OAuth統合による業界標準のセキュリティを実装しています。',
              htechstack: '使用技術',
              techstack: 'Laravel 12 (PHP), Blade Template, Tailwind CSS, MySQL (Relational DB), RESTful API, Laravel Sanctum.',
              hfeat: '主な機能',
              feat: 'クエリパラメータと動的フィルター（人気/最新/ジャンル）を備えた高度な映画検索機能。, 包括的で詳細な映画データベース。, インタラクティブな評価＆レビューシステム（星評価＋コメント）。, スレッドとネストされた返信機能を備えたコミュニティディスカッションフォーラム。, パスワードハッシュ化を伴う安全な認証システム（Sanctum/JWT）。, Google OAuthを使用したインスタントサードパーティログイン。, ユーザー・編集者・管理者のアクセス権を区別するロールベースアクセス制御（RBAC）。, 評価履歴とアカウント管理を含むユーザープロファイルダッシュボード。, 編集者専用の完全な映画コンテンツ管理（CRUD）。, レスポンシブでモダンなモバイルファーストのインターフェースデザイン。',
              hlinkyt: 'デモ動画',
              linkyt: '',
            },
          ],
        },
        {
          id: 3,
          title: 'BebasBlog - セキュアで型安全なソーシャルメディア',
          description: 'MERNスタックとエンドツーエンドのTypeScriptを使用し、厳格な型安全性基準で構築された、包括的なフルスタックソーシャルメディアプラットフォーム（Instagram風）。',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'BebasBlogは、現代的で規律あるフルスタックエンジニアリング能力の証明です。単なるソーシャルメディアアプリではなく、スケーラブルで安全なコードアーキテクチャに焦点を当てています。バグを最小限に抑え、データの一貫性を保証するために、TypeScriptエコシステムをエンドツーエンド（フロントエンドとバックエンド）で使用して構築されました。フロントエンドはインタラクティブでレスポンシブなUXを提供し、バックエンドはハイブリッド認証や厳格なデータバリデーションを含む多層セキュリティを備えた堅牢なMVCアーキテクチャを実装しています。これは、エンタープライズグレードのアプリケーション開発の実践的なシミュレーションです。',
              htechstack: '使用技術',
              techstack: 'TypeScript (End-to-End), React.js, Node.js, Express (MVC), MongoDB (Mongoose), Tailwind CSS, Passport.js (OAuth), Cloudinary.',
              hfeat: '主な機能',
              feat: '絶対的な型安全性のためのスタック全体における完全なTypeScript実装。, 構造化され、クリーンで保守が容易なMVCバックエンドアーキテクチャ。, ハイブリッド認証システム：マニュアルログイン（Bcrypt/JWT）およびGoogle OAuth。, プロフィールと投稿のアップロードのためのクラウドメディア管理（Cloudinary）。, リアルタイムの社会的交流：投稿CRUD、いいねシステム、コメント機能。, Tailwind CSSを使用したモダンでレスポンシブなインターフェースデザイン（モバイルファースト）。, 入力バリデーションとルート保護（ミドルウェア）による厳格なAPIセキュリティ。',
              hlinkyt: 'デモ動画',
              linkyt: '',
            },
          ],
        },
        {
          id: 4,
          title: 'ポートフォリオサイト',
          description: 'カスタムAIアシスタントとリアルタイムグローバルチャット機能を備えた、モダンなSPAベースのパーソナルブランディングプラットフォーム。',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'このポートフォリオサイトは、高速で応答性の高いシングルページアプリケーション（SPA）として構築されています。最大の特徴は、Google AI Studioを通じて特別にトレーニングされたカスタムAIモデル「Ichram AI」の統合であり、私のスキルや経験に関する訪問者の質問にインテリジェントに回答します。また、訪問者がリアルタイムで交流できるグローバルチャットルームも備えています。技術面では、React Context APIを使用してゼロから構築されたカスタム多言語システム（i18n）など、効率的な状態管理を実装しています。',
              htechstack: '使用技術',
              techstack: 'React.js, Tailwind CSS, Firebase (Realtime DB), Google Gemini API (AI Tuning), Context API (Custom i18n).',
              hfeat: '主な機能',
              feat: 'Google AI Studioでトレーニングされた「Ichram AI」（カスタムLLM）の統合。, Firebase Realtime Databaseを使用したリアルタイムグローバルチャットルーム。, React Contextで構築されたカスタム多言語システム（i18n）。, 持続的なダークモードとライトモードのサポート。, スムーズなアニメーションを備えたレスポンシブなUI/UXデザイン。, シームレスなナビゲーションのためのSPAアーキテクチャ。',
              hlinkyt: 'デモ動画',
              linkyt: '',
            },
          ],
        },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      description: 'このページをスクロールして、お気軽にご連絡ください！',
    },
    chatroom: {
      title: 'チャットルーム',
      description: '気軽に考えや提案、質問などを共有してください！',
      login: '会話に参加するにはサインインしてください。ご安心ください、あなたのデータは安全です。',
      login_google: 'Googleでサインイン',
      input_form: 'ここにメッセージを入力...',
      sign_in_as: 'としてサインイン',
      exit: 'ログアウト',
    },
    aiassistant: {
      greeting: 'こんにちは！👋 私はIchramのバーチャルアシスタント、Hailyoです。',
      description: 'Ichramに関する質問に答える準備ができているあなたのパーソナルAIアシスタントです。',
      footer: 'プライバシー保護のため、このセッションは一時的であり、ページ更新で自動消去されます。',
      input: 'Hailyoに質問...',
    },
  },
};
