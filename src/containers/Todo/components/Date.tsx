interface IInputDate {
  register: Function
  errors: string | undefined
}
export function Date(props: IInputDate) {
  return (
    <label>
      日期：
      {props.errors}
      <input
        {...props.register('date', {
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
