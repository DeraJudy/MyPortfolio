import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from "../../assets/nav_underline.svg"
import underlinedark from "../../assets/nav_underlinedark.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from  '../../assets/menu_open.svg'
import menu_open_dark from  '../../assets/menu_open_dark.svg'
import menu_close from '../../assets/menu_close.svg'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
// import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const menuIcon = theme === 'light' ? menu_open_dark : menu_open
    const underline_Icon = theme === 'light' ? underline : underlinedark; 

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menuIcon} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li className='space'><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline_Icon} alt='' />:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline_Icon} alt='' />:<></>}</AnchorLink></li>
        {/* <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline_Icon} alt='' />:<></>}</AnchorLink></li> */}
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p>{menu==="work"?<img src={underline_Icon} alt='' />:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline_Icon} alt='' />:<></>}</AnchorLink></li>
      </ul>
      <div className='nav-connect'>
        <img
            className='colorMode' 
            src={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}
        />
      </div>
        
    </div>
  )
}

export default Navbar
