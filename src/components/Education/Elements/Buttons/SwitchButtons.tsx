import React, { FC } from 'react'
import { FcEngineering, FcGraduationCap } from 'react-icons/fc'
import styles from './SwitchButtons.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'

interface switchBtnProp {
  switchBtn: 'education' | 'experience';
  handler: (value: 'education' | 'experience') => void;
}

export const SwitchButtons: FC<switchBtnProp> = ({ switchBtn, handler }) => {
  return (
    <div className={styles.container}>
      <motion.button 
        onClick={() => handler('education')}
        className={cn(styles.button, {
          [styles.active]: switchBtn === 'education'
        })}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >Education <FcGraduationCap className={styles.icon} /></motion.button>
      <motion.button
        onClick={() => handler('experience')} 
        className={cn(styles.button, {
          [styles.active]: switchBtn === 'experience'
        })}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >Experiences <FcEngineering className={styles.icon} /></motion.button>
    </div>
  )
}
