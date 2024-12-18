import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import {images} from '../../constants'
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {

  const data = [
    { title: 'Frontend Developer', description: 'I am a frontend developer passionate about creating functional and responsive websites.', imgUrl: images.about01 },
    
    { title: 'React Developer', description: 'I use JavaScript library such as React to build exceptional web applications with topnotch user experience', imgUrl: images.about02 },
    
    // {title: 'Web Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusamus, incidunt iusto facilis fugit at.', imgUrl: images.about03},
    // {title: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam velit natus iure', imgUrl: images.about04},
  ]

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "abouts"]';

    // client.fetch(query).then((data) => {
    //   setAbouts(data);
    // });

    setAbouts(data);
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profiles-item"
            key={about.title + index}
          >
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);

// export default About