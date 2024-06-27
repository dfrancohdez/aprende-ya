import React, { useState } from 'react';
import './Accordion2.scss';

export const Accordion2 = ({ title, content, noClases, img }) => {
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
                    <span>{noClases} clases</span>
                </h4>
            </div>
            <div className={`accordion2-content ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>• {item.value}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
