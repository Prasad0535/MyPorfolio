import React from "react";

const NewCards=(props)=>{
    return(
        <>
       

         {/* <div className="achievment">
         <div className="newcards"> */}
             <div className="newcard">
                 
                <img src={props.imgsrc} alt="img1" className="card_img"/> 
                <div className="newcard_info">
                <span className="newclass_category"> {props.title} </span>
                 <h5 className="newcard_title"> {props.sname} </h5>
                  <a href={props.link}  >
                 <button>Watch Now</button>
                 </a>  
                </div>
             </div>
          {/* </div> 
         </div> */}
        
            </>
    );
}
export default NewCards;