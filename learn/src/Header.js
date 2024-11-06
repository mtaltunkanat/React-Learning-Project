import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "./context/AuthContext";
export default function Header() {

const { user, setUser } = useAuth()

const login = () =>{
  setUser({
    name: 'muhammed',
    id:1
  })
}

const logout = () => {
  setUser(false);
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


