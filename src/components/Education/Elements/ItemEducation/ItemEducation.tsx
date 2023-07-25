import React, { FC } from 'react'
import styles from './ItemEducation.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { useSelectorAppContextProvider } from '../../../../providers/EducationProvider';
import { IEducation } from '../../../../data/education';

interface ItemEducationProps {
    callModal: (val: 'open' | 'close') => void;
    delay: number
    item: IEducation
    direction: string
}

export const ItemEducation: FC<ItemEducationProps> = ({ delay, item, direction, callModal }) => {
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
      <span className={styles.date}>{item.time} MONTH</span>
      <motion.h3 className={styles.title}
        initial={false}
        animate={{ rotate: direction === 'left' ? '-10deg' : '10deg' }}
      >
        {item.name.split(':').length === 1 ? item.name : <>{item.name.split(':')[0]}<span className={styles['name-course']}>{item.name.split(':')[1]}</span></>}
      </motion.h3>
    </motion.div>
  )
}
