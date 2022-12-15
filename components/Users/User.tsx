import * as React from 'react'
import Image from 'next/image'
import { IUser } from '../../types/User'
import profilePic from '../../public/image/user.png'
type Props = {
  user: IUser
  deleteUser: (id: number) => void
}

const User: React.FC<Props> = ({ user, deleteUser }) => {
  return (
    <div className='Card'>
       <Image
          src={profilePic}
          alt="Picture of the author"
          width={180}
          height={180}
        />
      <div className='Card--body'>
        <h1 className='Card--body-title'>{user.username}</h1>
        <p className='Card--body-text'>{user.email}</p>
        <p className='Card--body-text'>{user.phone}</p>
      </div>
      <button className='Card__button' onClick={() => deleteUser(user.id)}>
        Delete
      </button>
    </div>
  )
}

export default User