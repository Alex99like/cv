import JavaRush from '../assets/image-ee/javarush.png'
import RssPre from '../assets/image-ee/pre-rss.png'
import RssQ1 from '../assets/image-ee/rss-q1.png'
import RssQ4 from '../assets/image-ee/rss-q4.png'
import RssReact from '../assets/image-ee/react.png'

export interface IEducation {
  name: string
  time: number
  class: string
  modal: {
    image: string
    title: string
    performance: string
    skills: string[]
    description: string
  }
}

export const education: Record<string, IEducation> = {
  JavaRush: {
    name: 'JavaRush : JAVA Core',
    time: 8,
    class: 'javarush',
    modal: {
      image: JavaRush,
      title: 'JAVARUSH',
      performance: '66% / 100%',
      skills: [
        'Java Syntax', 'Java Core', 
        'Java Multithreading', 'Java Collections', 'Object Oriented Programming'
      ],
      description: 'during the course, I studied the basics of the java language, collection types, multithreading, studied the basics of OOP (Encapsulation, Abstraction, Polymorphism, Inheritance). wrote logic for 6 applications'
    }
  },
  rssS1: {
    name: 'RS School PRE-RSS',
    time: 3,
    class: 'rss-pre',
    modal: {
      image: RssPre,
      title: 'RS SCHOOL',
      performance: '96% / 100%',
      skills: [
        'Git', 'HTML', 'CSS', 'CSS Flex', 'CSS Grid', 'Figma',
        'Adaptive Layout', 'Basic-JavaScript', 'DOM API', 'DOM Events', 
        'Algorithms', 'Data Structure'
      ],
      description: 'in the course of training, I studied the creation of simple web sites, adaptive layout, the creation of components in native js like slider, burger, the basics of data structures, solving algorithmic problems.'
    }
  },
  rssS2: {
    name: 'RS School : FRONT-END',
    time: 7,
    class: 'rss-front',
    modal: {
      image: RssQ1,
      title: 'RS SCHOOL',
      performance: '98% / 100%',
      skills: [
        'JavaScript', 'TypeScript', 'SCSS', 'WebPack', 'WEB API', 'Object Oriented Programming',
        'Algorithms', 'Data Structure', 'Kanban', 'Scrum', 'Design patterns'
      ],
      description: 'creation of web sites and spa using typescript and design templates for ready-made projects in typescript, full webpack configuration. Team work on large projects using scrum methodology under the guidance of a Team-Lead.'
    }
  },
  rssReact: {
    name: 'RS School REACT',
    time: 4,
    class: 'rss-react',
    modal: {
      image: RssReact,
      title: 'RS SCHOOL',
      performance: '100% / 100%',
      skills: [
        'REACT', 'REDUX', 'Redux Toolkit', 'React Hook Form',
        'React Router DOM', 'CSR', 'SSR', 'SSG', 
        'React Testing Library', 'e2e Test', 'SOLID'
      ],
      description: 'creating spa projects using react. the use of class and functional components, compliance with the principles of S.O.L.I.D implementation of redux, optimization of projects and test coverage of the use of additional libraries. Participation in the project as a Team-Lead'
    }
  },
  rssNode: {
    name: 'RS School NODE',
    time: 3,
    class: 'rss-node',
    modal: {
      image: RssQ4,
      title: 'RS SCHOOL',
      performance: '99% / 100%',
      skills: [
        'NODE', 'WebSocket', 'NutJS', 'Fastify', 'REST',
        'GraphQL' ,'TypeORM', 'PostgreSQL', 'NestJS', 'Model View Controller', 'Docker'
      ],
      description: 'development using TypeScript cli application, creating a load balancer on node without using third-party libraries, integrating graphql into a fastify project, creating a rest api server using NestJS'
    }
  }
}