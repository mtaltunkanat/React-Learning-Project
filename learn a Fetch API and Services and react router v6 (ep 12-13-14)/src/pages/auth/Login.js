import { useAuth } from "../../context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom" 
export default function Login() {

  const navigate = useNavigate()
  const location = useLocation()
  const { setUser } = useAuth()

    console.log(location)

  const loginHandle = () =>  {
    setUser({
      id:1,
      username:'mamitaha'
    })
    navigate(location?.state?.return_url || '/', {
      replace: true,
      state: {
        name:'tayfun'
      }
    })
  }

  return (
    <div>
      login page <br />
      <button onClick={loginHandle}>Giriş yap</button>
    </div>
  )
}
