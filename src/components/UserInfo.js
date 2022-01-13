import React from 'react';

function UserInfo(props) {
    return (
        <div>
            <h2 className="user">{props.name}</h2>
            <div className="user">Tel:{props.contacts}</div>
        </div>
    );
}

export default UserInfo;