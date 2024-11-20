import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
export default function Post () {

    const { url,id } = useParams()
    
    return(
        <div>
            <Helmet><title>{url} detay</title></Helmet>
            post page= {url} - {id}
        </div>
    )
}