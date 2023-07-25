import React, { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './Modal.module.scss'
import { useSelectorAppContextProvider } from '../../providers/EducationProvider'
import cn from 'classnames'
import { IEducation } from '../../data/education'
import { IExperiences } from '../../data/experiences'

interface ModalProp {
  closeModal: (value: 'close' | 'open') => void
}

const isEducation = (item: IEducation | IExperiences): item is IEducation => {
  if ('company' in item) {
    return false
  } else {
    return true
  }
}

export const Modal: FC<ModalProp> = ({ closeModal }) => {
  const { item } = useSelectorAppContextProvider()

  return (
    <motion.div className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => closeModal('close')}
      exit={{ opacity: 0 }}
    >
      <motion.div className={styles.modal}
        initial={{ scale: 0, y: 300 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: -200 }}
        transition={{  type: 'spring', stiffness: 100 }}
        onClick={(e) => {e.stopPropagation()}}
      >
        {item && isEducation(item) ? (
          <>
            <h3 className={cn(styles.title, styles[item.class])}>{item.modal.title}</h3>
            <div className={styles.image}>
              <img src={item.modal.image} alt={''} />
              <div className={styles.performance}>
                <h4>My Academic Performance</h4>
                <h3>{item.modal.performance}</h3>
              </div>
            </div>
            <p className={styles.description}>
              {item.modal.description}
            </p>
            <div className={styles.tags}>
              {item.modal.skills.map((tag) => (
                <span key={tag} className={cn(styles.tag, styles[tag.toLowerCase().replaceAll(' ', '-')])}>{tag}</span>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className={styles['exp-container']}>
              <h2 className={cn(styles['exp-title'], styles[item!.class])}>
                {item?.company}
              </h2>
              <div className={styles.data}>
                <div className={styles.wrap}>
                <h3 className={styles.position}>POSITION: </h3><span className={styles.span}>{item?.jobTitle}</span>
                </div>
                <div className={styles.wrap}>
                  <h3 className={styles.working}>Working Hours: </h3><span className={styles.span}>{item?.modal.jobTime}</span>
                </div>
              </div>
              <p className={styles['exp-description']}>
                {item?.modal.description}
              </p>
              <div className={styles['exp-tags']}>
                {item?.modal.tags.map((tag) => (
                  <span key={tag} className={cn(styles.tag, styles[tag.toLowerCase().replaceAll(' ', '-')])}>{tag}</span>
                ))}
              </div>
            </div>
          </>
        )}
      <button onClick={() => closeModal('close')} className={styles.close}>CLOSE</button>

      </motion.div>
    </motion.div>
  )
}
