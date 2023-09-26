const skillsList = [
  { tool: "Html, CSS, CSS3, SASS", level: 80 },
  {
    tool: "BootStrap, Styled-component, Ant-Design, Material-UI, TailwindCSS",
    level: 80,
  },
  { tool: "JavaScript ES6", level: 75 },
  { tool: "ReactJS", level: 80 },
  { tool: "NextJS", level: 70 },
  { tool: "React-Native", level: 40 },
  { tool: "TypeScript", level: 60 },
  { tool: "Redux", level: 75 },
  { tool: "Api, axios, Postman", level: 75 },
  { tool: "NodeJS, ExpressJS", level: 65 },
  { tool: "MongoDB, Prisma", level: 75 },
  { tool: "GraphQL", level: 30 },
  { tool: "Git", level: 80 },
  { tool: "CorelDraw", level: 40 },
];

export const myResumeData = {
  EN: {
    me: {
      name: "Omid SoheilNia",
      job: "Front-End Developer",
      phone: "+ 98 935 440 3007",
      address: "Iran, Tehran(west)",
      age: 1372,
      relationship: "Single",
      intrests: ["Online Game", "Music", "Study", "Tourism"],
      email: "soheilniao@gmail.com",
      linkedin: "Linkedin",
    },
    languages: [{ language: "English", level: 75 }],
    skills: skillsList,
    education: {
      degree: "Bachelor of Information Technology",
      startAt: 1391,
      endAt: 1395,
      location: "Parand Branch Islamic Azad University",
    },
    work_experiences: [
      {
        name: "Sepidar software company",
        workTime: "Part-time",
        description: ["Html", "Css", "JavaScript", "ReactJS"],
      },
      {
        name: "Asiatec Data Transfer Company",
        workTime: "Remote",
        description: ["b2b", "front-end", "JavaScript", "ReactJS"],
      },
      {
        name: "Plaza Store",
        workTime: "Full-time",
        description: [
          "ReactJS",
          "Ant-design",
          "Material-design",
          "Redux-thunk",
          "React-native",
        ],
      },
      {
        name: "PSPexpress.co",
        workTime: "Full-time",
        description: [
          "NextJS",
          "JavaScript",
          "TailwindCss",
          "React-Query",
          "Figma",
          "Jira",
        ],
      },
      {
        name: "Entekhab Industrial Group",
        workTime: "Full-time (active)",
        description: [
          "ReactJS",
          "JavaScript",
          "MaterialUI",
          "RTK",
          "Figma",
          "Jira",
        ],
      },
    ],
    self_projects: [
      {
        projectName: "Online Shope",
        description:
          "In this project, it is possible to view products, register and buy. Orders are managed and registered by admin access. Admin access to view portfolios is available to the public.",
        description2:
          "If the project is not uploaded online, please open it with a filter breaker.",
        description3: "",
        tools: ["NextJS", "MongoDB", "Redux", "CSS", "BootStrap"],
        links: {
          github: "https://github.com/omids0/nextjs-online-shop",
          live: "https://omid-shop.vercel.app/",
        },
      },
      {
        projectName: "Staff Resturant Menu",
        description:
          "This project is designed for the use of employees inside the restaurant. It does not have an interesting appearance, but it has made the working conditions easier. Access levels are included in this project.",
        description2:
          "If the project is not uploaded online, please open it with a filter breaker.",
        description3: "username:10001;   password:admin",
        tools: ["ReactJS", "TailwindCSS", "ExpressJS", "Redux", "MongoDB"],
        links: {
          github: "https://github.com/omids0/staff-menu",
          live: "https://staff-menu-omid.vercel.app/",
        },
      },
      {
        projectName: "A set of JavaScript and React training projects",
        description:
          "A series of training and entertainment projects that have been done by me.",
        description2:
          "If the project is not uploaded online, please open it with a filter breaker.",
        description3: "",
        tools: [
          "HTML",
          "CSS",
          "react-reveal",
          "BootStrap",
          "JavaScript",
          "React",
        ],
        links: {
          github: "https://github.com/omids0/",
          live: "https://omid-soheilnia-projects.herokuapp.com/",
        },
      },
    ],
  },
  IR: {
    me: {
      name: "امید سهیل‌نیا",
      job: "Front-End Developer",
      phone: "+ 98 935 440 3007",
      address: "Iran, Tehran(west)",
      age: 1372,
      relationship: "Single",
      intrests: ["Online Game", "Music", "Study", "Tourism"],
      email: "soheilniao@gmail.com",
      linkedin: "Linkedin",
    },
    languages: [{ language: "English", level: 75 }],
    skills: skillsList,
    education: {
      degree: "کارشناسی فناوری اطلاعات",
      startAt: 1391,
      endAt: 1395,
      location: "دانشگاه آزاد اسلامی واحد پرند",
    },
    work_experiences: [
      {
        name: "شرکت نرم افزاری سپیدار",
        workTime: "پاره وقت",
        description: ["Html", "Css", "JavaScript", "ReactJS"],
      },
      {
        name: "شرکت انتقال داده‌های آسیاتک",
        workTime: "دورکاری",
        description: ["b2b", "front-end", "JavaScript", "ReactJS"],
      },
      {
        name: "فروشگاه پلازیو",
        workTime: "تمام وقت",
        description: [
          "ReactJS",
          "Ant-design",
          "Material-design",
          "Redux-thunk",
          "React-native",
        ],
      },
      {
        name: "PSPexpress.co",
        workTime: "تمام وقت",
        description: [
          "NextJS",
          "JavaScript",
          "TailwindCss",
          "React-Query",
          "Figma",
          "Jira",
        ],
      },
      {
        name: "گروه صنعتی انتخاب",
        workTime: "تمام وقت (فعال)",
        description: [
          "ReactJS",
          "JavaScript",
          "MaterialUI",
          "RTK",
          "Figma",
          "Jira",
        ],
      },
    ],
    self_projects: [
      {
        projectName: "Online Shope",
        description:
          "در این پروژه امکان مشاهده محصولات، ثبت و خرید می باشد. توسط دسترسی ادمین سفارشات مدیریت و ثبت میشوند. دسترسی ادمین جهت مشاهده نمونه کار در دسترس عموم قرار گرفته است.",
        description2:
          "در صورتی که پروژه به صورت انلاین آپ نشد، لطفا با فیلترشکن باز نمایید.",
        description3: "",
        tools: ["NextJS", "MongoDB", "Redux", "CSS", "BootStrap"],
        links: {
          github: "https://github.com/omids0/nextjs-online-shop",
          live: "https://omid-shop.vercel.app/",
        },
      },
      {
        projectName: "Staff Resturant Menu",
        description:
          "این پروژه جهت استفاده کارکنان داخل رستوران طراحی شده است. از ظاهر جالبی برخوردار نیست، اما شرایط کار را آسان تر کرده است. سطح دسترسی ها در این پروژه لحاظ شده است.",
        description2:
          "در صورتی که پروژه به صورت انلاین آپ نشد، لطفا با فیلترشکن باز نمایید.",
        description3: "username:10001;   password:admin",
        tools: ["ReactJS", "TailwindCSS", "ExpressJS", "Redux", "MongoDB"],
        links: {
          github: "https://github.com/omids0/staff-menu",
          live: "https://staff-menu-omid.vercel.app/",
        },
      },
      {
        projectName: "A set of JavaScript and React training projects",
        description:
          "مجموعه ای از پروژه های تمرینی و تفریحی که توسط اینجانب انجام شده است.",
        description2:
          "در صورتی که پروژه به صورت انلاین آپ نشد، لطفا با فیلترشکن باز نمایید.",
        description3: "",
        tools: [
          "HTML",
          "CSS",
          "react-reveal",
          "BootStrap",
          "JavaScript",
          "React",
        ],
        links: {
          github: "https://github.com/omids0/",
          live: "https://omid-soheilnia-projects.herokuapp.com/",
        },
      },
    ],
  },
};
