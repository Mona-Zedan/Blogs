import Sidebar from '../../components/sidebar/sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import './single.css'


function Single() {
  return (
    <div className='single'>
        < SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single
