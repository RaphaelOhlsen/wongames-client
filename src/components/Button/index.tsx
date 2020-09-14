import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element //Pode usar com React.ReactNode também
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
