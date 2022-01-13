import React from 'react'
import './ClientCard.css'
import UserInfo from './UserInfo'
import UserImg from './UserImg'
import UserDetails from './UserDetails'

function ClientsCard(props) {
	const arr = props.data
	return (
		<div className='main-card'>
			{arr.map((el, id) => {
				return (
					<div key={id} className='Card'>
						<UserImg avatar={el.avatar} name={el.name} />
						<UserInfo name={el.name} contacts={el.contacts} />
						<UserDetails
							from={el.from}
							to={el.to}
							amount={el.amount}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default ClientsCard
