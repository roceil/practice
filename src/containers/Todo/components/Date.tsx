interface IInputDate {
  register: Function
  errors: string | undefined
}
export function Date({register,errors}:IInputDate) {
  return (
    <label>
      日期：
      <span className="text-sm text-red-400">{errors}</span>
      <input
        {...register('date', {
          required: {
            value: true,
            message: '欄位必填'
          }
        })}
        type='date'
        className='border w-full px-2'
      />
    </label>
  )
}
