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
      href: '/assets/AndrewGolubevCV_v3.pdf',
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
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
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
        icon: 'devicon-react-original-wordmark colored'
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
        icon: 'devicon-javascript-plain colored'
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
        icon: 'devicon-python-plain colored'
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
        icon: 'devicon-swagger-plain colored'
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
        icon: 'devicon-jenkins-plain colored'
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
        icon: 'devicon-jetbrains-plain colored'
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
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
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
