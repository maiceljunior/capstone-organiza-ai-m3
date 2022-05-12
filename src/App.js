import { BrowserRouter as Router,Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
   <Router>
     <NavBar/>
     <Switch>
       <Route path='/'/>
     </Switch>
   </Router>
      
    </>
  );
}

export default App;