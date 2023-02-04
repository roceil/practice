import { useContext } from 'react'
import MyContext from '../containers/Context'

interface IBtn {
  text: string
  width?: string
  id?: number
}

export function SubmitBTN(props: IBtn) {
  const { todoData, setTodoData } = useContext(MyContext)
  const checkWidth = props.width ? props.width : ''

  const deletedItems = () => {
    const newData = todoData.filter(
      (item: { note: string; date: string; time: string }, index: number) => {
        return props.id !== index
      }
    )
    setTodoData(newData)
  }
  return (
    <button
      type='submit'
      onClick={deletedItems}
      className={`border rounded p-1 bg-black text-white ${checkWidth}`}
    >
      {props.text}
    </button>
  )
}
