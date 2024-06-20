import React from 'react';
import './_bloqTxt.scss';

export const BloqTxt = ({ titulo, items }) => {
    return (
        <div className="bloq-txt">
            <h1 className='titulo'>{titulo}</h1>
            <div className='conten'>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
