import './NavBar.css'

function NavBar() {
  return (
    <div className='top'>
       <div className='topLeft'>
       <i className="topIcon fa-brands fa-twitter"></i>
       <i className="topIcon fa-brands fa-pinterest-p"></i>
       <i className="topIcon fa-brands fa-facebook"></i>
       <i className="topIcon fa-brands fa-instagram"></i>
       </div>


       <div className='topCenter'>
            <ul className='topList'>
               <li className='topListItem'>HOME</li>
               <li className='topListItem'>ABOUT</li>
               <li className='topListItem'>CONTACT</li>
               <li className='topListItem'>WRITE</li>
               <li className='topListItem'>LOGOUT</li>
            </ul>
       </div>


       <div className='topRight'>
        <img className='topImge'
        src="https://images.pexels.com/photos/7192984/pexels-photo-7192984.jpeg" alt="" />
        <i className="SearchIcon fa-solid fa-magnifying-glass"></i>
       </div>
       
    </div>
  )
}

export default NavBar
