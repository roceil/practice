interface IInputNote {
  register: Function
  errors: string | undefined
}

export function Note({ register, errors }: IInputNote) {
  return (
    <label>
      記事：
      <span className='text-sm text-red-400'>{errors}</span>
      <input
        type='text'
        className='border w-full px-2'
        {...register('note', {
          required: {
            value: true,
            message: '欄位必填'
          }
        })}
      />
    </label>
  )
}
