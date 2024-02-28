import React from "react";
import NewCards from "./NewCards";
import '../projects/project.css';
const Projects=()=>{
    return(
        <>
        <h2>Projects</h2>
            <div className="newcards">
            <NewCards
  imgsrc="/images/Screenshot (289).png"
  title ="Spearheaded design and development of Netflix-Clone Website 
  Netflix clone project built with React, HTML, CSS, and JavaScript. Mimics Netflix UI with dynamic components and responsive design"  
  sname="NETFLIX - CLONE"
  link="https://github.com/Prasad0535/NetFlix-Clone-Prasad1.github.io" 
 />
   <NewCards
  imgsrc="/images/sparks.png"
  title = "Developed secure banking website with PHP, HTML, CSS, & JS. PHP for backend logic, HTML/CSS for frontend design, & JS for interactivity. Features include user authentication, transaction processing, and responsive design." 
  sname="SPARKS BANK"
  link="https://github.com/Prasad0535/Sparkianbank.github.io" 
 />
   </div>
      
     

        </>
    );
}
export default Projects;
