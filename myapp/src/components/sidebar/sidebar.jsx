import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://ultahost.com/blog/wp-content/uploads/2023/01/Photo-Background-Removal-StickerMuleTracer.png"
          alt=""
        />
        <p>
          "I'm David Johnson, <br /> and I create and manage <br /> a blog  or website that  <br />features articles, text content, <br /> or media that is regularly updated. <br /> I share my thoughts, <br /> experiences, and various<br /> topics with the audience."
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORITES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}