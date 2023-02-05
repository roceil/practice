import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import { useDataContext } from '../../helpers/context/todoData/Index'
import { Note } from './components/Note'
import { Date } from './components/Date'
import { Time } from './components/Time'
import { SubmitBTN } from '../../components/SubmitBTN'
import TodoList from './components/TodoList'

type TodoItem = {
  note: string
  date: string
  time: string
}

function Todo() {
  const nowTime = dayjs().format('HH:mm')
  const today = dayjs().format('YYYY-MM-DD')

  const { setTodo } = useDataContext()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<TodoItem>({
    defaultValues: {
      note: '',
      date: today,
      time: nowTime
    },
    mode: 'onTouched'
  })
  const onSubmit = handleSubmit((data) => {
    setTodo((prev) => {
      return [...prev, data]
    })
    setValue('note', '')
  })
  const onKeyDown = (e: { key: string }) => {
    e.key === 'Enter' ? onSubmit : null
  }

  return (
    <div className='container py-4 mt-6 border max-w-[500px]'>
      <h1 className='text-2xl'>備忘錄</h1>
      <form
        onSubmit={onSubmit}
        onKeyDown={onKeyDown}
        className='mt-4 flex flex-col space-y-4'
      >
        <Note
          register={register}
          errors={errors && errors.note?.message}
        ></Note>
        <Date
          register={register}
          errors={errors && errors.date?.message}
        ></Date>
        <Time
          register={register}
          errors={errors && errors.time?.message}
        ></Time>
        <SubmitBTN text={'新增'} type={'submit'} />
      </form>

      {/* 顯示待辦清單 => map */}
      <ul>
        <TodoList />
      </ul>
    </div>
  )
}

export default Todo
