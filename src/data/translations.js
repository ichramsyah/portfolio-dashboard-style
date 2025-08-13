export const translations = {
  // English
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      achievements: 'Achievements',
      projects: 'Projects',
      chatroom: 'Chat Room',
      contact: 'Contact',
      copyright1: 'Copyright © 2025',
      copyright2: 'Ichramsyah Abdurrachman. All rights reserved.',
    },
    home: {
      greeting: "Hello, I'm Ichramsyah",
      religion: 'from Jakarta, Indonesia',
      description:
        'A passionate and dedicated software developer with a focus on end-to-end development. Good understanding of web technologies with modern frameworks. Accustomed to working collaboratively in a team and committed to building functional, responsive and visually appealing web applications.',
      service: 'Featured',
      services_paragraph: 'Explore everything I’ve crafted, contributed, and accomplished.',
    },
    about: {
      title: 'About Me',
      bio: `I am Ichramsyah Abdurrachman, an active student at Paramadina University majoring in Computer Engineering, dedicated to becoming a Fullstack Developer. I specialize in building scalable and user-friendly web applications, leveraging technologies like React, Laravel, Node.js, Express.js, with a focus on advanced skills such as Design Patterns and performance optimization.

My journey began with a passion for graphic design and web development. I have mastered Adobe Illustrator and Figma, enhancing my ability to create intuitive user interfaces.

My internship at PT Hino Motor Sales Indonesia in IT Change Management, alongside my role as a Graphic Designer, provided deep insights into IT processes and the integration of design with technology.

As a Fullstack Developer, I successfully built a social platform website for Indonesian film enthusiasts using Laravel, Blade, Tailwind CSS, and MySQL, which I deployed using cPanel.

To further demonstrate my expertise in real-time communication, I also engineered a full-featured chat application using the MERN (MongoDB, Express.js, React, Node.js) stack, integrating Socket.IO to facilitate instant, bi-directional messaging.

I apply Architecture Patterns like MVC and Repository Pattern to ensure clean and maintainable code, while optimizing performance with efficient MySQL queries.

Additionally, I delve into machine learning with Python, such as developing keyword frequency predictions for technology articles on DOAJ.org.

I am eager to contribute to the technology industry with innovative web solutions. Let’s connect to collaborate or explore opportunities together!`,
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
        {
          logo: 'https://ppdb.man1kotabogor.id/logoman.png',
          degree: 'Science',
          school: 'MAN 1 Bogor',
          year: '2019 - 2022',
          description: 'Focused on scientific studies including math and physics.',
          location: '• Bogor, Indonesia',
        },
      ],
      experienceItems: [
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
        },
        {
          id: 2,
          title: 'Rinema - Indonesian Movie Lovers Social Platform',
          description: 'A community-driven platform built with Laravel and MySQL for Indonesian film enthusiasts.',
          category: 'Fullstack',
        },
        {
          id: 7,
          title: 'BebasBlog - RESTful APIs Social Media Platform',
          description: 'This is the backend service for the BebasBlog project, a RESTful API built to support a blogging or social media platform.',
          category: 'Backend',
        },
        {
          id: 3,
          title: 'Rebuild Rinema - Indonesian Movie Lovers Social Platform',
          description: 'Rebuilding the Rinema web app with its official API integration.',
          category: 'Frontend',
        },
        {
          id: 4,
          title: 'Portfolio Website - Dashboard Style',
          description: 'Personal website portfolio with dashboard layout design',
          category: 'Frontend',
        },
        {
          id: 5,
          title: 'Portfolio Website - Desain Landing Page',
          description: 'Personal website portfolio with landing page design',
          category: 'Frontend',
        },
        {
          id: 6,
          title: 'RESTful APIs Simple Notes App',
          description: 'A simple RESTful API using Express.js that functions to manage notes.',
          category: 'Backend',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Scroll through this page and contact me!',
    },
  },

  // Indonesia
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      achievements: 'Prestasi',
      projects: 'Proyek',
      contact: 'Kontak',
      chatroom: 'Ruang Obrolan',
      copyright1: 'HAK CIPTA © 2025',
      copyright2: 'Ichramsyah Abdurrachman. Seluruh hak dilindungi.',
    },
    home: {
      greeting: 'Hai, saya Ichramsyah',
      religion: 'Berasal dari Jakarta, Indonesia',
      description:
        'Seorang pengembang perangkat lunak yang bersemangat dan berdedikasi dengan fokus pada pengembangan end-to-end. Memiliki pemahaman yang baik dalam teknologi web dengan framework modern. Terbiasa bekerja secara kolaboratif dalam tim serta berkomitmen untuk membangun aplikasi web yang fungsional, responsif, dan menarik secara visual.',
      service: 'Unggulan',
      services_paragraph: 'Jelajahi semua yang telah saya buat, kontribusikan, dan capai.',
    },
    about: {
      title: 'Tentang Saya',
      bio: `Saya Ichramsyah Abdurrachman, seorang mahasiswa aktif di Universitas Paramadina jurusan Teknik Komputer, berdedikasi untuk menjadi seorang Fullstack Developer. Saya memiliki spesialisasi dalam membangun aplikasi web yang skalabel dan mudah digunakan (user-friendly), dengan memanfaatkan teknologi seperti React, Laravel, Node.js, Express.js, serta berfokus pada keahlian lanjutan seperti Design Patterns dan optimasi kinerja.

Perjalanan saya dimulai dari passion terhadap desain grafis dan pengembangan web. Saya telah menguasai Adobe Illustrator dan Figma, yang meningkatkan kemampuan saya dalam menciptakan antarmuka pengguna yang intuitif.

Pengalaman magang saya di PT Hino Motor Sales Indonesia pada bidang IT Change Management, di samping peran sebagai Graphic Designer, memberikan wawasan mendalam tentang proses IT dan integrasi desain dengan teknologi.

Sebagai Fullstack Developer, saya berhasil membangun website platform sosial untuk penggemar film Indonesia menggunakan Laravel, Blade, Tailwind CSS, dan MySQL, yang saya deploy menggunakan cPanel.

Untuk lebih menunjukkan keahlian saya dalam komunikasi real-time, saya juga merekayasa aplikasi chat dengan fitur lengkap menggunakan tumpukan MERN (MongoDB, Express.js, React, Node.js), mengintegrasikan Socket.IO untuk memfasilitasi pesan instan dua arah.

Saya menerapkan Architecture Patterns seperti MVC dan Repository Pattern untuk memastikan kode yang bersih dan mudah dipelihara, sekaligus mengoptimalkan kinerja dengan kueri MySQL yang efisien.

Selain itu, saya mendalami machine learning dengan Python, seperti mengembangkan prediksi frekuensi kata kunci untuk artikel teknologi di DOAJ.org.

Saya sangat antusias untuk berkontribusi pada industri teknologi dengan solusi web yang inovatif. Mari terhubung untuk berkolaborasi atau menjajaki peluang bersama!`,
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
        {
          logo: 'https://ppdb.man1kotabogor.id/logoman.png',
          degree: 'Ilmu Pengetahuan Alam',
          school: 'MAN 1 Bogor',
          year: '2019 - 2022',
          description: 'Fokus pada studi ilmiah termasuk matematika dan fisika.',
          location: '• Bogor, Indonesia',
        },
      ],
      experienceItems: [
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
        },
        {
          id: 2,
          title: 'Rinema - Platform Sosial Pecinta Film Indonesia',
          description: 'Sebuah platform komunitas untuk pecinta film Indonesia yang dibangun menggunakan Laravel dan MySQL.',
          category: 'Fullstack',
        },
        {
          id: 7,
          title: 'BebasBlog - RESTful APIs Platform Sosials',
          description: 'Ini adalah layanan backend untuk proyek Bebasblog, sebuah API RESTful yang dibangun untuk mendukung platform blogging atau media sosial.',
          category: 'Backend',
        },
        {
          id: 3,
          title: 'Rebuild Rinema - Platform Sosial Pecinta Film Indonesia',
          description: 'Pengembangan ulang aplikasi web Rinema dengan integrasi API resminya.',
          category: 'Frontend',
        },
        {
          id: 4,
          title: 'Portofolio Website - Desain Dashboard',
          description: 'Website portofolio pribadi dengan design tata letak dashboard',
          category: 'Frontend',
        },
        {
          id: 5,
          title: 'Portofolio Website - Landing Page Design',
          description: 'Website portofolio pribadi dengan design tata letak Landing Page',
          category: 'Frontend',
        },
        {
          id: 6,
          title: 'RESTful APIs Aplikasi Catatan Sederhana',
          description: 'RESTful API sederhana menggunakan Express.js yang berfungsi untuk mengelola catatan (notes).',
          category: 'Backend',
        },
      ],
    },
    contact: {
      title: 'Kontak',
      description: 'Scroll halaman ini dan hubungi saya!',
    },
  },
  jp: {
    nav: {
      home: 'ホーム',
      about: '私について',
      achievements: '業績',
      projects: 'プロジェクト',
      contact: '連絡先',
    },
  },
};
