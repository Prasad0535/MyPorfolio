import React from "react";
import './styles.css';
import { useState } from "react";
import { useEffect } from "react";

const PageHeader = ({ title }) => {
    const [info, setInfo] = useState('FRONT END DEVELOPER');

    useEffect(() => {
      const timeout1 = setTimeout(() => {
        setInfo('FULLSTACK DEVELOPER');
      }, 2000);
  
      const timeout2 = setTimeout(() => {
        setInfo('SOFTWARE ENGINEER');
      }, 4000);
  
      const timeout3 = setTimeout(() => {
        setInfo('SOFTWARE DEVELOPER');
      }, 6000);

      const timeout4= setTimeout(() => {
        setInfo('CLOUD ENTHUSIAST ENGINEER');
      }, 8000);
  
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
      };
    }, []);
    
    return (
        <>
    <div className="Name">
          Hey, I am Prasad Sonawane !!!!
         </div>
         <span style={{ color: 'black' }}>{info} </span>
        </>
        
    );
}

export default PageHeader;
