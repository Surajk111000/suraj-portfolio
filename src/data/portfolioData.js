import profileImage from '../image/pic_profile-.png'

export const profile = {
  name: 'Suraj Kumar',
  title: 'Data Analyst & Software Engineer',
  location: 'Hyderabad, Telangana, India',
  email: 'surajk201611@gmail.com',
  profileImage,
  summary:
    'Associate Software Engineer with a strong foundation in data analytics and software development. I build reliable, scalable, and data-driven solutions using Python, SQL, React, and FastAPI, and I actively work on Machine Learning, Deep Learning, and LLM-based applications with a focus on clean engineering and practical business impact.'
}

export const socialMedia = [
  {
    label: 'LinkedIn',
    handle: 'Suraj Kumar',
    url: 'https://www.linkedin.com/in/ksuraj1110/',
    headline: 'Suraj Kumar · LinkedIn profile',
    description: 'Explore professional experience, education, certifications, and career updates on LinkedIn.',
    stats: ['Professional Profile', 'Career Updates', 'Network Connections'],
    coverStyle: 'from-sky-500 via-blue-700 to-slate-800',
    recentActivity: [
      'Professional updates, projects, and achievements on LinkedIn',
      'Open profile for complete career timeline and activity'
    ]
  },
  {
    label: 'LeetCode',
    handle: 'surajk11',
    url: 'https://leetcode.com/u/surajk11/',
    headline: 'Suraj Kumar · LeetCode profile',
    description: 'View coding practice profile, problem-solving journey, and competitive programming progress.',
    stats: ['Coding Practice', 'Problem Solving', 'DSA Progress'],
    coverStyle: 'from-amber-400 via-orange-500 to-yellow-600',
    recentActivity: [
      'Track coding challenge activity and algorithm practice updates',
      'Open profile to view full LeetCode progress and submissions'
    ]
  },
  {
    label: 'Facebook',
    handle: 'Suraj Kumar',
    url: 'https://www.facebook.com/profile.php?id=100016677335654',
    headline: 'Suraj Kumar · Facebook profile',
    description: 'Connect with Suraj Kumar on Facebook and view profile updates, posts, and public activity.',
    stats: ['Public Profile', 'Profile Posts', 'Community Connections'],
    coverStyle: 'from-blue-500 via-blue-600 to-sky-600',
    recentActivity: [
      'Timeline updates and profile activities are available on Facebook',
      'Open profile to browse complete post history'
    ]
  },
  {
    label: 'Instagram',
    handle: '@surajk11',
    url: 'https://www.instagram.com/surajk11/',
    headline: 'Suraj Kumar (@surajk11) · Instagram profile',
    description: 'See photos and videos from Suraj Kumar. Explore profile posts, updates, and social activity.',
    stats: ['834 Followers', '971 Following', '36 Posts'],
    coverStyle: 'from-fuchsia-500 via-purple-600 to-indigo-600',
    recentActivity: [
      'Recent reels, photos, and profile updates visible on Instagram',
      'Open full profile to view latest posts and highlights'
    ]
  }
]

export const projectProfiles = [
  {
    label: 'GitHub',
    url: 'https://github.com/Surajk111000',
    logoKey: 'github',
    description: 'Explore software repositories, code projects, and development work.'
  },
  {
    label: 'Kaggle',
    url: 'https://www.kaggle.com/surajk201611',
    logoKey: 'kaggle',
    description: 'Explore notebooks, data analysis work, and machine learning practice.'
  }
]

export const experience = [
  {
    role: 'Associate Software Engineer',
    org: 'ITS Planners and Engineers',
    duration: 'Jul 2024 - Present',
    type: 'Full-time',
    logoKey: 'itspe',
    description:
      'Working on software development and problem-solving with Python, SQL, JavaScript, FastAPI, React.js, Git, and GitHub.'
  },
  {
    role: 'Teaching Assistant',
    org: 'Indian Institute of Technology, Bombay',
    duration: 'Dec 2022 - Jul 2024',
    type: 'Part-time',
    logoKey: 'iitb',
    description:
      'Assisted in laboratory sessions and report evaluations for graduate/postgraduate students, and collaborated on undergraduate answer script evaluations.'
  },
  {
    role: 'Summer Intern',
    org: 'iHub - AWaDH @ IIT Ropar',
    duration: 'Jun 2021 - Jul 2021',
    type: 'Full-time',
    logoKey: 'awadh',
    description:
      'Completed course on AI & CPS for agriculture automation and built a capstone Android app for smart irrigation and weather information using Arduino, Android Studio, Flutter, and IoT concepts.'
  },
  {
    role: 'Research Intern',
    org: 'IIEST, Shibpur',
    duration: 'May 2020 - Jul 2020',
    type: 'Full-time',
    logoKey: 'iiest',
    description: 'Worked on design and CAD modeling of rapidly deployed UAVs under Dr. Joydeep Bhowmik.'
  }
]

