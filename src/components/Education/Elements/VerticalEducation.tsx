import { useState, useEffect, FC } from 'react'
import { calcDate, dateNow } from '../../../utils/calcData'
import { motion } from 'framer-motion'
import styles from './VerticalEducation.module.scss'
import { HorizontalLine } from './HorizontalLine/HorizontalLine'
import { ItemEducation } from './ItemEducation/ItemEducation'
import { education } from '../../../data/education'

interface VerticalProp {
  callModal: (val: 'open' | 'close') => void;
}

const startDate = '03-22-2021'

const setting = {
  one: { delay: 1.8, width: 76, top: 17, direction: 'left', education: 'JavaRush', relative: { width: 130, distance: 73 } },
  two: { delay: 2.1, width: 55, top: 32, direction: 'right', education: 'rssS1',relative: { width: 100, distance: 102 } },
  three: { delay: 2.8, width: 76, top: 48, direction: 'left', education: 'rssS2',relative: { width: 130, distance: 73 } },
  four: { delay: 3.5, width: 65, top: 64, direction: 'right', education: 'rssReact',relative: { width: 120, distance: 80 } },
  five: { delay: 4.1, width: 65, top: 79, direction: 'left', education: 'rssNode',relative: { width: 120, distance: 82 } },
}

export const VerticalEducation: FC<VerticalProp> = ({ callModal }) => {
  const [date, setDate] = useState(calcDate(startDate))
 
  useEffect(() => {
    
    if (date && calcDate(date)) {
      setTimeout(() => {
        setDate(calcDate(date))
      }, 40)
    }
  }, [date])

  return (
    <div className={styles.container}>
      {Object.values(setting).map(({ delay, direction, relative, top, width, education: educationItem }) => (
        <HorizontalLine relative={relative} top={`${top}%`} width={`${width}%`} delay={delay} direction={direction} key={educationItem}>
          <ItemEducation delay={delay} item={education[educationItem]} direction={direction} callModal={callModal} />
        </HorizontalLine>
      ))}

      <div className={styles.mainLine}>
        <motion.span className={styles.start}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.1, stiffness: 300 }}
        >{startDate.replaceAll('-', '.')}</motion.span>
        <motion.span className={styles.line}
          initial={{ height: 0 }}
          animate={{ height: '90%' }}
          transition={{ duration: 5 }}
        >
        </motion.span>
        <motion.span className={styles.end}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.1, stiffness: 300 }}
        >{date ? date.replaceAll('-', '.') : dateNow().replaceAll('-', '.')}</motion.span>
      </div>
    </div>
  )
}