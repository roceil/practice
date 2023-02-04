interface IInputNote {
  register: Function
  errors: string | undefined
}

export function Note(props: IInputNote) {
  return (
    <label>
      記事：
      {props.errors}
      <input
        {...props.register('note', {
          required: { value: true, message: '欄位必填' }
        })}
        type='text'
        name='note'
        className='border w-full px-2'
      />
    </label>
  )
}
