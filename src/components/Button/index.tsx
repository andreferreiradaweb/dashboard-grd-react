import { MyButton } from './styled'

type ButtonTypeProp = 'button' | 'submit' | 'reset' | undefined
interface IProps {
  title?: string
  disabled?: boolean
  onClick?: () => void
  outlined?: boolean
  customSize?: string
  customColor?: string
  styles?: React.CSSProperties
  small?: boolean
  type?: ButtonTypeProp
}

export function Button({
  title,
  disabled,
  onClick,
  outlined,
  small,
  customSize,
  customColor,
  styles,
  type,
}: IProps) {
  return (
    <>
      {disabled ? (
        <MyButton disabled>{title}</MyButton>
      ) : (
        <MyButton
          small={small}
          style={styles}
          customColor={customColor}
          customSize={customSize}
          outlined={outlined}
          onClick={onClick}
          type={type}
        >
          {title}
        </MyButton>
      )}
    </>
  )
}
