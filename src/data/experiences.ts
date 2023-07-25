export interface IExperiences {
  company: string
  jobTitle: string
  class: string
  modal: {
    jobTime: string
    description: string
    tags: string[]
  }
}

export const experiences: Record<string, IExperiences> = {
  nursoft: { 
    company: 'NurSoft',
    jobTitle: 'FRONT-END',
    class: 'nursoft',
    modal: {
      jobTime: '02.27.2022 - 08.16.2022',
      description: 'He completed a three-month internship after taking the position of Forntend developer. Participated in the development of the UI library. Engaged in the development of refactor components and code optimizations. Test coverage.',
      tags: ['JavaScript', 'HTML', 'CSS', 'e2e Test', 'WebPack', 'Git', 'Scrum', 'Core JS', 'Pioneer']
    }
  },
  freelanceOne: { 
    company: 'FREELANCE',
    jobTitle: 'FRONT-END',
    class: 'freelance',
    modal: {
      jobTime: '08.26.2022 - 09.28.2022',
      description: `Development of Landing and Multi-Page websites, design development at the customer's request, seo optimization, website development on html css js without working with animation libraries.`,
      tags: ['Javascript', 'CSS', 'SCSS', 'Git', 'Core JS', 'Anime JS', 'Velocity JS', 'Vite']
    }
  },
  rss: { 
    company: 'RS School',
    jobTitle: 'INTERN',
    class: 'rss',
    modal: {
      jobTime: '08.17.2022 - 12.16.2022',
      description: 'Development in a team under the guidance of a mentor on the scrum methodology of duolingo and taskero clone clones, gained experience working together on large projects, used effective architectural solutions in practice, gained experience in the role of Team Lead',
      tags: ['TypeScript', 'HTML', 'SCSS', 'React Testing Library', 'React DnD', 'MUI', 'React', 'Redux', 'React-Hook-Form', 'WebPack']
    }
  },
  freshBerry: { 
    company: 'FRESH BERRY',
    jobTitle: 'FRONT-END',
    class: 'freshberry',
    modal: {
      jobTime: '09.28.2022 - 12.02.2022',
      description: 'participation in the development of a CRM system, for structuring and storing data. Engaged in the development of the dashboard panel development of the service using redux-toolkit for interaction with the server api',
      tags: ['TypeScript', 'React', 'SCSS', 'Redux', 'Bootstrap', 'React Select', 'React Spinner', 'ChartJS']
    }
  },
  freelanceTwo: { 
    company: 'FREELANCE',
    jobTitle: 'FULL-STACK',
    class: 'freelance-two',
    modal: {
      jobTime: '12.02.2022 - 01.20.2023',
      description: 'Application development for catering staff. To distribute tasks to employees, notification of completion, input of employee results data to demonstrate the success rating and issue bonuses',
      tags: ['TypeScript', 'SCSS', 'React', 'Redux', 'Framer Motion', 'ChartJS', 'WebPack', 'NODE', 'NestJS', 'MONGODB']
    }
  },
  realtor: { 
    company: 'Realtor PL',
    jobTitle: 'FULL-STACK',
    class: 'realtor',
    modal: {
      jobTime: '01.25.2023 - 03.08.2023',
      description: 'Participated in the development of an aggregator for parsing data from the largest Polish rental search sites. Gained experience working with graphql and working with micro-service architecture',
      tags: ['TypeScript', 'NestJS', 'TypeORM', 'PostgreSQL', 'DOCKER', 'cheerio', 'puppeteer']
    }
  }
}