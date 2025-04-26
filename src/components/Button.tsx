import { ButtonContainer } from './Button.styles'
import { ButtonVariant } from './Button.styles'

interface ButtonProps {
    variant?: ButtonVariant
}

export const Button = ({variant = 'primary'} :ButtonProps) => {
  return (
    <ButtonContainer variant={variant}>Oi</ButtonContainer>
  )
}