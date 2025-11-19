import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'
import styles from './Button.module.css'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const Button = ({ variant = 'primary', size = 'md', children, ...props }: ButtonProps) => {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
