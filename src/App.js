import { AppProvider } from "./hooks/useProvider"
import { Main } from './pages/Main'

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
