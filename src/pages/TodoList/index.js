import { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { useProvider } from "../../hooks/useProvider"
import { Button, Card, FormInput, Heading, TodoItem } from '../../components'
import { ActionBarWrapper, ListWrapper, PageWrapper } from './styled'

export const ActionBar = ({ search, setSearch, onNew }) => {
  return (
    <ActionBarWrapper>
      <FormInput
        className="input"
        leftIcon={<MdSearch size="20px" />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <Button 
        className="button"
        onClick={onNew}
      >
        New
      </Button>
    </ActionBarWrapper>
  )
}

export const List = ({ search, todoList, onChange, onRemove }) => {
  return (
    <ListWrapper>
      {todoList.map(item => {
        if (item.text.toLowerCase().indexOf(search.toLowerCase()) < 0)
          return null;

        return (
          <TodoItem 
            className="item"
            key={item.id}
            data={item}
            onChange={onChange}
            onRemove={onRemove}
          />
        )
      })}
    </ListWrapper>
  )
}

export const TodoList = () => {
  const { todoList, setTodoList, setUser } = useProvider()
  const [search, setSearch] = useState('')
  const [curIndex, setCurIndex] = useState(0)

  useEffect(() => {
    var max = 0;
    todoList.map(item => {
      if (item.id > max)
        max = item.id
      return null
    })
    setCurIndex(max + 1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogout = () => {
    setUser(null)
  }
  
  const handleNew = () => {
    setTodoList([
      ...todoList, 
      { id: curIndex, isEditing: true, text: '' }
    ])
    setCurIndex(curIndex + 1)
  }

  const handleChange = (data) => {
    var newTodoList = [...todoList]
    var idx = newTodoList.findIndex(item => item.id === data.id)
    newTodoList[idx] = {...data}
    setTodoList(newTodoList)
  }
  
  const handleRemove = (data) => {
    setTodoList(todoList.filter(item => item.id !== data.id))
  }

  return (
    <PageWrapper>
      <Button 
        className="btn-logout"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <Heading className="heading">My To-Do List</Heading>
      <Card className="card">
        <ActionBar 
          search={search}
          setSearch={setSearch}
          onNew={handleNew}
        />
        <List 
          search={search}
          todoList={todoList}
          onChange={handleChange}
          onRemove={handleRemove}
        />
      </Card>
    </PageWrapper>
  )
}
