import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

// 定義每筆todo的類型
type TodoItem = {
  note: string
  date: string
  time: string
}

// 定義useState陣列的類型
type Todo = {
  todo: TodoItem[]
  setTodo: Dispatch<SetStateAction<TodoItem[]>>
}

// 建立 context 空間
const DataContext = createContext({} as Todo)

// 建立 provider 函式 => 內層包 useState
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [todo, setTodo] = useState<TodoItem[]>([])
  return (
    <>
      <DataContext.Provider value={{ todo, setTodo }}>
        {children}
      </DataContext.Provider>
    </>
  )
}

// 建立自定義 hook => 解構後可以從 data 直接拿到資料，不用 import context 空間
export const useDataContext = () => {
  return useContext(DataContext)
}
