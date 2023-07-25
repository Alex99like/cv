import React, { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './ExperiencesItem.module.scss'
import cn from 'classnames'
import { IExperiences } from '../../../../data/experiences'
import { useSelectorAppContextProvider } from '../../../../providers/EducationProvider'

interface ExperiencesItemProps {
  callModal: (val: 'open' | 'close') => void;
  direction: string
  item: IExperiences
  delay: number
}

export const ExperiencesItem: FC<ExperiencesItemProps> = ({ callModal, direction, item, delay }) => {
  const { setContent } = useSelectorAppContextProvider()

  const openModel = () => {
    setContent && setContent(item)
    callModal('open')
  }
  
  return (
    <motion.div className={cn(styles.container, styles[direction], styles[item.class])}
      initial={{ x: direction === 'left' ? 50 : -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: delay + 2.5, type: 'spring' }}
      onClick={openModel}
    >
      <span className={styles.date}>{item.jobTitle} DEV</span>
      <motion.h3 className={styles.title}
        initial={false}
        animate={{ rotate: direction === 'left' ? '-10deg' : '10deg' }}
      >
        {item.company}
      </motion.h3>
    </motion.div>
  )
}
