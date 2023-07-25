import React, { useState } from 'react'
import { FaFacebookSquare, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FcFaq } from 'react-icons/fc'
import { SiGmail } from 'react-icons/si'
import { AiTwotonePhone } from 'react-icons/ai'
import styles from './Message.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Field } from './forms/Field/Field'
import { motion } from 'framer-motion'
import Lottie from "lottie-react";

import { BsMessenger } from 'react-icons/bs'
import { RiAccountPinBoxFill } from 'react-icons/ri'
import { BsBuilding } from 'react-icons/bs'
import { Area } from './forms/Area/Area'

import Success from '../../assets/animation/success.json'
import Loader from '../../assets/animation/loader.json'

import axios from 'axios'

export interface IMessageForm {
  name: string
  nameCompany: string
  contact: string
  phone: string
  description: string
}

export const Message = () => {
  // const options = {
  //   animationData: Success,
  //   loop: true
  // };

  // const { View } = useLottie(options)

  const [loader, setLoader] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false)

  const { 
    formState: { errors }, 
    register,
    getValues,
    handleSubmit,
    reset
  } = useForm<IMessageForm>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IMessageForm> = async (data) => {
    try {
      setLoader(true)
      await axios.post('https://server-cv.onrender.com', data)
      setLoader(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 1500)
    } catch(e) {
      setLoader(false)
      console.log(e)
    }
  };

  const onReset = () => {
    reset()
  }

  return (
    <div className={styles.container}>
      <motion.div className={styles.title}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h3 className={styles.this}>This is my, </h3>
        <h3 className={styles.cont}>CONTACTS <FcFaq className={styles.icon} /></h3>
      </motion.div>
      <div className={styles.wrap}>
        <div className={styles['wrap-links']}>
          <motion.div className={styles.info}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className={styles.title}>You can contact me </h3>
            <h3 className={styles.now}>RIGHT NOW!</h3>
          </motion.div>
          <ul className={styles.links}>
          
          <motion.li className={styles.link}
            initial={{ x: -500 }}
            animate={{ x: 0, rotate: '15deg' }}
            transition={{ delay: 0.3 }}
          >
            <a target={'_blank'} rel="noreferrer" href='https://msngr.link/tg/@Aleksander_like'><FaTelegram className={styles.icon} />
              <span>Telegram</span>
            </a>
          </motion.li>
          <motion.li className={styles.link}
            initial={{ x: -500 }}
            animate={{ x: 0, rotate: '15deg' }}
            transition={{ delay: 0.4 }}
          >
            <a target={'_blank'} rel="noreferrer" href='https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D0%B5%D0%B2%D0%B8%D1%87-485120208/'><FaLinkedin className={styles.icon} />
              <span>Linkedin</span>
            </a>
          </motion.li>
          <motion.li className={styles.link}
            initial={{ x: -500 }}
            animate={{ x: 0, rotate: '15deg' }}
            transition={{ delay: 0.5 }}
          >
            <a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/profile.php?id=100041718375661'><FaFacebookSquare className={styles.icon} />
              <span>FaceBook</span>
            </a>
          </motion.li>
          <motion.li className={styles.link}
            initial={{ x: -500 }}
            animate={{ x: 0, rotate: '15deg' }}
            transition={{ delay: 0.6 }}
          >
            <a target={'_blank'} rel="noreferrer" href='mailto:aleksievisa@gmail.com'><SiGmail className={styles.icon} />
             <span>GMAIL</span>
            </a>
          </motion.li>
          <motion.li className={styles.link}
            initial={{ x: -500 }}
            animate={{ x: 0, rotate: '15deg' }}
            transition={{ delay: 0.7 }}
          >
            <a href='tel:+375333527815'><AiTwotonePhone className={styles.icon} />
              <span>Phone</span>
            </a>
          </motion.li>
          </ul>
        </div>
       
        <div className={styles['form-container']}>
          <div className={styles.info}>
            <motion.h1 className={styles.title}
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >Send Message</motion.h1>
            <motion.p className={styles.message}
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >Send me a message and I will contact you myself)</motion.p>
          </div>

          <motion.form onSubmit={handleSubmit(onSubmit)} className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {loader && (
              <div className={styles.loader}>
                <Lottie animationData={Loader} className={styles.success} />
              </div>
            )}

            {success && (
              <div className={styles.loader}>
                <Lottie loop={false} animationData={Success} className={styles.success} />
              </div>
            )}
            <div className={styles['one-line']}>
              <Field 
                {...register('name', {
                  minLength: { value: 3, message: 'Minimum 3 characters' },
                  maxLength: { value: 20, message: 'Maximum 20 characters' }
                })}
                Icon={RiAccountPinBoxFill}
                placeholder="Your Name"
                error={errors.name}
                delay={0.4}
                getValue={{ get: getValues, name: 'name' }}
              />
              <Field 
                {...register('phone', {
                  pattern: {
                    value: /^\+375\s?(25|29|33|44)\s?\d{7}$/,
                    message: 'Format +375(xx)xxxxxxx',
                  },
                })}
                Icon={AiTwotonePhone}
                placeholder="Your Number Phone"
                error={errors.phone}
                delay={0.5}
                getValue={{ get: getValues, name: 'phone' }}
              />
            </div>

            <Field 
                {...register('contact', {
                  minLength: { value: 3, message: 'Minimum 3 characters' },
                  maxLength: { value: 200, message: 'Maximum 200 characters' }
                })}
                Icon={BsMessenger}
                placeholder="Your Account Messenger"
                error={errors.contact}
                delay={0.6}
                getValue={{ get: getValues, name: 'contact' }}
              />

              <Field 
                {...register('nameCompany', {
                  pattern: {
                    value: /^[a-zA-Zа-яА-ЯёЁ']{3,50}$/,
                    message: 'No valid name company',
                  },
                })}
                Icon={BsBuilding}
                placeholder="Your Company Name"
                error={errors.nameCompany}
                delay={0.7}
                getValue={{ get: getValues, name: 'nameCompany' }}
              />
              <Area 
                {...register('description', {
                  minLength: { value: 3, message: 'Minimum 3 characters' },
                  maxLength: { value: 300, message: 'Maximum 300 characters' }
                })}
                placeholder="Your Number Phone"
                error={errors.description}
                delay={0.8}
                getValue={{ get: getValues, name: 'description' }}
              />
              <div className={styles.buttons}>
                <motion.button className={styles.reset}
                  initial={{ opacity: 0, x: '100vw' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  type={'reset'}
                  onClick={onReset}
                >RESET</motion.button>
                <motion.button className={styles.send}
                  initial={{ opacity: 0, x: '-100vw' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  type={'submit'}
                >SEND</motion.button>
              </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
