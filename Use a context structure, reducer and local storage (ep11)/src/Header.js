import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "./context";
export default function Header() {

const { user, dispatch } = useAuth()

const login = () =>{
  //kullanıcı adı ve şifreyi apiye iletiyorum
  // cevap dönüyor
  dispatch({
    type: 'LOGIN',
    payload: {
      name: 'muhammed',
      id: 1
    }
  })
}

const logout = () => {
  dispatch({
    type: 'LOGOUT'
  })
}

  return (
    <header>
      Header<br />
      {user && <button onClick={logout}>Çıkış Yap</button> || <button onClick={login}>Giriş Yap</button>}
      <hr />
      <SwitchTheme/>
      <SwitchLanguage />
    </header>
  )
}


