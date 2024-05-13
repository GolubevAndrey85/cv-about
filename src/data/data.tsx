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
    {label: 'Interests', text: ': AI, robotics, Web3, Natural Science, DIY, Traveling, 4x4, Sport', Icon: SparklesIcon},
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
        icon: 'devicon-typescript-plain colored'
      },
      {
        name: 'GraphQL',
        level: 6,
        icon: 'devicon-graphql-plain colored'
      },
      {
        name: 'JavaScript',
        level: 9,
        icon: 'devicon-javascript-plain'
      },
      {
        name: 'Svelte',
        level: 7,
        icon: 'devicon-svelte-plain colored'
      },
      {
        name: 'Angular',
        level: 6,
        icon: 'devicon-angularjs-plain colored'
      },
      {
        name: 'Material',
        level: 6,
        icon: 'devicon-angularmaterial-plain colored'
      },
      {
        name: 'JQuery',
        level: 6,
        icon: 'devicon-jquery-plain colored'
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
        icon: 'devicon-redux-original colored'
      },
      {
        name: 'HTML',
        level: 6,
        icon: 'devicon-html5-plain colored'
      },
      {
        name: 'NPM',
        level: 6,
        icon: 'devicon-npm-original-wordmark colored'
      },
      {
        name: 'Flutter',
        level: 6,
        icon: 'devicon-flutter-plain colored'
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node',
        level: 8,
        icon: 'devicon-nodejs-plain colored'
      },
      {
        name: 'Java',
        level: 0,
        icon: 'devicon-java-original colored'
      },
      {
        name: 'Golang',
        level: 4,
        icon: 'devicon-go-plain colored'
      },
      {
        name: 'Python',
        level: 4,
        icon: 'devicon-python-plain'
      },
      {
        name: 'Spring',
        level: 8,
        icon: 'devicon-spring-plain colored'
      },
      {
        name: 'MySQL',
        level: 0,
        icon: 'devicon-mysql-original colored'
      },
      {
        name: 'Hibernate',
        level: 4,
        icon: 'devicon-hibernate-plain colored'
      },
      {
        name: 'Maven',
        level: 4,
        icon: 'devicon-maven-plain colored'
      },
      {
        name: 'AWS',
        level: 8,
        icon: 'devicon-amazonwebservices-plain-wordmark colored'
      },
      {
        name: 'Kubernetes',
        level: 4,
        icon: 'devicon-kubernetes-plain colored'
      },
      {
        name: 'Docker',
        level: 0,
        icon: 'devicon-docker-plain colored'
      },
      {
        name: 'MariaDB',
        level: 4,
        icon: 'devicon-mariadb-plain colored'
      },
      {
        name: 'DynamoDB',
        level: 4,
        icon: 'devicon-dynamodb-plain colored'
      },
      {
        name: 'MongoDB',
        level: 4,
        icon: 'devicon-mongodb-plain colored'
      },
      {
        name: 'Liquibase',
        level: 4,
        icon: 'devicon-liquibase-plain colored'
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
        icon: 'devicon-bamboo-original colored'
      },
      {
        name: 'Git',
        level: 0,
        icon: 'devicon-github-original colored'
      },
      {
        name: 'Azure',
        level: 4,
        icon: 'devicon-azuredevops-plain colored'
      },
      {
        name: 'Jenkins',
        level: 4,
        icon: 'devicon-jenkins-plain'
      },
      {
        name: 'Linux',
        level: 4,
        icon: 'devicon-linux-plain colored'
      },
      {
        name: 'Windows',
        level: 4,
        icon: 'devicon-windows11-plain colored'
      },
      {
        name: 'Mac',
        level: 4,
        icon: 'devicon-apple-plain colored'
      },
      {
        name: 'JetBrains',
        level: 4,
        icon: 'devicon-jetbrains-plain'
      },
      {
        name: 'Eclipse',
        level: 4,
        icon: 'devicon-eclipse-plain colored'
      },
      {
        name: 'VSC',
        level: 4,
        icon: 'devicon-vscode-plain colored'
      },
      {
        name: 'Bitbucket',
        level: 4,
        icon: 'devicon-bitbucket-plain colored'
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
        <p>Developed full-stack software solutions using a variety of tools and languages such as Java, Go, Selenium, Spring, MariaDB, Svelte, JavaScript, React, Redux, Saga, GitHub, Docker, Kubernetes, Bamboo, Jira, Confluence, Azure, Splunk, New Relic, and AWS services like Lambda, CloudWatch, CloudFormation, KMS, and EC2;</p>
        <p>Led the development efforts for health insurance IT projects for a duration of one year. This involved managing tasks, coordinating weekly releases, and strategic planning;</p>
        <p>Actively engaged with multiple delivery teams, particularly the core team, to ensure seamless collaboration and project success;</p>
      </p>
    ),
  },
  {
    date: '2021 - Present',
    location: 'Brisbane, Australia',
    title: 'Seniour Software Engineer',
    content: (
      <p>
        <p>Developed the backend service for a drone flight operations, fleet, and compliance management system. Utilized Java, Spring Boot, Hibernate, Liquibase, MariaDB, Bitbucket, and GeoJSON, among other tools;</p>
        <p>Designed and maintained a flight planning module ensuring compliance with CASA rules. This involved integrating coordinates, times, RPA models, NOTAM, and various parameters from geo APIs;</p>
        <p>Implemented preprocessing of geospatial data using Python;</p>
        <p>Troubleshot and optimized a DJI flight logs parsing service (written in C++, Python, running on Ubuntu), including the development of unit tests;</p>
        <p>Contributed to third-party platform app development and integration using Node.js and GraphQL;</p>
      </p>
    ),
  },
  {
    date: '2019 – 2021',
    location: 'Brisbane, Australia',
    title: 'Seniour Software Developer',
    content: (
      <p>
        <p>Developed both backend and frontend components for mining project evaluation, stock data search, and analysis. Leveraged technologies such as Java, Spring Boot, Hibernate, PostgreSQL, Angular 2, Node.js, Bitbucket, Git, and Jenkins, alongside other relevant tools;</p>
        <p>Orchestrated the deployment and upkeep of the AWS stack, encompassing CloudFormation, DynamoDB, AWS Lambda, and ElasticSearch, among other services;</p>
        <p>Crafted comprehensive testing strategies, including unit, regression, and smoke testing, to ensure the robustness and reliability of the developed software solutions;</p>
        <p>Seamlessly integrated stock data provider APIs into the system, enhancing the platform's capability for comprehensive data analysis and evaluation;</p>

      </p>
    ),
  },
  {
    date: '2018 – 2019',
    location: 'Sydney, Australia',
    title: 'Full Stack Developer',
    content: (
      <p>
        <p>Developed web applications and REST APIs using a technology stack comprising Java, Spring, Hibernate, MySQL, HTML, CSS, Bootstrap, JSP, and JavaScript (including JQuery and AJAX). Adopted a continuous development approach and followed agile methodology principles;</p>
        <p>Managed the deployment and maintenance of an AWS infrastructure stack, including EC2, Elastic Beanstalk, Lambda, CloudWatch, SQS, RDS, S3, and DynamoDB;</p>
        <p>Implemented comprehensive testing methodologies, encompassing unit, regression, and smoke testing, alongside the development of automated tests leveraging JUnit and Selenium frameworks;</p>
        <p>Provided dedicated customer support via email for a key client, resolving their inquiries efficiently. Additionally, addressed operational issues for other customer teams, ensuring smooth service delivery;</p>
        <p>Developed detailed documentation and user guides, facilitating the understanding and utilization of the developed software solutions;</p>
      </p>
    ),
  },
  {
    date: '2014 – 2017',
    location: 'Kazan, Russia',
    title: 'Engineer',
    content: (
      <p>
        <p>Led the development of multiple web applications dedicated to automating geotechnical calculations, employing Java, Spring Framework, Hibernate, and MySQL technologies;</p>
        <p>Collaborated within an agile team, adhering to 2-week sprint cycles and actively incorporating feedback from the product manager to refine product features;</p>
        <p>Formulated sophisticated algorithms for data analysis, utilizing tools such as Jama and Apache Commons Math to ensure accurate results;</p>
        <p>Leveraged Spring Core annotations for efficient dependency injection, while employing Spring MVC, Security, and Boot for streamlined application development;</p>
        <p>Designed and implemented JSPs incorporating HTML, CSS, Bootstrap, and JavaScript (including JQuery, AJAX, and plotly) to deliver intuitive user interfaces and interactive data visualization;</p>
        <p>Managed version control processes using Git, ensuring seamless collaboration and codebase integrity among team members;</p>
        <p>Upheld rigorous standards of software quality by maintaining high levels of unit test coverage through Test-Driven Development methodologies, employing JUnit and jMock frameworks;</p>
        <p>Implemented robust logging mechanisms using Spring AOP and AspectJ to monitor application performance and troubleshoot issues effectively;</p>
        <p>Undertook responsibilities in administering MySQL databases and Linux servers, ensuring optimal performance and reliability of the infrastructure supporting the web applications.;</p>
      </p>
    ),
  },
  {
    date: '2014 – 2017',
    location: 'Kazan, Russia',
    title: 'Engineer',
    content: (
      <p>
        <p>Developed software solutions utilizing a diverse set of technologies including Java, C++, HTML, JSP, JavaScript, CSS, and SQL, focusing on data analysis, Advanced Process Control Systems (APCS), and physical modeling. Employed JavaFX, Swing, Jama, Apache Commons Math, and Matlab Servers to achieve project objectives effectively;</p>
        <p>Created dynamic JSPs for web application development, integrating HTML, CSS, Bootstrap, JavaScript (including JQuery and AJAX) to deliver intuitive user interfaces and interactive functionalities;</p>
        <p>Orchestrated project development processes, encompassing tender documentation preparation, project planning and monitoring, customer communication, and report preparation and presentation, ensuring project milestones were met efficiently;</p>
        <p>Led investigations into the synthesis of emulsion for various applications, including medical X-ray, air, and aerospace photographic films. Developed bespoke APCS software to facilitate and optimize the synthesis process;</p>
        <p>Conducted rigorous pre-installation testing of individual modules within a networked environment, ensuring seamless integration and functionality. Oversaw the assembly of disparate modules into cohesive systems;</p>
        <p>Executed comprehensive test synthesis procedures, fine-tuning equipment and software configurations as necessary to meet project specifications. Provided dedicated post-production customer support, ensuring client satisfaction and resolving any issues promptly.;</p>
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
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'mailto@gmail.com',
      href: 'mailto:mailto@gmail.com',
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
