import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src='https://content.presentermedia.com/files/clipart/00015000/15979/handshake_illustration_800_wht.jpg'/>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form>
          <input type="text" placeholder='Email'/>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>



    </div>
  )
}

export default Contact;