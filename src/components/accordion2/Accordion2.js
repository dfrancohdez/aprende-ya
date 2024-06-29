import React, { useState } from 'react';
import './Accordion2.scss';
import { useNavigate } from "react-router-dom";
export const Accordion2 = ({ title, content, noClases, img ,type}) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate =useNavigate()
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const handleButton = (item) => {
        navigate('/clase', {
            state: {
                title,
                item
            }
        })
    }
    
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
                            <li onClick={type==="2"?()=>handleButton(item):()=>{}} className={type==="2"?"accordion2-cursoComprado":""} 
                            key={index}>{item.value}</li>//value es nombre de la clase
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
