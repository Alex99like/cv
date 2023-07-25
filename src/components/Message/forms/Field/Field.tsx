import React, { forwardRef, useState } from 'react'
import { IField } from '../props.type'
import styles from './Field.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const Field = forwardRef<HTMLInputElement, IField>(({
  placeholder, Icon, style, error, getValue, type, delay, ...rest
}, ref) => {
  const [onFocus, setOnFocus] = useState<boolean>(false)

  const handlerFocus = () => {
    if (getValue) {
      if (getValue.get(getValue.name).trim().length === 0) setOnFocus(false);
      else setOnFocus(true);
    }
  };

  return (
    <motion.div className={styles.container} style={style}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: delay }}
    >
      <label className={styles.label} 
        onChange={handlerFocus} 
        onBlur={handlerFocus} 
        onFocus={() => setOnFocus(true)}
      >
        <span className={cn({
          [styles.active]: onFocus
        })}>
          {placeholder}
        </span>
        <Icon className={styles.icon} />
        <input 
          className={styles.input}   
          autoComplete={'off'}
          ref={ref} 
          type={type} 
          {...rest} 
        />
      </label>
      {error && (
        <motion.div className={styles.error}
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error.message}
        </motion.div>
      )}
    </motion.div> 
  )
})
