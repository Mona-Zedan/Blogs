import Header from '../../components/Header/Header'
import './Home.css'
import Posts from '../../components/posts/posts'
import Sidebar from '../../components/sidebar/sidebar'

export default function Home() {
  return (
    <>
      
      <Header/>
        <div className="home">
          <Posts/>
          <Sidebar/>
        </div>
    </>
  )
}



