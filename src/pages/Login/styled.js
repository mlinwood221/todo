import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  margin-top: 100px;
  .heading {
    margin-bottom: 20px;
  }
  .login-form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  .form-error {
    font-size: 12px;
    line-height: 16px;
    color: red;
    text-align: center;
  }
`