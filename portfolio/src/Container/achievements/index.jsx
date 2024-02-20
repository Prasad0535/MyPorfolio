import React from "react";
import Cards from "./Cards";
import '../achievements/achievement.css'
const Achievements = () => {
  return (
    <>
    <h2>Achievements</h2>
    
      <div className="certificates">
         <div className="cards">
         <Cards 
    imgsrc="images/oasis.png"
    title = "This is attendee Certicate "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
    <Cards 
    imgsrc="/images/infosys.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
    <Cards 
    imgsrc="/images/leetcode (2).png"
    title = "Amcat Certified Software Trainee "
    sname="AMCAT"
    link="https://portfolioprasad1.netlify.app/" 
   />
    
    <Cards 
    imgsrc="/images/infosys.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
   />
         </div>
   </div>
   <h2>Experience</h2>
   <div className="cards">
   <Cards 
    imgsrc="/images/Sparkofferlater2.png"
    title = "Web Development Intern"
    sname="The Spark's Foundation"
    link="https://portfolioprasad1.netlify.app/" 
   />
    <Cards 
    imgsrc="images\oasis.png"
    title = "Java Developer Intern "
    sname="Oasis Infobyte"
    link="https://portfolioprasad1.netlify.app/" 
   />
    <Cards 
    imgsrc="images\IBMIntern.png"
    title = "Java Developer Intern "
    sname="Oasis Infobyte"
    link="https://portfolioprasad1.netlify.app/" 
   />
    
   </div>
   <h2>Certificates</h2>
   <div className="cards">
   <Cards 
    imgsrc="/images/aws1.png"
    title = "This is the certification from AWS Academy
    for the Cloud Practitioner Fundamentals.  "
    sname="AWS"
    link="https://portfolioprasad1.netlify.app/" 
   />
     <Cards 
    imgsrc="/images/googledataanaly1.png"
    title = "This certification from Coursera"
    sname="Google DataAnalytics"
    link="https://www.coursera.org/account/accomplishments/professional-cert/KRUFN6C8U2J6" 
   />
   <Cards 
    imgsrc="/images/Tcs.png"
    title = "Training of Development of Soft Skills which required by Industry."
    sname="TCS-Career Young Edge Professional"
    link="https://portfolioprasad1.netlify.app/" 
   />
 
   
   <Cards 
    imgsrc="/images/infosys.png"
    title = "WebDesign and Development with Infosys Springboard  "
    sname="Infosys"
    link="" 
   />
   </div>
      </>
    
  );
};


export default Achievements;


{/* <div className="events">
        <h1>Events</h1>
        <div className="card-container">
      <Cards 
    imgsrc="/images/certificate2.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
      />
        <Cards
    imgsrc="/images/certificate2.png"
    title = " AWS INNOVATIVE  "
    sname="AMAZON"
    link="https://portfolioprasad1.netlify.app/" 
      />
    </div>
    {/* </div> */} 