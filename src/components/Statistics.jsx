import React from 'react';
import { PropTypes } from "prop-types";

export default function Statistics({title, stats}) {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    };

    return (
    <section className='statistics'>
        {title && <h2 className="title">{title}</h2>}
        <ul className='stat-list list'>
            {stats.map((element) => (
                <li key= {element.id} className='item' style={{backgroundColor: getRandomHexColor()}}>
                    <span className='item__label'>{element.label}</span>
                    <span className='item__percentage'>{element.percentage + '%'}</span>
                </li>
                ))
            }
        </ul>
    </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
};