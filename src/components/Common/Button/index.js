import styled from 'styled-components'

export const Button = styled.button`
  height: 40px;
  padding: 12px 25px;
  color: white;
  background-color: #29AFFF;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
