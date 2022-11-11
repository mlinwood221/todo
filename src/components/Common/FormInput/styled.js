import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  input {
    box-sizing: border-box;
    padding-left: ${props => (props.hasIcon ? '40px' : '10px')};
    height: 40px;
    border-radius: 4px;
    border: 1px solid #C0CCDA;
    width: 100%;
    :active, :focus {
      border-color: #29AFFF;
    }
    :focus-visible {
      outline: none;
    }
    ${props => props.isError && css`
      border-color: red !important;
    `}
  }
  .icon {
    position: absolute;
    top: 10px;
    left: 12px;
  }
  .invalid-feedback {
    font-size: 12px;
    line-height: 16px;
    color: red;
  }
`
