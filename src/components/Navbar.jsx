import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import Navlinks from "./Navlinks";

const Navbar = () => {
    const {openSidebar, setPageId} = useGlobalContext();

    const handleSubmenu = (e) =>{ // this function will trigger(onMouseOver) when hover outside the target element (nav-links-btn) in Submenu.jsx
        console.log(e.target)     // css approach. the element(button) nav-link-btn must be stretch
                                  // until it can level the bottom of nav-link-button and submenu for 
                                  // not hiding when hovering in the bottom of nav-link-btn(button)
        if(!e.target.classList.contains('nav-link-btn')){ // if the hover is not the button(has class of nav-link-btn) will hide the submenu.
          setPageId(null);
        }
    }
  return (
    <nav  onMouseOver={handleSubmenu}>  {/* (onMouseOver) when hover outside the target element */}
        <div className="nav-center">
          <h3 className="logo">strapi</h3>
          <button className="toggle-btn" onClick={openSidebar}><FaBars /></button>
        
          <Navlinks />
        </div>
    </nav>
  )
}

export default Navbar;