export const education = [
  {
    institute: 'Indian Institute of Technology, Bombay',
    degree: 'Master of Technology (MTech), Aerospace Engineering',
    duration: 'Jul 2022 - Jul 2024',
    grade: '8.96',
    logoKey: 'iitb'
  },
  {
    institute: 'Indian Institute of Engineering Science and Technology (IIEST), Shibpur',
    degree: "Bachelor's Degree, Aerospace Engineering",
    duration: 'Jun 2018 - May 2022',
    grade: '8.04',
    logoKey: 'iiest'
  },
  {
    institute: 'Army Public School (APS)',
    degree: 'Higher Secondary',
    duration: 'Jun 2015 - Mar 2017',
    grade: '84.6%',
    logoKey: 'aps'
  }
]

export const projects = [
  {
    name: 'VTOL Autonomous Air Ambulance Conceptual Design',
    logoKey: 'nacdec',
    projectType: 'Competition Project',
    details:
      'Part of a 5-member IIT Bombay team for NACDeC-VI (2022-23), focused on conceptual design and sizing of a VTOL autonomous air ambulance.'
  },
  {
    name: 'DRDO Funded Mini Fixed-Wing UAV',
    logoKey: 'drdo',
    projectType: 'Funded Research Project',
    details:
      'Contributed to design and development of a catapult-launchable mini fixed-wing UAV under Dr. Joydeep Bhowmik at IIEST, Shibpur.'
  },
  {
    name: 'Smart Irrigation & Weather Android App',
    logoKey: 'awadh',
    projectType: 'Internship Capstone',
    details:
      'Capstone project during iHub-AWaDH IIT Ropar internship, focused on AI & CPS for agriculture automation.'
  }
]

export const achievements = [
  {
    title: 'Secured 2nd Rank at the 6th National Aerospace Conceptual Design Competition (NACDeC-VI, 2022-23).',
    issuer: 'NACDeC',
    logoKey: 'nacdec',
    iconKey: 'trophy'
  },
  {
    title: 'Completed Google Data Analytics Specialization.',
    issuer: 'Google',
    logoKey: 'google',
    iconKey: 'chart'
  },
  {
    title: 'Completed Deep Learning Specialization by DeepLearning.AI.',
    issuer: 'DeepLearning.AI',
    logoKey: 'deeplearningai',
    iconKey: 'chip'
  },
  {
    title: 'Completed Spark, Hadoop, and Snowflake for Data Engineering (Duke University, Mar 2026).',
    issuer: 'Duke University',
    logoKey: 'duke',
    iconKey: 'academic'
  },
  {
    title: 'Selected for Amazon ML Summer School 2023.',
    issuer: 'Amazon',
    logoKey: 'amazon',
    iconKey: 'sparkle'
  }
]

export const hobbies = [
  'Data analysis and visualization',
  'Building web apps with React',
  'Machine learning exploration',
  'Aeromodelling and UAV concepts',
  'Technical competitions and mentorship',
  'FastAPI backend development',
  'PySpark and Databricks',
  'Dance',
  'Swimming',
  'Gym'
]

