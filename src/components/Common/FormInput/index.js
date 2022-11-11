import { Text } from '../Text'
import { InputWrapper } from "./styled"

export const FormInput = ({ leftIcon, isError = false, errorMsg = '', className, ...rest }) => {
  return (
    <InputWrapper 
      className={className}
      hasIcon={leftIcon ? true : false }
      isError={isError}
    >
      {leftIcon && <div className="icon">{leftIcon}</div>}
      <input {...rest} />
      {isError && <Text className="invalid-feedback">{errorMsg}</Text>}
    </InputWrapper>
  )
}
