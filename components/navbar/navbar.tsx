'use client'
import { useTheme } from 'next-themes'

export const Navbar = () => {
  const { setTheme } = useTheme()

  return (
    <nav>
      <button onClick={() => setTheme('light')}>Click</button>
      <button onClick={() => setTheme('dark')}>Click 2</button>
    </nav>
  )
}
