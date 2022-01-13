import React from 'react'

function UserDetails(props) {
	return (
		<div>
			<div className='user'>From:{props.from}</div>
			<div className='user'> To:{props.to}</div>
			<div className='user'>Amount:{props.amount}</div>
		</div>
	)
}

export default UserDetails