export const certifications = [
  {
    title: 'Spark, Hadoop, and Snowflake for Data Engineering',
    issuer: 'Duke University',
    issued: 'Mar 2026',
    credentialId: 'K8APNGWSCJ9C',
    logoKey: 'duke'
  },
  {
    title: 'Google Data Analytics Specialization',
    issuer: 'Google',
    issued: 'Aug 2023',
    credentialId: 'KWJPPNWDD598',
    logoKey: 'google'
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
    issued: 'May 2023',
    credentialId: 'AXKJNASRTQ8C',
    logoKey: 'google'
  },
  {
    title: 'What is Data Science?',
    issuer: 'IBM',
    issued: 'Dec 2022',
    credentialId: '6CCX3BUPMPR8',
    logoKey: 'ibm'
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'IBM',
    issued: 'Aug 2023',
    credentialId: 'SJC2NFQD548W',
    logoKey: 'ibm'
  },
  {
    title: 'Amazon ML Summer School 2023',
    issuer: 'Amazon',
    issued: 'Nov 2023',
    credentialId: 'Program Certificate',
    logoKey: 'amazon'
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    issued: 'Jul 2023',
    credentialId: '8LUKVSQ34PE4',
    logoKey: 'deeplearningai'
  },
  {
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI',
    issued: 'Jul 2023',
    credentialId: 'DG8KBP2E2CDG',
    logoKey: 'deeplearningai'
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    issued: 'Jun 2023',
    credentialId: 'E2PXTUWJT3T4',
    logoKey: 'deeplearningai'
  }
]

export const leadership = [
  {
    title: 'Team Member',
    org: 'Aerodesign Team IIEST Shibpur',
    type: 'Full-time',
    duration: 'Jul 2019 - May 2022 · 2 yrs 11 mos',
    logoKey: 'aeromodelling',
    points: [
      'Volunteer at Workshop of R.C. plane during Abhiyanrix2020.',
      'Participant in boomerang competition, Tech Fest IIEST Shibpur.',
      'Participated in BOEING IIT DELHI Aeromodelling competition event held at IIT KGP during Techfest 2019.',
      'SAE AERODESIGN 2020: designed and built a working UAV model under 5 kg carrying payload.'
    ]
  },
  {
    title: 'Cultural Secretary',
    org: 'H13 IIT Bombay',
    type: 'Leadership Role',
    duration: 'Jul 2023 - Jun 2024 · 1 yr',
    logoKey: 'h13',
    points: ['Led and coordinated cultural activities for the hostel, including planning, execution, and student engagement.']
  },
  {
    title: 'Student Companion',
    org: 'Institute Student Companion Programme (ISCP)',
    type: 'Full-time',
    duration: 'Jun 2023 - Jun 2024 · 1 yr 1 mo',
    logoKey: 'iscp',
    points: ['Supported and guided students through mentorship and companion activities as part of ISCP.']
  },
  {
    title: 'Active Dance Member',
    org: 'Reflexobeta, IIEST Shibpur',
    type: 'Cultural Team',
    duration: '4 years',
    logoKey: 'reflexobeta',
    points: [
      'Active dance member for 4 years in Reflexobeta at IIEST Shibpur.',
      'Participated in multiple college and inter-college cultural events.'
    ]
  },
  {
    title: 'Teaching Assistant',
    org: 'Indian Institute of Technology, Bombay',
    type: 'Part-time',
    duration: 'Dec 2022 - Jul 2024 · 1 yr 8 mos',
    logoKey: 'iitb',
    points: [
      'Assisted in explaining and conducting laboratory experiments for graduate and postgraduate students.',
      'Evaluated lab reports and collaborated with teaching assistants for undergraduate answer script evaluations.'
    ]
  }
]

export const skills = [
  {
    category: 'Programming',
    icon: 'code',
    items: ['Python', 'SQL', 'C++', 'JavaScript', 'HTML', 'CSS', 'PHP', 'Hack', 'React']
  },
  {
    category: 'Frameworks',
    icon: 'frame',
    items: ['FastAPI', 'Celery', 'pandas', 'TensorFlow', 'scikit-learn', 'gRPC', 'MySQL', 'SQLite', 'SQLAlchemy']
  },
  {
    category: 'Tools',
    icon: 'tool',
    items: ['Docker', 'Git', 'Linux', 'curl', 'Grafana', 'Poetry', 'phpMyAdmin', 'Postman', 'SolidWorks', 'AutoCAD']
  },
  {
    category: 'Soft Skills',
    icon: 'people',
    items: ['Communication', 'Team Management', 'Leadership', 'Collaboration', 'Problem Solving']
  },
  {
    category: 'Other',
    icon: 'sparkle',
    items: ['Algorithms', 'Data Structures', 'LaTeX', 'Microsoft Word', 'PowerPoint']
  }
]