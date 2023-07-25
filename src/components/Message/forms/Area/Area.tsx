import React, { forwardRef } from 'react'
import { IArea } from '../props.type'
import styles from './Area.module.scss'
import { motion } from 'framer-motion'

export const Area = forwardRef<HTMLTextAreaElement, IArea>(({
  placeholder, style, error, getValue, delay, ...rest
}, ref) => {
  return (
    <motion.div className={styles.container}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: delay }}
    >
      <h3 className={styles.title}>Additional Information</h3>
      <textarea 
        ref={ref}
        className={styles.textarea}
        {...rest} 
      />
      {error?.message && <motion.div className={styles.error}
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >{error.message}</motion.div>}
    </motion.div>
  )
})