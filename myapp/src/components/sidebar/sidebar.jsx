import "./sidebar.css"
export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarItem">ABOUT ME</span>
            <img
          src="https://ultahost.com/blog/wp-content/uploads/2023/01/Photo-Background-Removal-StickerMuleTracer.png"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
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