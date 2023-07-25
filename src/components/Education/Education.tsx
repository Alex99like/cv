import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FcEngineering, FcGraduationCap } from 'react-icons/fc'
import styles from './Education.module.scss'
import { VerticalEducation } from './Elements/VerticalEducation'
import { Experiences } from './Elements/Experiences'
import { SwitchButtons } from './Elements/Buttons/SwitchButtons'
import { Modal } from '../../shared/Modal/Modal'
import { AppContextProvider } from '../../providers/EducationProvider'


export const Education = () => {
  const [mobile, setMobile] = useState(true)
  const [switchBtn, setSwitchBtn] = useState<'education' | 'experience'>('education')
  const [activeModal, setActiveModal] = useState(false)

  const actionModal = (action: 'open' | 'close') => {
    setActiveModal(action === 'open' ? true : false)
  }

  const handlerSwitch = (value: 'education' | 'experience') => {
    setSwitchBtn(value)
  }
  
  useEffect(() => {
    if (window.innerWidth < 800) {
      setMobile(false)
    }

    const handleResize = () => {
      if (window.innerWidth < 800) {
        setMobile(false)
      } else {
        setMobile(true)
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <AppContextProvider>
    <AnimatePresence>
      {activeModal && <Modal closeModal={actionModal} />}
    </AnimatePresence>
    
    <motion.section className={styles.container}>
      <div className={styles.title}>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        >Education <FcGraduationCap className={styles.icon} /></motion.h2>
        <motion.span className={styles.and}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        >AND</motion.span>
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
        >Experiences <FcEngineering className={styles.icon} /></motion.h2>
      </div>
      <div className={styles.wrapper}>
        {mobile ? (
          <>
            <VerticalEducation callModal={actionModal} />
            <Experiences callModal={actionModal} />
          </>
        ) : (
          <>
            {switchBtn === 'education' && <VerticalEducation callModal={actionModal} />}
            {switchBtn === 'experience' && <Experiences callModal={actionModal} />}
            <SwitchButtons handler={handlerSwitch} switchBtn={switchBtn} />
          </>
        )}
      </div>
    </motion.section>
    </AppContextProvider>
    
  )
}
