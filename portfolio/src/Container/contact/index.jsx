import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../contact/contact.css';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [message,setMessage]=useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9w6vyvs', 'template_ak2xiv6', form.current, {
        publicKey: '2GR1p0h5sLghpO_-A',
      })
      .then(
        (result) => {
          setMessage('Email Send Successfully !!');
          console.log("message send successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage(`Erro: ${error.text}`);
        }
      );
    };
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <section className="contact" id="contact">
      <h2 id="contact-heading" className="heading">
      <i className="fas fa-headset"></i> Contact  <span className="heading-span"> Us</span>
        </h2>

        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src="https://th.bing.com/th/id/OIP.64JVgSNX0KGCS5w8qvkCXwHaEu?pid=ImgDet&w=206&h=131&c=7&dpr=1.3" alt="" />
            </div>
            <form ref={form} onSubmit={sendEmail}>
            <div className="contact-form">
              <div className="form-group">
                <div className="field">
                <i className="fas fa-user"></i>
                  <input type="text" name="user_name" placeholder="Name" required />
                  
                </div>
                <div className="field">
                  <input type="text" name="user_email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="Mobile_number" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                {message && <h2 className={`message ${message.includes("Error") ? "error" : "success"}`}>{message}</h2>}
                  <textarea placeholder="Message" name="message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit" value="send">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
            </form>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

































// import React from "react";
// import '../contact/styles.css';
// const Contact = () => {
//     return (
//         <div className="contact-container">
//             <div className="left">
//                 Let's Come TO Me
//             </div>

//             <div className="contact-form">
//                 <h1>Contact Us</h1>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="name">Your Name:</label>
//                         <input type="text" id="name" name="name" placeholder="Enter your name" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Your Email:</label>
//                         <input type="email" id="email" name="email" placeholder="Enter your email" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="message">Message:</label>
//                         <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
//                     </div>
//                     <button type="submit">Send Message</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Contact;





















