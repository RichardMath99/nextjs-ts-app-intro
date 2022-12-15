import * as React from 'react'
import { IUser } from '../../types/User'

type Props = {
  saveUser: (e: React.FormEvent, formData: IUser) => void
}

const AddUser: React.FC<Props> = ({ saveUser }) => {
  const [formData, setFormData] = React.useState<IUser>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveUser(e, formData)}>
      <div>
        <div className='Form--field'>
          <label htmlFor='name'>Username</label>
          <input onChange={handleForm} type='text' id='username' />
        </div>
        <div className='Form--field'>
          <label htmlFor='body'>E-mail</label>
          <input onChange={handleForm} type='email' id='email' />
        </div>
        <div className='Form--field'>
          <label htmlFor='body'>Telefone</label>
          <input onChange={handleForm} type='text' id='phone' />
        </div>
      </div>
      <button
        className='Form__button'
        disabled={formData === undefined ? true : false}
      >
        Add User
      </button>
    </form>
  )
}

export default AddUser