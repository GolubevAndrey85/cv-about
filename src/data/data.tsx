import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
  // CalendarIcon,
  // FlagIcon,
  // MapIcon,
  // SparklesIcon,
} from '@heroicons/react/24/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import resumeBackgroundImage from '../images/resume-background.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const cvBackgroundImage = resumeBackgroundImage;

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume',
  description: "Andrey's resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Andrey Golubev`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Brisbane based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100"><a href='https://comparethemarket.com.au/'>Compare the Market</a></strong>
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/AndreyCV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have 10+ years of experience in diverse software development roles, with a deep understanding of engineering 
  best practices. I'm passionate about producing clean, maintainable code, and have a proven track record of 
  delivering high-quality work on time. I'm highly organized, detail-oriented, and a strong team player, always 
  eager to learn and take on new challenges in fast-paced environments.`,
  aboutItems: [
    {label: 'Location', text: 'Brisbane', ref: 'https://www.google.com/maps/place/Brisbane+QLD/@-27.3821429,152.9931964,10z/data=!3m1!4b1!4m6!3m5!1s0x6b91579aac93d233:0x402a35af3deaf40!8m2!3d-27.4704528!4d153.0260341!16zL20vMDFiOGpq?entry=ttu', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'AI, robotics, Web3, Science, DIY, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'KFU', ref: 'https://eng.kpfu.ru/', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CTM', ref: 'https://comparethemarket.com.au/', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
        icon: 'devicon-react-original-wordmark'
      },
      {
        name: 'Typescript',
        level: 7,
        icon: 'devicon-typescript-plain '
      },
      {
        name: 'GraphQL',
        level: 6,
        icon: 'devicon-graphql-plain '
      },
      {
        name: 'JavaScript',
        level: 9,
        icon: 'devicon-javascript-plain'
      },
      {
        name: 'Svelte',
        level: 7,
        icon: 'devicon-svelte-plain '
      },
      {
        name: 'Angular',
        level: 6,
        icon: 'devicon-angularjs-plain '
      },
      {
        name: 'Material',
        level: 6,
        icon: 'devicon-angularmaterial-plain '
      },
      {
        name: 'JQuery',
        level: 6,
        icon: 'devicon-jquery-plain '
      },
      {
        name: 'CSS',
        level: 6,
        icon: 'devicon-css3-plain-wordmark'
      },
      {
        name: 'bootstrap',
        level: 6,
        icon: 'devicon-bootstrap-plain-wordmark'
      },
      {
        name: 'Redux',
        level: 6,
        icon: 'devicon-redux-original '
      },
      {
        name: 'HTML',
        level: 6,
        icon: 'devicon-html5-plain '
      },
      {
        name: 'NPM',
        level: 6,
        icon: 'devicon-npm-original-wordmark '
      },
      {
        name: 'Flutter',
        level: 6,
        icon: 'devicon-flutter-plain '
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node',
        level: 8,
        icon: 'devicon-nodejs-plain '
      },
      {
        name: 'Java',
        level: 0,
        icon: 'devicon-java-original '
      },
      {
        name: 'Golang',
        level: 4,
        icon: 'devicon-go-plain '
      },
      {
        name: 'Python',
        level: 4,
        icon: 'devicon-python-plain'
      },
      {
        name: 'Spring',
        level: 8,
        icon: 'devicon-spring-plain '
      },
      {
        name: 'MySQL',
        level: 0,
        icon: 'devicon-mysql-original '
      },
      {
        name: 'Hibernate',
        level: 4,
        icon: 'devicon-hibernate-plain '
      },
      {
        name: 'Maven',
        level: 4,
        icon: 'devicon-maven-plain '
      },
      {
        name: 'AWS',
        level: 8,
        icon: 'devicon-amazonwebservices-plain-wordmark '
      },
      {
        name: 'Kubernetes',
        level: 4,
        icon: 'devicon-kubernetes-plain '
      },
      {
        name: 'Docker',
        level: 0,
        icon: 'devicon-docker-plain '
      },
      {
        name: 'MariaDB',
        level: 4,
        icon: 'devicon-mariadb-plain '
      },
      {
        name: 'DynamoDB',
        level: 4,
        icon: 'devicon-dynamodb-plain '
      },
      {
        name: 'MongoDB',
        level: 4,
        icon: 'devicon-mongodb-plain '
      },
      {
        name: 'Liquibase',
        level: 4,
        icon: 'devicon-liquibase-plain '
      },
      {
        name: 'Swagger',
        level: 4,
        icon: 'devicon-swagger-plain'
      },
    ],
  },
  {
    name: 'Other tools',
    skills: [
      {
        name: 'Bamboo',
        level: 8,
        icon: 'devicon-bamboo-original '
      },
      {
        name: 'Git',
        level: 0,
        icon: 'devicon-github-original '
      },
      {
        name: 'Azure',
        level: 4,
        icon: 'devicon-azuredevops-plain '
      },
      {
        name: 'Jenkins',
        level: 4,
        icon: 'devicon-jenkins-plain'
      },
      {
        name: 'Linux',
        level: 4,
        icon: 'devicon-linux-plain '
      },
      {
        name: 'Windows',
        level: 4,
        icon: 'devicon-windows11-plain '
      },
      {
        name: 'Mac',
        level: 4,
        icon: 'devicon-apple-plain '
      },
      {
        name: 'JetBrains',
        level: 4,
        icon: 'devicon-jetbrains-plain'
      },
      {
        name: 'Eclipse',
        level: 4,
        icon: 'devicon-eclipse-plain '
      },
      {
        name: 'VSC',
        level: 4,
        icon: 'devicon-vscode-plain '
      },
      {
        name: 'Bitbucket',
        level: 4,
        icon: 'devicon-bitbucket-plain '
      },
      {
        name: 'Selenium',
        level: 4,
        icon: 'devicon-selenium-original '
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2009',
    location: 'Kazan State University',
    title: 'Master’s Degree in Physics',
    content: <p>Cum Laude</p>,
  },
  {
    date: '2007',
    location: 'Kazan State University',
    title: 'Bachelor’s Degree in Radio Physics',
    content: <p>Cum Laude</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2021 - Present',
    location: 'Compare the Market, Brisbane, Australia',
    title: 'Seniour Software Engineer',
    content: (
      <p>
        <p>- Engineered robust full-stack solutions using Java, Go, Selenium, Spring, MariaDB, Svelte, JavaScript, React, Redux, Saga, GitHub, Docker, Kubernetes, Bamboo, Jira, Confluence, Azure, Splunk, New Relic, and AWS services (Lambda, CloudWatch, CloudFormation, KMS, EC2);</p>
        <p>- Spearheaded the development of health insurance IT projects, overseeing task management, coordinating weekly releases, and executing strategic planning;</p>
        <p>- Actively collaborated with multiple delivery teams, particularly the core team, to ensure seamless project execution and success;</p>
      </p>
    ),
  },
  {
    date: '2021 - Present',
    location: 'Brisbane, Australia',
    title: 'Seniour Software Engineer',
    content: (
      <p>
        <p>- Developed a backend service for drone flight operations, fleet, and compliance management using Java, Spring Boot, Hibernate, Liquibase, MariaDB, Bitbucket, and GeoJSON;</p>
        <p>- Designed and maintained a flight planning module compliant with CASA rules, integrating coordinates, times, RPA models, NOTAM, and geo API parameters;</p>
        <p>- Implemented preprocessing of geospatial data using Python;</p>
        <p>- Optimized a DJI flight logs parsing service (C++, Python on Ubuntu) and developed comprehensive unit tests;</p>
        <p>- Contributed to third-party platform app development and integration using Node.js and GraphQL;</p>
      </p>
    ),
  },
  {
    date: '2019 – 2021',
    location: 'Brisbane, Australia',
    title: 'Seniour Software Developer',
    content: (
      <p>
        <p>- Engineered backend and frontend components for mining project evaluation and stock data search/analysis using Java, Spring Boot, Hibernate, PostgreSQL, Angular 2, Node.js, Bitbucket, Git, and Jenkins;</p>
        <p>- Managed AWS stack deployment and maintenance, including CloudFormation, DynamoDB, AWS Lambda, and ElasticSearch.;</p>
        <p>- Crafted and implemented unit, regression, and smoke testing strategies to ensure software reliability;</p>
        <p>- Seamlessly integrated stock data provider APIs, enhancing platform capabilities for comprehensive data analysis;</p>

      </p>
    ),
  },
  {
    date: '2018 – 2019',
    location: 'Sydney, Australia',
    title: 'Full Stack Developer',
    content: (
      <p>
        <p>- Developed web applications and REST APIs using Java, Spring, Hibernate, MySQL, HTML, CSS, Bootstrap, JSP, and JavaScript (including JQuery and AJAX), adhering to agile methodologies;</p>
        <p>- Managed AWS infrastructure deployment and maintenance, including EC2, Elastic Beanstalk, Lambda, CloudWatch, SQS, RDS, S3, and DynamoDB;</p>
        <p>- Implemented automated testing methodologies using JUnit and Selenium;</p>
        <p>- Provided dedicated customer support and resolved operational issues efficiently;</p>
        <p>- Developed detailed documentation and user guides to facilitate software utilization;</p>
      </p>
    ),
  },
  {
    date: '2014 – 2017',
    location: 'Kazan, Russia',
    title: 'Engineer',
    content: (
      <p>
        <p>- Led the development of web applications for automating geotechnical calculations using Java, Spring, Hibernate, and MySQL;</p>
        <p>- Worked within an agile team, refining product features based on feedback and sprint cycles;</p>
        <p>- Developed sophisticated data analysis algorithms using Jama and Apache Commons Math;</p>
        <p>- Designed intuitive UIs with JSP, HTML, CSS, Bootstrap, and JavaScript (including JQuery, AJAX, and plotly);</p>
        <p>- Managed version control with Git, ensuring seamless collaboration;</p>
        <p>- Maintained high levels of unit test coverage through TDD with JUnit and jMock;</p>
        <p>- Implemented robust logging with Spring AOP and AspectJ, and administered MySQL databases and Linux servers for optimal performance;</p>
      </p>
    ),
  },
  {
    date: '2014 – 2017',
    location: 'Kazan, Russia',
    title: 'Engineer',
    content: (
      <p>
        <p>- Developed software solutions using Java, C++, HTML, JSP, JavaScript, CSS, and SQL for data analysis, APCS, and physical modeling;</p>
        <p>- Created dynamic JSPs integrating HTML, CSS, Bootstrap, JavaScript (including JQuery and AJAX);</p>
        <p>- Orchestrated project development processes, including tender documentation, planning, monitoring, and customer communication;</p>
        <p>- Developed bespoke APCS software for emulsion synthesis in various applications;</p>
        <p>- Conducted pre-installation testing, ensuring seamless integration, and provided post-production support;</p>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Senior Developer, Mining Evaluation Project',
      text: 'Andrey demonstrated exceptional skill in both backend and frontend development. Their ability to integrate complex APIs and ensure robust AWS deployments was crucial in enhancing our data analysis capabilities.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Project Coordinator, APCS Team',
      text: 'Andrey excelled in developing sophisticated APCS software for our emulsion synthesis projects. Their ability to manage complex project requirements and deliver high-quality software was highly commendable.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Product Manager, Geotechnical Team',
      text: 'Andrey led the development of our geotechnical applications with remarkable expertise. Their innovative algorithms and efficient use of technologies like Spring and MySQL greatly improved our calculation automation processes',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: 'Please feel free to reach out to me',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@andreygolubev.online',
      href: 'mailto:contact@andreygolubev.online',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/andrey-golubev-1035152b/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
