/* import { useEffect, useState } from "react"

function Eski() {

  const [name, setName] = useState('mami')
  const [avatar, setAvatar] = useState(false)
  const [users, setUsers] = useState(false)

  const addPost = data => {

  const headers = new Headers()
  //headers.append('Content-type', 'application/json')
  headers.append('Authorization', 'Bearer tayfun1234abc')

  const formData = new FormData()
  formData.append('userId', data.userId)
  formData.append('title', data.title)
  formData.append('body', data.body)

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      //body: JSON.stringify(data),
      body: formData,
      headers
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if(res.ok && res.status === 200) {
      return res.json()
    }
  })
  .then(data => setUsers(data))
  .catch(err => console.log(err))

  addPost({
    userId: 1,
    title: 'Örnek Post',
    body: 'Post İçeriği'
  })

  }, []);

  const submitHandle = e => {
    e.preventDefault()
    const data = {
      name, 
      avatar
    }
    const formData = new FormData()
    formData.append('name', name)
    formData.append('avatar', avatar)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    })
  }

  return (
    <>

    <form onSubmit={submitHandle}>
     <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/> <br />
     <input type="file" name="avatar" onChange={e => setAvatar(e.target.files[0])}/> <br />
     <button type="submit" disabled= {!name || !avatar}>Kaydet</button>
    </form>

    <h1>User List</h1>
    <ul>
    {users && users.map(user => (
      <li key= {user.id}>
        {user.name}
      </li>
    ))}
    </ul>
    </>
  );
}

export default Eski;
 */


/* useEffect(() => {
    PostService.getPosts().then(res => console.log(res))
    PostService.getPostDetail(2).then(res => console.log(res))
    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'test'
    }).then(res => console.log(res))
    UserService.getUsers()
  })
  serviceler 12.bölümden
  
  import { PostService, UserService } from "./services"
import { useEffect } from "react";
import {getPosts} from "./services/post"
  */