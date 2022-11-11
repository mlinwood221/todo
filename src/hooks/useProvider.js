import { createContext, useContext } from 'react'
import { useStorage } from './useStorage'

export const ExtensionContext = createContext({
  user: null,
  todoList: []
})

export const AppProvider = ({ children }) => {
  const [user, setUser] = useStorage(localStorage, 'user', null)
  const [todoList, setTodoList] = useStorage(localStorage, 'todoList', [])

  const value = { user, setUser, todoList, setTodoList }

  return (
    <ExtensionContext.Provider value={value}>
      {children}
    </ExtensionContext.Provider>
  )
}

export const useProvider = () => useContext(ExtensionContext)
