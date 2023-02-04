import { useState } from 'react'
import { useForm } from 'react-hook-form'
import MyContext from '../Context'
import TodoList from '../../components/TodoList'
import { Note } from './components/Note'
import { Date } from './components/Date'
import { Time } from './components/Time'
import { SubmitBTN } from '../../components/SubmitBTN'

interface INOTE {
  note: string
  date: string
  time: string
}

function Todo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<INOTE>({
    defaultValues: {
      note: '',
      date: '2023-02-02',
      time: '12:00'
    },
    mode: 'onTouched'
  })
  const [todoData, setTodoData] = useState<INOTE[]>([])
  const onSubmit = handleSubmit((data) => {
    setTodoData((prev) => {
      return [...prev, data]
    })
    setValue('note', '')
  })
  const enterSubmit = (e: { key: string }) => {
    if (e.key === 'Enter') {
      onSubmit
    }
  }

  return (
    <MyContext.Provider value={{todoData,setTodoData}}>
      <div className='container py-4 mt-6 border max-w-[500px]'>
        <h1 className='text-2xl'>備忘錄</h1>
        <form
          onSubmit={onSubmit}
          onKeyDown={enterSubmit}
          className='mt-4 flex flex-col space-y-4'
        >
          <Note
            register={register}
            errors={errors.note && errors.note.message}
          ></Note>
          <Date
            register={register}
            errors={errors.date && errors.date.message}
          ></Date>
          <Time
            register={register}
            errors={errors.time && errors.time.message}
          ></Time>
          <SubmitBTN text={'新增'} width={'w-full'} />
        </form>
        {todoData.map((todo, index) => {
          return <TodoList key={index} id={index} todo={todo} />
        })}
      </div>
    </MyContext.Provider>
  )
}

export default Todo
