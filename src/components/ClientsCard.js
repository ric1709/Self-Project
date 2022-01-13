import React from 'react';
import './ClientCard.css'

function ClientsCard(props) {
    const arr=props.data
    return (
        <div className="main-card">
            {arr.map((el,id)=>{
                return (
                    <div key={id} className='Card'>
                        <img className="user-img" src={el.avatar} alt={el.name} />
                        <h2 className="user">{el.name}</h2>
                        <div className="user">Tel:{el.contacts}</div>
                        <div className="user">From:{el.from}</div>
                        <div className="user"> To:{el.to}</div>
                        <div className="user">Amount:{el.amount}</div> 
                    </div>
                )
            })}
        </div>
    )
}

export default ClientsCard;