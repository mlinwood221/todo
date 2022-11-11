import { useProvider } from "../../hooks/useProvider"
import { Button, Form, FormGroup, FormInput, FormLabel, Heading, Text } from '../../components'
import { loginApi } from '../../api'
import { MdPerson, MdLock } from 'react-icons/md'
import { useState, useCallback } from 'react'
import { LoginWrapper } from './styled'

export const Login = () => {
  const { setUser } = useProvider()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validation, setValidation] = useState({
    email: '',
    password: ''
  })
  const [respError, setRespError] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const validateEmail = (str) => {
    return str.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleEmailChange = useCallback(
    (e) => {
      var value = e.target.value;

      if (!value) {
        setValidation({ ...validation, email: 'The field is required.' })
      } else if (!validateEmail(value)) {
        setValidation({ ...validation, email: 'The field must be a valid email address.' })
      } else if (value.length > 50) {
        setValidation({ ...validation, email: 'The field must not exceed 50 characters.' })
      } else {
        setValidation({ ...validation, email: '' })
      }

      setRespError(null)
      setEmail(e.target.value)
    }, 
    [validation]
  )

  const handlePasswordChange = useCallback(
    (e) => {
      var value = e.target.value;

      if (value.length < 4 || value.length > 16) {
        setValidation({ ...validation, password: 'The field must be between 4 - 16 characters.' })
      } else {
        setValidation({ ...validation, password: '' })
      }

      setRespError(null)
      setPassword(e.target.value)
    },
    [validation]
  )

  const canSubmit = () => {
    return email && password && !validation.email && !validation.password && !isFetching
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    setIsFetching(true)
    try {
      var response = await loginApi(email, password)
      var data = await response.json()
      if (response.status === 200) {
        setUser(data)
      } else {
        setRespError(data.message)
      }
    } catch (err) {
      setRespError("The server could not be reached. Please try again later.")
    }
    setIsFetching(false)
  }

  return (
    <LoginWrapper>
      <Heading className="heading">Rapptr Labs</Heading>
      <Form 
        className="login-form" 
        onSubmit={handleLogin}
      >
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput 
            leftIcon={<MdPerson size="20px" />}
            placeholder="user@rapptrlabs.com"
            value={email}
            onChange={handleEmailChange}
            isError={validation.email ? true : false}
            errorMsg={validation.email}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            leftIcon={<MdLock size="20px" />}
            placeholder="Must be at least 4 characters"
            value={password}
            onChange={handlePasswordChange}
            isError={validation.password ? true : false}
            errorMsg={validation.password}
          />
        </FormGroup>
        <Button disabled={!canSubmit()}>Login</Button>
        {respError && <Text className="form-error">{respError}</Text>}
      </Form>
    </LoginWrapper>
  )
}
