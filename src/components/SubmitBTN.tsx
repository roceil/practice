import { useDataContext } from '../helpers/context/todoData/Index'

interface IBtn {
  text: string
  type: 'button' | 'submit'
  width?: string
  id?: number
}

export function SubmitBTN({ text, type, width, id }: IBtn) {
  const { todo, setTodo } = useDataContext()
  const checkWidth = width ? width : null

  const deletedItems = () => {
    if (type === 'button') {
      const newData = todo.filter((item, index: number) => {
        return id !== index
      })
      setTodo(newData)
    }
  }
  return (
    <button
      type={type}
      className={`border rounded p-1 bg-black text-white ${checkWidth}`}
      onClick={deletedItems}
    >
      {text}
    </button>
  )
}
