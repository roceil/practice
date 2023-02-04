import { createContext } from "react"
interface IStore {
  todoData:Object[]
  setTodoData:Function
}


const MyContext = createContext({}) 

export default MyContext