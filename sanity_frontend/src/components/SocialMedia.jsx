import React from 'react'
import { BsTwitter, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {

  return (
    <div className='app__social'>
      <div>
        <a
          href="https://x.com/gideon_abe?t=nwfNFiDlVlbbyesdAb8QUA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          >
          <BsTwitter
            // style={{color: '#1DA1F2'}}
          />
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/qr/VC223KV77QNAM1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp
            // style={{color: '#25D366'}}
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/gideon-abe-79b6ab341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            // style={{color: '#0077B5'}}
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/abe.ayokunle.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF
            // style={{color: '#1877F2'}}
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/gideon__abe?utm_source=qr&igsh=MTRqMGJsdDBpbmF1Ng=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            // style={{color: '#E1306C'}}
          />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;