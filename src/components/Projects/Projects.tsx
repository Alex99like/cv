import React, { useRef } from 'react'
import styles from './Projects.module.scss'

import { useScroll, useSpring, motion } from 'framer-motion'
import { projectData } from './data'
import { Project } from './Elements/Project'

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className={styles.container}>
      <motion.div className={styles.progress} style={{ scaleX }} />
      {Object.values(projectData).map((item, idx) => (
        <Project item={item} key={idx} idx={idx} />
      ))}
      <div className={styles.warning}>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >Other Projects Will Be Added Soon)))</motion.h3>
      </div>
    </div>
  )
}
