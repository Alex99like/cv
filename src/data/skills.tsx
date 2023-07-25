import { FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaNpm, FaYarn } from 'react-icons/fa'
import { SiNextdotjs, SiRedux, SiExpress, SiNestjs, SiGraphql, SiApollographql, SiPostgresql, SiMongodb, SiWebpack, SiVite, SiFigma, SiDocker } from 'react-icons/si'
import { FiFramer, } from 'react-icons/fi'
import { TbBrandReactNative } from 'react-icons/tb'


export const skillsData = [
  { name: 'JS', direction: ['all', 'frontend', 'backend'], type: 'Language', class: 'js', projects: 17 },
  { name: 'TS', direction: ['all', 'frontend', 'backend'], type: 'Language', class: 'ts', projects: 32 },
  { name: 'GIT', icon: FaGitAlt, direction: ['all', 'tools'], type: 'Tool', class: 'git', projects: 52 },
  { name: 'HTML', direction: ['all', 'frontend', 'backend'], type: 'Language', class: 'html', projects: 72 },
  { name: 'CSS', direction: ['all', 'frontend'], type: 'Style', class: 'css', projects: 21 },
  { name: 'SCSS', direction: ['all', 'frontend'], type: 'Style', class: 'scss', projects: 43 },
  { name: 'React', icon: FaReact, direction: ['all', 'frontend'], type: 'UI Lib', class: 'react', projects: 24 },
  { name: 'Next', icon: SiNextdotjs, direction: ['all', 'frontend'], type: 'Framework', class: 'next', projects: 7 },
  { name: 'Bootstrap', icon: FaBootstrap, direction: ['all', 'frontend'], type: 'UI Lib', class: 'bootstrap', projects: 3 },
  { name: 'Framer Motion', icon: FiFramer, direction: ['all', 'frontend'], type: 'UI Lib', class: 'framer', projects: 5 },
  { name: 'Redux', icon: SiRedux, direction: ['all', 'frontend'], type: 'Library', class: 'redux', projects: 24 },
  { name: 'React Native', icon: TbBrandReactNative, direction: ['all', 'frontend'], type: 'Framework', class: 'native', projects: 3 },

  { name: 'Node', icon: FaNodeJs, direction: ['all', 'backend'], type: 'API', class: 'node', projects: 14 },
  { name: 'Express', icon: SiExpress, direction: ['all', 'backend'], type: 'Library', class: 'express', projects: 4 },
  { name: 'NestJS', icon: SiNestjs, direction: ['all', 'backend'], type: 'Framework', class: 'nest', projects: 8 },
  { name: 'GraphQL', icon: SiGraphql, direction: ['all', 'backend'], type: 'Language', class: 'graphql', projects: 2 },
  { name: 'Apollo', icon: SiApollographql, direction: ['all', 'backend'], type: 'Lib', class: 'apollo', projects: 1 },
  { name: 'PostgreSQL', icon: SiPostgresql, direction: ['all', 'backend'], type: 'DB', class: 'postgres', projects: 4 },
  { name: 'Mongo', icon: SiMongodb, direction: ['all', 'backend'], type: 'DB', class: 'mongo', projects: 7 },

  { name: 'Docker', icon: SiDocker, direction: ['all', 'tools'], type: 'Tool', class: 'docker', projects: 8 },
  { name: 'WebPack', icon: SiWebpack, direction: ['all', 'tools'], type: 'Tool', class: 'webpack', projects: 43 },
  { name: 'VITE', icon: SiVite, direction: ['all', 'tools'], type: 'Tool', class: 'vite', projects: 24 },
  { name: 'Figma', icon: SiFigma, direction: ['all', 'tools'], type: 'Tool', class: 'figma', projects: 12 },
  { name: 'NPM', icon: FaNpm, direction: ['all', 'tools'], type: 'Tool', class: 'npm', projects: 22 },
  { name: 'YARN', icon: FaYarn, direction: ['all', 'tools'], type: 'Tool', class: 'yarn', projects: 48 },
]