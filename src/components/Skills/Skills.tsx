import React, { useState } from 'react'
import { FcEngineering } from 'react-icons/fc'
import styles from './Skills.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { skillsData } from '../../data/skills'

const tags = [
  { name: 'ALL', tag: 'all' },
  { name: 'FRONT-END', tag: 'frontend' },
  { name: 'BACK-END', tag: 'backend' },
  { name: 'TOOLS', tag: 'tools' }
]

const Skills = () => {

  const [activeTag, setActiveTag] = useState<string>('all')
  const [skills, setSkills] = useState(skillsData)

  //const [activeDivider, setActiveDivider] = useState(true)

  const handler = (tag: string) => {
    setSkills(skillsData.filter(el => el.direction.includes(tag)))
    setActiveTag(tag)
    //setActiveDivider(false)
  }

  return (
    <motion.section className={styles.container}>
      {/* <div className={cn(styles.divider, {
        [styles.up]: activeDivider,
        [styles.down]: !activeDivider
      })}></div> */}
      <motion.div className={styles.title}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className={styles['title-one']}>This is my, </h2>
        <h2 className={styles['title-two']}>Skills <FcEngineering className={styles.icon} /></h2>
      </motion.div>
      <motion.div className={styles.tags}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        {tags.map(tag => (
          <div key={tag.tag} className={cn(styles.tag, {
            [styles.active]: tag.tag === activeTag
          })}
            onClick={() => handler(tag.tag)}
          >
            {tag.name}
          </div>
        ))}
      </motion.div>
        <div className={styles.skills}>
          {skills.map((el, idx) => (
            <motion.div className={cn(styles.item, styles[el.class])}
              key={el.name}
              layout
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: idx % 2 === 0 ? 0 : 20}}
              transition={{ delay: idx / 10, type: 'spring', stiffness: 300 }}
             //exit={{ opacity: 0 }}
            >
              <span className={styles.project}><span className={styles.count}>{el.projects}</span> projects</span>
              <div className={styles.wrapper}>
                <span className={cn(styles.type, {
                  [styles.style]: el.type === 'Style',
                  [styles.framework]: el.type === 'Framework',
                  [styles.lang]: el.type === 'Language',
                  [styles.lib]: el.type === 'UI Lib',
                  [styles.tool]: el.type === 'Tool',
                  [styles.api]: el.type === 'API',
                  [styles.db]: el.type === 'DB',
                })}>{el.type}</span>
                {el.icon && <el.icon className={styles.icon} />}
                <span>{el.name}</span>
              </div>
            </motion.div>
          ))}
        </div>  
      
    </motion.section>
  )
}

export default Skills