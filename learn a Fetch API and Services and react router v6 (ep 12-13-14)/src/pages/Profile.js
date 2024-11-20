import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Profile() {

  const { setUser, user } = useAuth()
  const logoutHandle = () => {
    setUser(false)
  }

  return (
    <div>
      Profil sayfası <br />
      {!user && <Link to="/auth/login">Giriş Yap</Link>}
      {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
    </div>
  )
}

export default Profile
