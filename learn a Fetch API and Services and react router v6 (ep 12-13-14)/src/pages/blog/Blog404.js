import { Link } from "react-router-dom"

export default function Page404() {
  return (
    <div>
      <h1>Blog sayfası bulunamadı</h1>
      <Link to="/blog">Bloga dön</Link>
    </div>
  )
}