import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{BsDiscord} from 'react-icons/bs'
import{FaLinkedin} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_eqssvyk', 'template_5v0jiqb', form.current, 'l8Jz0v8SOX5_p2Xe-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='.contact__option-icon'/>
                        <h4>Email</h4>
                        <h5 className='contact__option-h5'>anirudhpatnaik2804@gmail.com</h5>
                        <a href="mailto: anirudhpatnaik2804@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaLinkedin className='.contact__option-icon'/>
                        <h4>Linkedin</h4>
                        <h5>Anirudh Patnaik</h5>
                        <a href="https://www.linkedin.com/in/anirudh-patnaik-1a0374170/" target='_blank'>Profile</a>
                    </article>
                    <article className="contact__option">
                        <BsDiscord className='.contact__option-icon'/>
                        <h4>Discord</h4>
                        <h5>anirudh#2373</h5>
                        <a href="https://discord.com/users/761168259189571585" target='_blank'>Ping Me</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact