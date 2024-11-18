import { useAuth } from "./context";
import Footer from "./Footer";
import Header from "./Header";

export default function Home () {

      const { user } = useAuth()

    return(
        <>
        <Header/>
      App
      { user && (
        <div style={{padding:10, border:'1px solid red'}}>
          bu alan sadece giriş yapılınca görünür
        </div>
      )}
      <Footer/>
        </>
    )
}