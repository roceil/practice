import Todo from './containers/Todo/Index'
import { DataProvider } from './helpers/context/todoData/Index'

function App() {
  return (
    <DataProvider>
      <Todo/>
    </DataProvider>
  )
}

export default App
