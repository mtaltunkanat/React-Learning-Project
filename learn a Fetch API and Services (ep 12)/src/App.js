import { PostService, UserService } from "./services"
import { useEffect } from "react";
import {getPosts} from "./services/post"

function App() {

  useEffect(() => {
    PostService.getPosts().then(res => console.log(res))
    PostService.getPostDetail(2).then(res => console.log(res))
    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'test'
    }).then(res => console.log(res))
    UserService.getUsers()
  })

  return (
    <>
    App
    </>
  );
}

export default App;
