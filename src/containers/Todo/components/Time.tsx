interface IInputTime {
  register: Function
  errors: string | undefined
}
export function Time({register,errors}: IInputTime) {
  return (
    <label>
      時間：
      <span className="text-sm text-red-400">{errors}</span>
      <input
        {...register('time', {
          required: {
            value: true,
            message: '欄位必填'
          }
        })}
        type='time'
        className='border w-full px-2'
      />
    </label>
  )
}
