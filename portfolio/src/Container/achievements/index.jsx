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
    imgsrc="images/javastars.png"
    title = "Java Profeciency"
    sname="HACKERRANK"
    link="https://www.hackerrank.com/profile/prasadsonawane12" 
   />
    <Cards 
    imgsrc="/images/leet1.png"
    title = "Leetcode 100 Days and 50 Days Badges "
    sname="LEETCODE"
    link="https://leetcode.com/Prasad0535" 
   />
         <Cards 
    imgsrc="images/codechef.png"
    title = "Badges From Codechef"
    sname="CODECHEF"
    link="https://www.codechef.com/users/prasad_101" 
   />
    <Cards 
    imgsrc="/images/DataAnalyticBadge1.png"
    title = "Google Data Analytics Professional"
    sname="GOOGLE"
    link="https://www.credly.com/earner/dashboard" 
   />
    
    <Cards 
    imgsrc="/images/CloudBadge1.png"
    title = "AWS Academy Graduate "
    sname="AMAZON"
    link="https://www.credly.com/earner/dashboard" 
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
    title = "This is the certification from AWS Academy for the Cloud Practitioner Fundamentals."
    sname="AWS ACADEMY"
    link="https://drive.google.com/file/d/13yu-5-m1lhIxHkjHHpDToOnz481NCl2z/view?usp=sharing" 
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
    link="https://drive.google.com/file/d/1vTZjNW_mTY6Rh6X3BuLGki3_bmtUezeI/view?usp=sharing" 
   />
 
 
   <Cards 
    imgsrc="/images/infosys.png"
    title = "WebDesign and Development with Infosys Springboard  "
    sname="Infosys"
    link="https://drive.google.com/file/d/13gVWyOb-YxQ0pxy7xOtAX1RDLdDcN0J2/view?usp=sharing" 
   />
   <Cards 
    imgsrc="/images/flipkartnew.png"
    title = "Flipkart Grid Hackathon By Unstopp "
    sname="FLIPKART"
    link="https://drive.google.com/file/d/1ZL2BeXb-D7JVTK7w0JQmuFk3o8pyrDXl/view?usp=sharing" 
   />
   </div>
      </>
    
  );
};


export default Achievements;


