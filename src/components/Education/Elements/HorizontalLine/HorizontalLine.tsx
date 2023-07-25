import { motion } from 'framer-motion'
import styles from './HorizontalLine.module.scss'
import React, { FC, PropsWithChildren } from 'react'

interface LineProps {
  top: string;
  width: string;
  delay: number
  direction: string
  relative?: { width: number, distance: number }
}

export const HorizontalLine: FC<PropsWithChildren<LineProps>> = ({ top, width, delay, direction, children, relative }) => {
  return (
    <div 
      className={styles[`${direction}-line`]} 
      style={{ top: top, width: `${relative?.width}px`, [direction]: `${relative?.distance}px` }}
    >
        <motion.span className={styles.start} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay, type: 'spring' }}
        />
        <motion.span style={{ width: width }} className={styles.line}
          initial={{ width: 0 }}
          animate={{ width: width }}
          transition={{ duration: 2, delay: delay + 0.8 }}
        />
        <motion.span className={styles.end} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay, type: 'spring' }}
        />
        {children}
      </div>
  )
}
