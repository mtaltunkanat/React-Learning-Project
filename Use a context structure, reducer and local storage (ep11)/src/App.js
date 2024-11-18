import { SiteProvider, AuthContext, AuthProvider} from "./context"
import Home from "./Home";
import './styles.css';


function App() { 

  return (

    <SiteProvider>
      <AuthProvider>
        <Home/>
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
