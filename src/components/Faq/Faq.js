import React, { useState } from 'react';
import "./Faq.css"
const Faq = (props) => {
    const [toggle, setToggle] = useState(false);
    const { title, desc } = props.faq;
    return (
        <div className='faq-container'>
           <div className='faq'>
                <h4>{title}</h4>
                <button className='faq-btn' onClick={() => { setToggle(!toggle) }}>

                    {toggle ? "-" : "+"}
                </button>
                
            </div>
           
            {toggle && <p>{desc}</p>}
          
            

           </div>
            
        
    );
};

export default Faq;