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
          description: 'VeloChat is a realtime chat application built using the MERN stack with Socket.IO integration.',
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
          description: 'A community-driven platform built with Laravel and MySQL for Indonesian film enthusiasts.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 8,
          title: 'BebasBlog - The official frontend for BebasBlog',
          description: 'Delivering a rich user experience for content creation and consumption. ',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 7,
          title: 'BebasBlog - RESTful APIs Social Media Platform',
          description: 'This is the backend service for the BebasBlog project, a RESTful API built to support a blogging or social media platform.',
          category: 'Backend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 3,
          title: 'Rebuild Rinema - Indonesian Movie Lovers Social Platform',
          description: 'Rebuilding the Rinema web app with its official API integration.',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 4,
          title: 'Portfolio Website - Dashboard Style',
          description: 'Personal website portfolio with dashboard layout design',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 5,
          title: 'Portfolio Website - Desain Landing Page',
          description: 'Personal website portfolio with landing page design',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 6,
          title: 'RESTful APIs Simple Notes App',
          description: 'A simple RESTful API using Express.js that functions to manage notes.',
          category: 'Backend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
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
          description: 'VeloChat adalah aplikasi chat realtime yang dibangun dengan stack MERN dan integrasi Socket.IO.',
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
          description: 'Sebuah platform komunitas untuk pecinta film Indonesia yang dibangun menggunakan Laravel dan MySQL.',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 8,
          title: 'BebasBlog - Frontend Resmi BebasBlog',
          description: 'Menyediakan pengalaman pengguna yang kaya untuk pembuatan dan konsumsi konten.',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 7,
          title: 'BebasBlog - RESTful APIs Platform Sosial',
          description: 'Ini adalah layanan backend untuk proyek Bebasblog, sebuah API RESTful yang dibangun untuk mendukung platform blogging atau media sosial.',
          category: 'Backend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 3,
          title: 'Rebuild Rinema - Platform Sosial Pecinta Film Indonesia',
          description: 'Pengembangan ulang aplikasi web Rinema dengan integrasi API resminya.',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 4,
          title: 'Portofolio Website - Desain Dashboard',
          description: 'Website portofolio pribadi dengan design tata letak dashboard',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 5,
          title: 'Portofolio Website - Landing Page Design',
          description: 'Website portofolio pribadi dengan design tata letak Landing Page',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 6,
          title: 'RESTful APIs Aplikasi Catatan Sederhana',
          description: 'RESTful API sederhana menggunakan Express.js yang berfungsi untuk mengelola catatan (notes).',
          category: 'Backend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
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
          description: 'VeloChatは、MERNスタックとSocket.IOを統合して構築されたリアルタイムチャットアプリケーションです。',
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
          description: 'LaravelとMySQLを使用して構築された、インドネシア映画ファンのためのコミュニティプラットフォームです。',
          category: 'Fullstack',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 8,
          title: 'BebasBlog - BebasBlog 公式フロントエンド',
          description: 'コンテンツの作成と消費のための豊富なユーザー エクスペリエンスを提供します。',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 7,
          title: 'BebasBlog - ソーシャルプラットフォーム向けRESTful API',
          description: 'これはBebasblogプロジェクトのバックエンドサービスで、ブログやソーシャルメディアプラットフォームをサポートするために構築されたRESTful APIです。',
          category: 'Backend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 3,
          title: 'Rinema（リビルド版）- インドネシア映画ファンのためのソーシャルプラットフォーム',
          description: '公式APIを統合したRinemaウェブアプリケーションの再開発版です。',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 4,
          title: 'ポートフォリオサイト - ダッシュボードデザイン',
          description: 'ダッシュボードレイアウトでデザインされた個人のポートフォリオサイトです。',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 5,
          title: 'ポートフォリオサイト - ランディングページデザイン',
          description: 'ランディングページレイアウトでデザインされた個人のポートフォリオサイトです。',
          category: 'Frontend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
            },
          ],
        },
        {
          id: 6,
          title: 'シンプルなノートアプリ向けRESTful API',
          description: 'Express.jsを使用して構築された、ノートを管理するためのシンプルなRESTful APIです。',
          category: 'Backend',
          detail: [
            {
              paragraph:
                'Rinema is a social platform for Indonesian movie lovers, built with Laravel and MySQL. It provides a space for users to discuss and share their favorite films, as well as discover new ones through community recommendations.',
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
