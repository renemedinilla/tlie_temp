import { FC, ButtonHTMLAttributes } from 'react'
import { DefaultButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <DefaultButton variant={variant ?? 'primary'} {...rest}>{children}</DefaultButton>
  )
}

export default Button