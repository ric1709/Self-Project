import React from 'react';

function UserImg(props) {
    return (
        <div>
            <img className="user-img" src={props.avatar} alt={props.name} />
        </div>
    );
}

export default UserImg;