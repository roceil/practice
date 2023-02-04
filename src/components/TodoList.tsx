import { SubmitBTN } from './SubmitBTN'

interface IProps {
  todo: { note: string; date: string; time: string }
  id: number
}

function TodoList(props: IProps) {
  return (
    <div className='mt-4 flex justify-between items-center border-b pb-2'>
      <p>{props.todo.note}</p>
      <div className='flex space-x-3 items-center'>
        <p className='text-sm'>
          新增時間：{props.todo.date} - {props.todo.time}
        </p>
        <SubmitBTN text={'刪除'} id={props.id}/>
      </div>
    </div>
  )
}

export default TodoList
