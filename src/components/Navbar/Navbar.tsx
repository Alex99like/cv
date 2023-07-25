/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Navbar.module.scss'
import { FcHome, FcEngineering, FcGraduationCap, FcAbout, FcEditImage } from 'react-icons/fc'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { link: '/', icon: FcHome },
  { link: '/skills', icon: FcEngineering },
  { link: '/education', icon: FcGraduationCap },
  { link: '/projects', icon: FcEditImage },
  { link: '/message', icon: FcAbout },
]

export const Navbar = () => {

  const location = useLocation()

  return (
    <motion.div className={styles.navigation}
      initial={{ scale: 0.2, opacity: 0, y: 100 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 400 }}
    >
      <ul className={styles.container}>
        {links.map(link => (
          <li key={link.link} className={cn(styles.item, {
            [styles.active]: link.link === location.pathname
          })}>
            <Link to={link.link}>
              {<link.icon className={styles.icon} />}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
