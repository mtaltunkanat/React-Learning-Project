import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils";

function App() {
    // url fonksiyonu ile doğru URL'yi elde edelim
    console.log(
        url('home.blog.categories', {
            id: 3,
            url: 'test-adana'
        })
    );

    return useRoutes(routes);
}

export default App;
