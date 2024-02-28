import React from "react";
import '../skills/Skills.css'
const Skills=()=>{
    return(
        <>    
     <h2>Skills</h2>
    <div className="skillcards">
    <div className="skillcard">
        <div className="image-container">
          <img src="https://wallpapercave.com/wp/wp7250222.jpg" alt="Java" />
        </div>
        <div class="skillcard-info">
          {/* <h3>Java </h3> */}
          <p>"Proficient in Java programming language, with expertise in developing robust and scalable applications."</p>
        </div>
      </div>
      

      <div className="skillcard">
        <div className="image-container">
          <img src="https://tse3.mm.bing.net/th?id=OIP.kij1QlZKaZtCPtEbWQpiVAHaCz&pid=Api&P=0&h=180" alt="CSS" />
        </div>
        <div class="skillcard-info">
        <p>"Skilled in crafting visually appealing user interfaces using CSS, with a keen eye for design and layout."</p>
        </div>
      </div>
     

      <div className="skillcard">
        <div className="image-container">
          <img src="https://tse1.mm.bing.net/th?id=OIP.AvpmhSP2e8GguzR4CUT5dQHaEy&pid=Api&P=0&h=180" alt="Tailwind" />
        </div>
        <div class="skillcard-info">
       <p>"Proficient in utilizing Tailwind CSS utility-first framework to streamline frontend development and ensure consistent UI design."</p>
        </div>
        </div>
     
      <div className="skillcard">
        <div className="image-container">
          <img src="https://tse3.mm.bing.net/th?id=OIP.rdDJbj2fgaC3NmjAfF_FlwHaHa&pid=Api&P=0&h=180" alt="React" />
        </div>
        <div class="skillcard-info">
        <p>"Experienced in building dynamic web applications with React, leveraging its component-based architecture for efficient development."</p>
        </div>
      </div>
     
      <div className="skillcard">
        <div className="image-container">
          <img src="https://tse3.mm.bing.net/th?id=OIP.FEvZIQaiXEQmH1Hv-36PYQHaEo&pid=Api&P=0&h=180" alt="MYSQL" />
        </div>
        <div class="skillcard-info">
         
          <p>"Adept in designing and managing relational databases using MySQL, ensuring data integrity and optimal performance."</p>
        </div>
      </div>
      <div className="skillcard">
        <div className="image-container">
          <img src="https://tse4.mm.bing.net/th?id=OIP.nUYOwBlsmc2xTLmGRzBTCQHaHa&pid=Api&P=0&h=180" alt="Python" />
        </div>
        <div class="skillcard-info">
          
          <p>"Proficient in Python programming language, with expertise in building versatile applications, data analysis, and automation tasks using its rich ecosystem of libraries and frameworks."</p>
        </div>
      </div>
      <div className="skillcard">
        <div className="image-container">
          <img src="https://tse3.mm.bing.net/th?id=OIP.CbmE-nmIlkwxdeFSFW0HlwAAAA&pid=Api&P=0&h=180" alt="Mongo" />
        </div>
        <div class="skillcard-info">
          <p>"Experienced in NoSQL database management with MongoDB, enabling flexible and scalable data storage solutions for modern applications."</p>
        </div>
      </div>
      <div className="skillcard">
        <div className="image-container">
          <img src="https://tse1.mm.bing.net/th?id=OIP.s5j5kFK-urpNTrVLlv9-ogHaEK&pid=Api&P=0&h=180" alt="Node" />
        </div>
        <div class="skillcard-info">
          
          <p>"Experienced in server-side development with Node.js, leveraging its event-driven architecture to build high-performance and scalable web applications, APIs, and microservices."</p>
        </div>
      </div>
      </div>
     
        </>
    );
}
export default Skills;
