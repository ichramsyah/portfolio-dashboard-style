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
        'A passionate Software Engineer focused on building high-performance, end-to-end software solutions. Experienced in transforming complex requirements into functional, scalable, and maintainable systems. Proficient in modern ecosystems such as React, Next.js, Node.js, TypeScript, and Laravel, with experience applying best practices in both Agile (Scrum) and Waterfall development environments. Focused on writing clean code, solid architecture, and effective team collaboration.',
      skills: 'Skills',
      skills_paragraph: 'My professional skills.',
      githubcontribution: 'GitHub Contributions',
      githubcontribution_paragraph: 'My GitHub activity over the past year.',
      githubcontribution_total: 'Total',
      githubcontribution_week: 'Week',
      githubcontribution_best: 'Best',
      githubcontribution_average: 'Average',
      githubcontribution_day: 'day',
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
      bio: `Hello! Thank you for visiting my personal website. I am Ichramsyah Abdurrachman, an undergraduate Computer Science student at Paramadina University. As a Software Engineer, I have a deep enthusiasm for software engineering—from architectural design to performance optimization. I focus on applying fundamental principles like Design Patterns to create solutions that are not only functional but also scalable and maintainable.

I apply these principles within a modern technology ecosystem, from building structured frontend architectures with Next.js, React.js, and TypeScript, to designing robust backend systems using Node.js and Laravel.

My primary focus is on transforming complex problems into elegant and efficient software solutions. Whether designing system architecture or writing code, I always prioritize quality, security, and performance at every layer. As an adaptive learner, I thrive in dynamic environments and enjoy solving complex problems collaboratively.

I believe the best software is born from a synergy of technical excellence and effective communication. My academic and project experiences have honed my analytical, technical, and leadership skills. I am always enthusiastic about collaborating within a team, learning from professionals, and contributing to building products that deliver a real and sustainable impact.

Best regards, Ichram`,
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
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          position: 'DevSecOps Engineer',
          company: 'Directorate of TSI Paramadina University',
          location: 'Jakarta, Indonesia',
          year: 'Sep 2025 - Now',
          time: '• Ongoing',
          pos: '• Internship',
          workfrom: '• Hybrid',
          description:
            'Designing and implementing a Python-based File Integrity Monitoring (FIM) system, leveraging SHA-256 cryptographic hashing to automatically detect file changes. Integrated with cPanel cron jobs to run scheduled scans and send weekly file integrity verification reports via email. \nDeveloping a real-time FIM system based on incron and Python, equipped with email alerting and automatic logging, as well as a deep forensic tracking feature to identify which user made the change, what command was executed, and where the activity originated from. \nBuilding the backend using Django to manage monitoring logs, parse and convert data into JSON format, and provide API endpoints accessed by the frontend dashboard. \nDeveloping the frontend dashboard using Next.js and Tailwind CSS to display data from the FIM monitoring system. \nIntegrating the frontend and backend with a full-stack development approach, covering cross-port communication setup, API connection management, and the implementation of a reverse proxy for security and efficient data flow. \nPerforming self-managed Linux server and application deployment, including Gunicorn and PM2 configuration, setting up an Apache reverse proxy using .htaccess, and executing administrative commands via SSH with sudo privileges. \nMigrating the infrastructure from PM2 to Docker, building separate containers for each service (frontend, backend, and database), and deploying the application on a Linux-based Ubuntu environment.\nApplying DevSecOps and Cloud Computing principles to the development workflow, including containerization, server-side security, and CI/CD pipeline automation using Git & GitHub integration.',
          current: false,
          skills: ['Docker', 'Python', 'Django', 'Next.js', 'Linux', 'Ubuntu', 'Apache', 'cPanel', 'PM2', 'Git'],
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
        'Software Engineer yang bersemangat dalam membangun solusi perangkat lunak end-to-end yang berkinerja tinggi. Berpengalaman mengubah kebutuhan kompleks menjadi sistem yang fungsional, scalable, dan mudah dirawat. Mahir dalam ekosistem modern seperti React, Next.js, Node.js, TypeScript dan Laravel. dengan pengalaman menerapkan praktik terbaik dalam lingkungan pengembangan Agile (Scrum) maupun Waterfall. Fokus pada penulisan kode yang bersih, arsitektur yang solid, dan kolaborasi tim yang efektif.',
      skills: 'Keahlian',
      skills_paragraph: 'Keahlian profesional saya.',
      githubcontribution: 'Kontribusi GitHub',
      githubcontribution_paragraph: 'Aktivitas GitHub saya selama setahun terakhir.',
      githubcontribution_total: 'Total',
      githubcontribution_week: 'Minggu',
      githubcontribution_best: 'Terbaik',
      githubcontribution_average: 'Rata-rata',
      githubcontribution_day: 'hari',
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
      bio: `Halo! Terima kasih telah mengunjungi website pribadi saya. Saya Ichramsyah Abdurrachman, seorang mahasiswa Teknik Informatika di Universitas Paramadina. Sebagai seorang Software Engineer, saya memiliki antusiasme mendalam terhadap rekayasa perangkat lunak, mulai dari perancangan arsitektur hingga optimasi performa. Saya berfokus pada penerapan prinsip-prinsip fundamental seperti Design Patterns untuk menciptakan solusi yang tidak hanya fungsional, tetapi juga scalable dan maintainable.

Saya mengaplikasikan prinsip-prinsip ini dalam ekosistem teknologi modern, mulai dari membangun arsitektur frontend yang terstruktur dengan Next.js, React.js, dan TypeScript, hingga merancang sistem backend yang kokoh menggunakan Node.js dan Laravel.

Fokus utama saya adalah mengubah masalah kompleks menjadi solusi perangkat lunak yang elegan dan efisien. Baik dalam merancang arsitektur sistem maupun menulis kode, saya selalu memprioritaskan kualitas, keamanan, dan performa di setiap lapisan. Sebagai pembelajar yang adaptif, saya berkembang dalam lingkungan dinamis dan menikmati proses pemecahan masalah secara kolaboratif.

Saya percaya bahwa perangkat lunak terbaik lahir dari sinergi antara keunggulan teknis dan komunikasi yang efektif. Pengalaman akademis dan proyek telah mengasah kemampuan analitis, teknis, serta kepemimpinan saya. Saya selalu antusias untuk berkolaborasi dalam tim, belajar dari para profesional, dan berkontribusi untuk membangun produk yang memberikan dampak nyata dan berkelanjutan.

Salam hangat, Ichram`,
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
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          position: 'DevSecOps Engineer',
          company: 'Direktorat TSI Universitas Paramadina',
          location: 'Jakarta, Indonesia',
          year: 'Sep 2025 - Sekarang',
          time: '• Berlangsung',
          pos: '• Magang',
          workfrom: '• Gabungan',
          description:
            'Merancang dan mengimplementasikan sistem File Integrity Monitoring (FIM) berbasis Python dengan memanfaatkan teknik kriptografi hashing SHA-256 untuk mendeteksi setiap perubahan file secara otomatis, serta terintegrasi dengan cron jobs pada cPanel untuk menjalankan proses pemindaian terjadwal dan mengirimkan laporan hasil verifikasi integritas file secara mingguan melalui email. \nMengembangkan sistem FIM real-time berbasis incron dan Python, dilengkapi email alerting dan pencatatan log otomatis, serta fitur pelacakan forensik mendalam untuk mengidentifikasi siapa pengguna yang melakukan perubahan, perintah apa yang dieksekusi, dan dari mana sumber aktivitas tersebut berasal. \nMembangun backend menggunakan Django untuk mengelola log hasil monitoring, melakukan parsing dan konversi data ke format JSON, serta menyediakan API endpoint yang diakses oleh frontend dashboard. \nMengembangkan frontend dashboard menggunakan Next.js dan Tailwind CSS untuk menampilkan data hasil monitoring sistem FIM. \nMengintegrasikan frontend dan backend dengan pendekatan fullstack development, mencakup pengaturan komunikasi antar-port, manajemen koneksi API, dan implementasi reverse proxy untuk keamanan serta efisiensi data flow. \nMengelola server Linux dan deployment aplikasi secara mandiri, meliputi konfigurasi Gunicorn dan PM2, pengaturan reverse proxy Apache menggunakan .htaccess, serta menjalankan perintah administratif melalui akses SSH dengan hak sudo. \nMelakukan migrasi infrastruktur dari PM2 ke Docker, dengan membangun container terpisah untuk setiap service (frontend, backend, dan database), serta men-deploy aplikasi melalui environment Ubuntu berbasis Linux. \nMenerapkan prinsip DevSecOps dan Cloud Computing dalam workflow pengembangan, meliputi containerization, keamanan server-side, dan otomasi pipeline CI/CD menggunakan integrasi Git & GitHub.',
          current: false,
          skills: ['Docker', 'Python', 'Django', 'Next.js', 'Linux', 'Ubuntu', 'Apache', 'cPanel', 'PM2', 'Git'],
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
        'ソフトウェアエンジニア高性能なエンドツーエンドのソフトウェアソリューションの構築に情熱を注ぐソフトウェアエンジニア。複雑な要件を、機能的で拡張性・保守性の高いシステムに落とし込む経験が豊富です。React、Next.js、Node.js、TypeScript、Laravelなどのモダンな開発環境に精通しており、アジャイル（スクラム）およびウォーターフォール双方の開発環境でベストプラクティスを適用した経験があります。クリーンなコード、堅牢なアーキテクチャ、効果的なチームコラボレーションを重視しています。',
      skills: 'スキル',
      skills_paragraph: '私のプロフェッショナルスキル。',
      githubcontribution: 'GitHubでの貢献',
      githubcontribution_paragraph: '過去1年間の私のGitHubアクティビティ。',
      githubcontribution_total: '合計',
      githubcontribution_week: '週',
      githubcontribution_best: 'ベスト',
      githubcontribution_average: '平均',
      githubcontribution_day: '日',
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
      bio: 'こんにちは！私の個人ウェブサイトをご覧いただき、誠にありがとうございます。パラマディナ大学で情報工学を専攻している、イクラムシャ・アブドゥラックマンと申します。ソフトウェアエンジニアとして、アーキテクチャ設計からパフォーマンス最適化まで、ソフトウェアエンジニアリングそのものに深い情熱を持っています。特に、デザインパターンのような基本原則を適用し、機能的であるだけでなく、スケーラブルで保守性の高いソリューションを構築することに注力しています。 \n\nこれらの原則を、Next.js、React.js、TypeScriptを用いた構造的なフロントエンドアーキテクチャの構築から、Node.jsやLaravelによる堅牢なバックエンドシステムの設計まで、モダンな技術エコシステムの中で実践しています。\n\n私の主な焦点は、複雑な問題を洗練された効率的なソフトウェアソリューションに転換することです。システムのアーキテクチャを設計する際も、コードを書く際も、常にすべての層において品質、セキュリティ、そしてパフォーマンスを最優先に考えています。順応性の高い学習者として、変化の速い環境で成長し、チームで協力して複雑な問題を解決することに喜びを感じます。\n\n最高のソフトウェアは、卓越した技術力と効果的なコミュニケーションの相乗効果から生まれると信じています。学業やプロジェクトでの経験を通じて、分析能力、技術力、そしてリーダーシップの資質を磨いてきました。チームで協力し、プロフェッショナルから学び、実質的かつ持続的なインパクトを与える製品開発に貢献することに、常に意欲的です。\n\n敬具, イクラム',
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
          logo: 'https://assets.nsd.co.id/images/kampus/logo/Logo-Paramadina-Universitas-Paramadina-Original-PNG.png',
          position: 'DevSecOps Engineer',
          company: 'Directorate of TSI Paramadina University',
          location: 'インドネシア、ジャカルタ',
          year: '2025年9月 - 現在',
          time: '• 継続中',
          pos: '• インターンシップ',
          workfrom: '• ハイブリッド',
          description:
            'Pythonベースのファイル整合性監視（FIM）システムを設計・実装。SHA-256暗号化ハッシュ技術を活用し、ファイルの変更を自動的に検知。さらにcPanelのcronジョブと統合し、定期スキャンを実行し、ファイル整合性の検証結果レポートを週次でメール送信。 \nincronとPythonをベースにしたリアルタイムFIMシステムを開発。メールアラートと自動ログ記録機能、さらに、変更を行ったユーザー、実行されたコマンド、及びアクティビティのソース（実行元）を特定する詳細なフォレンジック追跡機能を搭載。 \nDjangoを使用してバックエンドを構築し、監視ログの管理、データのJSON形式へのパーシングと変換、およびフロントエンドダッシュボードからアクセスされるAPIエンドポイントを提供。 \nNext.jsとTailwind CSSを使用し、FIMシステムの監視データを表示するフロントエンドダッシュボードを開発。 \nフルスタック開発アプローチでフロントエンドとバックエンドを統合。ポート間通信の設定、API接続管理、セキュリティとデータフロー効率化のためのリバースプロキシ実装を担当。 \nLinuxサーバー管理とアプリケーションデプロイを独自に担当。GunicornとPM2の設定、.htaccessを使用したApacheリバースプロキシの設定、およびsudo権限でのSSHアクセスによる管理コマンドの実行。 \nインフラをPM2からDockerへ移行。各サービス（フロントエンド、バックエンド、データベース）ごとに個別のコンテナを構築し、LinuxベースのUbuntu環境にアプリケーションをデプロイ。\n開発ワークフローにDevSecOpsとクラウドコンピューティングの原則を適用。コンテナ化、サーバーサイドセキュリティ、およびGit & GitHub連携によるCI/CDパイプラインの自動化を実践。',
          current: false,
          skills: ['Docker', 'Python', 'Django', 'Next.js', 'Linux', 'Ubuntu', 'Apache', 'cPanel', 'PM2', 'Git'],
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/id/5/5d/Logo_Hino.png',
          position: 'IT Change Management',
          company: 'PT. Hino Motor Sales Indonesia',
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
  },
};
