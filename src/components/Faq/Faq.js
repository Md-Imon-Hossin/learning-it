import React from 'react';
import { Accordion } from 'react-bootstrap';
import "./Faq.css";


const Faq = (props) => {
    // const [toggle, setToggle] = useState(false);
    const { title, desc, key } = props.faq;
    return (
        // <div className='faq-container'>
       
            <Accordion.Item eventKey={key}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    <p className='faq-des'>{desc}</p>
                </Accordion.Body>
            </Accordion.Item>

    );
};

export default Faq;