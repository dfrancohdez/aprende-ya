import React, { useState } from 'react';
import './Accordion2.scss';

export const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='accordion'>
            <div className='accordion-title' onClick={toggleAccordion}>
                <h4>
                    <span>{title}</span>
                    <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                        {isOpen ? '▼' : '▼'}
                    </span>
                </h4>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};
