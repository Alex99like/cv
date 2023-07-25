import CVImage from '../../assets/projects/cv.png'
import RSImage from '../../assets/projects/rslang.png'
import KBImage from '../../assets/projects/kanban.png'
import CVImageMobile from '../../assets/projects/cv-mobile.png'
import RSImageMobile from '../../assets/projects/rslang-mobile.png'
import KBImageMobile from '../../assets/projects/mobile-taskero.png'

export interface IProject {
  mainImage: string
  mobileImage: string
  title: string
  time: number
  tags: string[]
}

export const projectData: Record<string, IProject> = {
  cv: {
    mainImage: CVImage,
    mobileImage: CVImageMobile,
    title: 'CV Portfolio',
    time: 7,
    tags: [
      'TypeScript', 'SCSS', 'React', 'Webpack', 
      'Framer Motion', 'React Hook Form', 'Lottie React',
      'React Router Dom', 'Axios', 'Node', 'Express', 'Telegram Api Bot'
    ]
  },
  rslang: {
    mainImage: RSImage,
    mobileImage: RSImageMobile,
    title: 'RS Lang',
    time: 28,
    tags: [
      'TypeScript', 'SCSS', 'Webpack', 'ChartJS', 'Node', 
      'Express', 'MongoDB'
    ]
  },
  kanban: {
    mainImage: KBImage,
    mobileImage: KBImageMobile,
    title: 'Taskero Board',
    time: 21,
    tags: [
      'TypeScript', 'SCSS', 'React', 'React Hook Form', 'React DnD',
      'Redux', 'Redux Toolkit Query', 'Lottie React', 'i18next', 'MUI',
      'Node', 'NestJS', 'PostgreSQL'
    ]
  }
}