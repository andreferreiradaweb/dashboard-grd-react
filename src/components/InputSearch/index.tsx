import { IconWrapper, Input, Wrapper } from './styled'
import { BiSearch } from 'react-icons/bi'
import { colors } from '../../theme'

interface Props {
  placeholder?: string
  style?: React.CSSProperties
  value?: string
  onChange?: any
  name?: string
  disabled?: boolean
}

export function InputSearch({
  placeholder,
  onChange,
  style,
  disabled,
  name,
  value,
}: Props) {
  return (
    <>
      <Wrapper style={style}>
        <Input
          disabled={disabled}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        <IconWrapper>
          <BiSearch size="22" fill={colors.primary} />
        </IconWrapper>
      </Wrapper>
    </>
  )
}
