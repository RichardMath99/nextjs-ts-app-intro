import * as React from 'react'
import { InferGetStaticPropsType } from 'next'

import AddUser from '../../components/Users/AddUser'
import User from '../../components/Users/User'

import { IUser} from '../../types/User'

const BASE_URL: string = 'https://jsonplaceholder.typicode.com/users'

export default function IndexPage({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [userList, setUserList] = React.useState(users)
 
  const addUser = async (e: React.FormEvent, formData: IUser) => {
    e.preventDefault()
    const user: IUser = {
      id: Math.random(),
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
    }
    setUserList([user, ...userList])
  }

  const deleteUser = async (id: number) => {
    const users: IUser[] = userList.filter((user: IUser) => user.id !== id)
    console.log(users)
    setUserList(users)
  }

  if (!userList) return <h1>Loading...</h1>

  return (
    <main className='container'>
      <h1>User</h1>
      <AddUser saveUser={addUser} />
      {userList.map((user: IUser) => (
        <User key={user.id} deleteUser={deleteUser} user={user} />
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL)
  const users: IUser[] = await res.json()

  return {
    props: {
      users,
    }
  }
}