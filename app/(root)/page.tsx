import { Navbar } from '@/components/navbar/navbar'
import styles from './root.module.scss'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Navbar />
    </main>
  )
}
