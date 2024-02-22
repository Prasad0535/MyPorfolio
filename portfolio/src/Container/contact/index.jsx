import React from 'react';
import { Helmet } from 'react-helmet';
import '../contact/contact.css';
// import p1 from './1.png';

const Contact = () => {
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
            <div className="contact-form">
              <div className="form-group">
                <div className="field">
                <i className="fas fa-user"></i>
                  <input type="text" name="name" placeholder="Name" required />
                  
                </div>
                <div className="field">
                  <input type="text" name="email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                  <textarea placeholder="Message" name="message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
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





















