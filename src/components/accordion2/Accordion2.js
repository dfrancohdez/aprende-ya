import React, { useState } from 'react';
import './Accordion2.scss';

export const Accordion2 = ({ title, content, tiempo , img}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='accordion2'>
            <div className='accordion2-title' onClick={toggleAccordion}>
                <h4>
                    <span className={`accordion2-icon ${isOpen ? 'open' : ''}`}>
                        {isOpen ? '▼' : '▼'}
                    </span>
                    <span>{title}</span>
                    <span>{tiempo}min</span>
                </h4>
            </div>
            <div className={`accordion2-content ${isOpen ? 'open' : ''}`}>
                <div className='izq'><img src={img} className='imagen'/></div>
                <div className='der'>{content}</div>
            </div>
        </div>
    );
};
