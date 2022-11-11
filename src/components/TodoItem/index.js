import { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { Button, IconButton, FormInput, Text } from '../../components'
import { Wrapper } from './styled'

export const TodoItem = ({ data, onChange, onRemove, ...rest }) => {
  const { id, isEditing, text } = data
  const [newText, setNewText] = useState(text)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    var val = e.target.value;
    if (val.length > 0 && val.length <= 25) {
      setErrorMsg('')
    } else {
      setErrorMsg('The fields must be between 1 - 25 characters.')
    }
    setNewText(e.target.value)
  }

  const handleSave = () => {
    onChange({ 
      id, 
      isEditing: false, 
      text: newText 
    })
  }

  const handleEdit = () => {
    onChange({
      ...data,
      isEditing: true
    })
  }

  const handleDelete = () => {
    onRemove({ ...data })
  }

  return (
    <Wrapper {...rest}>
      {isEditing ? (
        <FormInput 
          className="input"
          isError={errorMsg ? true : false}
          errorMsg={errorMsg}
          value={newText} 
          onChange={handleChange}
        />
      ) : (
        <Text className="text">{text}</Text>
      )}
      {isEditing ? (
        <Button 
          disabled={!newText || errorMsg} 
          onClick={handleSave}
        >
          Save
        </Button>
      ) : (
        <>
          <IconButton onClick={handleEdit}>
            <MdEdit size="20px" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <MdDelete size="20px" />
          </IconButton>
        </>
      )}
    </Wrapper>
  )
}
