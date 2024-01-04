import React from 'react';
import FriendListItem from './FriendListItem';

import { PropTypes } from "prop-types";

export default function FriendList({friends}) {
    return (
    <div className='friends'>
        <ul className='friend-list list'>
            {friends.map(element => {
                return <FriendListItem key={'fried_'+ element.id} avatar={element.avatar} name={element.name} isOnline={element.isOnline}/>
            })}
        </ul>
    </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
};