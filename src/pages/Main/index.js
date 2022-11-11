import { useProvider } from "../../hooks/useProvider"
import { Login } from '../Login'
import { TodoList } from '../TodoList'

export const Main = () => {
  const { user } = useProvider()

  return user ? <TodoList /> : <Login />
}
