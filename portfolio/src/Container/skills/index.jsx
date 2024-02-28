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
          <img src="https://th.bing.com/th/id/OIP.fKtEA6VSuCPh0nCy2VTnZQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CSS" />
        </div>
        <div class="skillcard-info">
        <p>"Skilled in crafting visually appealing user interfaces using CSS, with a keen eye for design and layout."</p>
        </div>
      </div>
     

      <div className="skillcard">
        <div className="image-container">
          <img src="https://th.bing.com/th/id/OIP.hIAy0-W570XlyNPlrqUPawHaHa?w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Tailwind" />
        </div>
        <div class="skillcard-info">
       <p>"Proficient in utilizing Tailwind CSS utility-first framework to streamline frontend development and ensure consistent UI design."</p>
        </div>
        </div>
     
      <div className="skillcard">
        <div className="image-container">
          <img src="https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="React" />
        </div>
        <div class="skillcard-info">
        <p>"Experienced in building dynamic web applications with React, leveraging its component-based architecture for efficient development."</p>
        </div>
      </div>
     
      <div className="skillcard">
        <div className="image-container">
          <img src="https://th.bing.com/th?id=OIP.Ue2JZ0sSt-1MEZJNdi9IfwHaIi&w=232&h=268&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="MYSQL" />
        </div>
        <div class="skillcard-info">
         
          <p>"Adept in designing and managing relational databases using MySQL, ensuring data integrity and optimal performance."</p>
        </div>
      </div>
      <div className="skillcard">
        <div className="image-container">
          <img src="https://th.bing.com/th?id=OIP.PXNp62LLV-aLT2ZUpHupZgHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Python" />
        </div>
        <div class="skillcard-info">
          
          <p>"Proficient in Python programming language, with expertise in building versatile applications, data analysis, and automation tasks using its rich ecosystem of libraries and frameworks."</p>
        </div>
      </div>
      <div className="skillcard">
        <div className="image-container">
          <img src="https://th.bing.com/th?id=OIP.cVifR-v6kBYhLzXQhliHJQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Mongo" />
        </div>
        <div class="skillcard-info">
          <p>"Experienced in NoSQL database management with MongoDB, enabling flexible and scalable data storage solutions for modern applications."</p>
        </div>
      </div>
      <div className="skillcard">
        <div className="image-container">
          <img src="https://th.bing.com/th?id=OIP.s5j5kFK-urpNTrVLlv9-ogHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Node" />
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
