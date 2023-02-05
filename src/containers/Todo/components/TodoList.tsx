import { SubmitBTN } from '../../../components/SubmitBTN'
import { useDataContext } from '../../../helpers/context/todoData/Index'

function TodoList() {
  const { todo } = useDataContext()

  return (
    <>
      {todo.map((todoItem ,index) => {
        return (
          <li key={index} className='mt-4 flex justify-between items-center border-b pb-2'>
            <p>{todoItem.note}</p>
            <div className='flex space-x-3 items-center'>
              <p className='text-sm'>新增時間：{todoItem.date} - {todoItem.time}</p>
              <SubmitBTN text={'刪除'} type={'button'} id={index} />
            </div>
          </li>
        )
      })}
    </>
  )
}

export default TodoList


