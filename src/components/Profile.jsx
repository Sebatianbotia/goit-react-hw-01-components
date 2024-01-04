import React from 'react';
import { PropTypes } from "prop-types";

export default function Profile({username, tag, location, avatar, stats}) {
    const keys = Object.keys(stats);
    return (
        <div className='profile'>
            <div className='description'>
            <img src={avatar} alt="avatar" className='avatar'/>
            <p className='name'>{username}</p>
            <p className='tag'> {"@" + tag}</p>
            <p className='location'>{location}</p>
            </div>
            <ul className='stats list'>
            {keys.map((key, index) => (
                <li key= {"stat_" + index} className='stats--border'>
                    <span className='label'>{key}</span>
                    <span className='quantity'>{stats[key]}</span>
                </li>
                ))
            }
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
};