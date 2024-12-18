import React, {useState, useEffect} from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import {images} from '../../constants'
import './Work.scss'

const Work = () => {

  const data = [
    { title: 'ShareMe', imgUrl: images.shareme, projectLink: 'https://deonshare-me.netlify.app/', codeLink: '', description: 'A social media web application that displays Quality pictures of different categories where users can like, save, upload and download pictures', tags: 'React JS', name: 'ShareMe Web App' },

    { title: 'Flixx Movie App', imgUrl: images.flixx, projectLink: 'https://flixx-movieapp.netlify.app/', codeLink: '', description: 'A movie web application that displays latest movies and shows', tags: 'Web App', name: 'Flixx Movie App' },

    { title: 'Music Player', imgUrl: images.musicplayer, projectLink: 'https://deonmusicplayer.netlify.app/', codeLink: '', description: 'A Boomplayer clone that plays limited number of songs', tags: 'Web App', name: 'Music Player' },
    
    { title: 'Movie Search App', imgUrl: images.moviesearch, projectLink: 'https://deon-movies.netlify.app/', codeLink: 'https://github.com/gideonabe/Deon-Movies-Search', description: 'This web application gives results of searched movies', tags: 'React JS', name: 'Movie Search App' },
    
    { title: 'Ekiti Tours', imgUrl: images.ektours, projectLink: '', codeLink: '', description: 'This is a booking website for Ekiti State Tourism centers', tags: 'Websites', name: 'Ekitit Tours' },
    
    { title: 'T Electricals Landing Page', imgUrl: images.telectricals, projectLink: '', codeLink: '', description: 'This is a landing page for an electrical company', tags: 'Websites', name: 'T Electricals landing page' },
    
    // { title: 'Tracalorie App', imgUrl: images.tracalorie, projectLink: 'https://deontracalorieapp.netlify.app/', codeLink: '', description: 'A calorie tracking web app', tags: 'Web App', name: 'Tracalorie App'},
    
  ]


  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  
 

  
  useEffect(() => {
    // const query = '*[_type == "works"]';

    // client.fetch(query)
    //   .then((data) => {
    //     setWorks(data);
    //     setFilterWork(data);
    //   })

    setWorks(data);
    setFilterWork(data);
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}])
    
    setTimeout(() => {    
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className='app__work-filter'>
        {['React JS', 'Web App', 'Websites', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          > 
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);