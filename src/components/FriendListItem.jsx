import React from 'react';
import { PropTypes } from "prop-types";
import styled from 'styled-components';


const Span = styled.span`
background: ${prop => prop.$isOnline? "green": "red"};
width: 20px;
height: 20px;
border-radius: 50%;
margin-left: 10px;
`;

export default function FriendListItem({avatar, name, isOnline}) {

    return (
    <li className='friends__item'>
        <Span className='status' $isOnline={isOnline}/>
        <img className='friends__avatar' src={avatar} alt="avatar"/>
        <p className='name'>{name}</p>
    </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};