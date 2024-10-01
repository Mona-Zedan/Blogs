import './index.css'
import NavBar from "./components/navBar/NavBar";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Single from './pages/single/Single';
import Write from './pages/write/Write';



function App() {
  return (
   
   <>
       <NavBar/>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <Header/>  */}
      <Write/>
    </>
  )
} 

export default App;

