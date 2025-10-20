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
      contact: 'Contact',
      copyright1: 'Copyright © 2025',
      copyright2: 'Ichramsyah. All rights reserved.',
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
            'Design and implement a Python-based File Integrity Monitoring (FIM) system using hashing techniques to detect file changes, with cPanel cron job integration to automatically generate weekly reports via email. \nDevelop a real-time FIM system using incron and Python to monitor specific file/directory changes, featuring extension filters and timestamps, while automatically sending email notifications and logging all changes. \nBuild a backend using Django to manage monitoring log data, convert logs into JSON format, and provide an API for the frontend. \nDevelop a frontend dashboard using Next.js to display monitoring data, complete with features for authentication, soft delete, log deletion, and a status indicator for the incron service on the server. \nIntegrate the backend and frontend systems by applying fullstack development practices, including API routing configuration, inter-port communication, and connection management between Django (backend) and Next.js (frontend). \nIndependently manage a Linux server and application deployment, including the configuration of Gunicorn and PM2, setting up a proxy using .htaccess, and executing administrative commands via SSH with sudo privileges. \nImplement the DevSecOps concept by combining system security (FIM), automation (cron/incron), and application management (deployment pipeline) into a single, integrated system that can be monitored through the dashboard.',
          current: false,
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
                'VeloChat is an ambitious project to build a functional and feature-rich single-page application (SPA) chat app. This project encompasses the entire development cycle, from designing the backend RESTful APIs architecture and real-time connections with Socket.IO (Websocket), to building a reactive and modern frontend interface using React Javascript. The main focus of this project is on security (JWT & Google OAuth authentication), user experience features such as real-time notifications, typing indicators, read receipts, responsive design, and clean, well-structured code quality.',
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
      contact: 'Kontak',
      copyright1: 'Hak Cipta © 2025',
      copyright2: 'Ichramsyah. Semua hak dilindungi undang-undang.',
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
            'Merancang dan mengimplementasikan sistem File Integrity Monitoring (FIM) berbasis Python menggunakan teknik hashing untuk mendeteksi perubahan file, dengan integrasi cron jobs pada cPanel guna menghasilkan laporan otomatis mingguan melalui email. \nMengembangkan sistem FIM real-time berbasis incron dan Python untuk memantau perubahan file/direktori tertentu dengan filter ekstensi dan waktu kerja (timestamp), serta mengirimkan notifikasi email dan mencatat log perubahan secara otomatis. \nMembangun backend menggunakan Django untuk mengelola data log hasil monitoring, melakukan konversi log menjadi format JSON, dan menyediakan API bagi frontend. \nMengembangkan frontend dashboard menggunakan Next.js untuk menampilkan data hasil monitoring dengan fitur autentikasi, soft delete, penghapusan log, serta indikator status aktif/tidaknya layanan incron di server. \nMengintegrasikan sistem backend dan frontend dengan menerapkan praktik fullstack development, termasuk pengaturan routing API, komunikasi antar-port, dan manajemen koneksi antara Django (backend) dan Next.js (frontend). \nMengelola server Linux dan deployment aplikasi secara mandiri, meliputi konfigurasi Gunicorn dan PM2, pengaturan proxy menggunakan .htaccess, serta menjalankan perintah administratif melalui akses SSH dengan hak sudo. \nMengimplementasikan konsep DevSecOps dengan menggabungkan keamanan sistem (FIM), otomatisasi (cron/incron), dan pengelolaan aplikasi (deployment pipeline) menjadi satu kesatuan sistem yang terintegrasi dan dapat dimonitor melalui dashboard.',
          current: false,
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
            },
            {
              techstack: 'Teknologi yang digunakan: MongoDB, Express.js, React.js, Node.js, Socket.IO, JWT, Google OAuth, HTML5, CSS3, JavaScript (ES6+), Axios, Redux Toolkit, Tailwind CSS, Vercel, Heroku',
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
      contact: 'お問い合わせ',
      copyright1: '著作権 © 2025',
      copyright2: 'Ichramsyah. 全ての権利を保有します。',
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
            'ハッシュ技術を用いたPythonベースのファイル整合性監視（FIM）システムを設計・実装し、cPanelのcronジョブと連携して週次レポートをメールで自動生成する。 \nincronとPythonをベースにしたリアルタイムFIMシステムを開発し、特定のファイルやディレクトリの変更を監視する。拡張子フィルタやタイムスタンプ機能を備え、変更を検知した際にはメール通知とログ記録を自動的に行う。 \nDjangoを使用してバックエンドを構築し、監視ログデータの管理、ログのJSON形式への変換、およびフロントエンド用のAPIを提供する。 \nNext.jsを使用してフロントエンドダッシュボードを開発し、監視結果のデータを表示する。認証、ソフトデリート、ログ削除機能、およびサーバー上のincronサービスのアクティブ状態を示すインジケーターを実装する。 \nフルスタック開発の実践に基づき、バックエンドとフロントエンドシステムを統合する。APIルーティングの設定、ポート間の通信、Django（バックエンド）とNext.js（フロントエンド）間の接続管理などを行う。 \nLinuxサーバーの管理とアプリケーションのデプロイを自主的に管理する。GunicornとPM2の設定、.htaccessによるプロキシ設定、sudo権限でのSSHアクセスによる管理コマンドの実行などを含む。 \nシステムセキュリティ（FIM）、自動化（cron/incron）、アプリケーション管理（デプロイメントパイプライン）を統合し、ダッシュボードで監視可能な一つの統合システムとしてDevSecOpsの概念を実装する。',
          current: false,
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
                'VeloChatは、機能豊富なシングルページアプリケーション（SPA）チャットアプリケーションを構築するための野心的なプロジェクトです。このプロジェクトは、RESTful APIのバックエンドアーキテクチャ設計とSocket.IO（Websocket）によるリアルタイム接続から、React Javascriptを使用した反応的でモダンなフロントエンドインターフェースの構築まで、開発の全サイクルをカバーしています。このプロジェクトの主な焦点は、セキュリティ（JWTおよびGoogle OAuth認証）、リアルタイム通知、タイピングインジケーター、既読メッセージ、レスポンシブデザイン、クリーンで構造化されたコード品質など、ユーザーエクスペリエンスにあります。',
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
