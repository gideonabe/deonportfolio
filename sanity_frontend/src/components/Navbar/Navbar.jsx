import React, {useState} from 'react'
import { images } from '../../constants';
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt='logo' /> */}
        <h1>DE<span>ON</span></h1>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{ item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt3 onClick={() => setToggle(true)} /> 
        {/* the hamburger icon is styled as svg */}
        
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{duration: 0.5, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className='app__navbar-links'>                   
              {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar