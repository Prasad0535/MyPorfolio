import React from "react";
import NewCards from "./NewCards";
import '../projects/project.css';
const Projects=()=>{
    return(
        <>
        <h2>Projects</h2>
            <div className="newcards">
            <NewCards
  imgsrc="/images/screenshot (289).png"
  title ="Spearheaded design and development of Netflix-Clone Website 
  which has custom playlist feature that allows user to save their favourite movies.Desgin Login,Signup,Dashboard pages with great UserInterface"  
  sname="NETFLIX - CLONE"
  link="https://portfolioprasad1.netlify.app/" 
 />
   <NewCards
  imgsrc="/images/sparks.png"
  title = "This is attendee Certicate "
  sname="AMAZON"
  link="https://portfolioprasad1.netlify.app/" 
 />
   <NewCards
  imgsrc="/images/certificate1.png"
  title = "This is attendee Certicate "
  sname="AMAZON"
  link="https://portfolioprasad1.netlify.app/" 
 />
 <NewCards
  imgsrc="/images/sparks.png"
  title = "This is attendee Certicate "
  sname="AMAZON"
  link="https://portfolioprasad1.netlify.app/" 
 />
            </div>
      
     

        </>
    );
}
export default Projects;