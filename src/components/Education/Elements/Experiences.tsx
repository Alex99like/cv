import { motion } from 'framer-motion'
import React, { FC, useEffect, useState } from 'react'
import { experiences } from '../../../data/experiences'
import { calcDate, dateNow } from '../../../utils/calcData'
import styles from './Experiences.module.scss'
import { ExperiencesItem } from './ExperiencesItem/ExperiencesItem'
import { HorizontalLine } from './HorizontalLine/HorizontalLine'

interface ExperiencesProp {
  callModal: (val: 'open' | 'close') => void;
}

const setting = {
  one: { delay: 1.8, width: 100, top: 13, direction: 'left', experience: 'nursoft', relative: { width: 120, distance: 83 } },
  two: { delay: 2.1, width: 76, top: 26, direction: 'right', experience: 'freelanceOne',relative: { width: 120, distance: 81 } },
  three: { delay: 2.5, width: 76, top: 40, direction: 'left', experience: 'freshBerry',relative: { width: 100, distance: 102 } },
  four: { delay: 2.8, width: 76, top: 53, direction: 'right', experience: 'rss',relative: { width: 100, distance: 101 } },
  five: { delay: 3.5, width: 76, top: 66, direction: 'left', experience: 'freelanceTwo',relative: { width: 130, distance: 73 } },
  six: { delay: 3.9, width: 76, top: 79, direction: 'right', experience: 'realtor',relative: { width: 125, distance: 75 } },
}

const startDate = '02-25-2022'

export const Experiences: FC<ExperiencesProp> = ({ callModal }) => {
  const [date, setDate] = useState(calcDate(startDate))
 
  useEffect(() => {
    if (date && calcDate(date)) {
    setTimeout(() => {
      setDate(calcDate(date))
    }, 100)
  }
  }, [date])

  return (
    <div className={styles.container}>
      {Object.values(setting).map(({ relative, top, width, delay, direction, experience: experienceItem }) => (
        <HorizontalLine relative={relative} top={`${top}%`} width={`${width}%`} delay={delay} direction={direction} key={experienceItem}>
          <ExperiencesItem callModal={callModal} delay={delay} direction={direction} item={experiences[experienceItem]} />
        </HorizontalLine>
      ))}

      <div className={styles.mainLine}>
        <span className={styles.start}>{startDate.replaceAll('-', '.')}</span>
        <motion.span className={styles.line}
          initial={{ height: 0 }}
          animate={{ height: '90%' }}
          transition={{ duration: 5 }}
        >
        </motion.span>
        <span className={styles.end}>{date ? date.replaceAll('-', '.') : dateNow().replaceAll('-', '.')}</span>
      </div>
    </div>
  )
}
