interface IInputTime {
  register: Function
  errors: string | undefined
}
export function Time(props: IInputTime) {
  return (
    <label>
      時間：
      {props.errors}
      <input
        {...props.register('time', {
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
