import './App.css'
import ClientsCard from './components/ClientsCard'

const clients=[
  {
    avatar:'https://www.w3schools.com/bootstrap4/img_avatar1.png',
    name:'Syimyk',
    contacts:'0777123456',
    from:'Osh',
    to:'Bishkek',
    amount:'$50'
  },
  {
    avatar:'https://www.w3schools.com/bootstrap4/img_avatar1.png',
    name:'Asan',
    contacts:'0555765432',
    from:'Chuy',
    to:'Osh',
    amount:'$49'
  },
  {
    avatar:'https://www.w3schools.com/bootstrap4/img_avatar1.png',
    name:'Uson',
    contacts:'0708542819',
    from:'Bishkek',
    to:'Naryn',
    amount:'$41'
  },
  {
    avatar:'https://www.w3schools.com/bootstrap4/img_avatar1.png',
    name:'Uson',
    contacts:'0708542819',
    from:'Bishkek',
    to:'Naryn',
    amount:'$41'
  },
  {
    avatar:'https://www.w3schools.com/bootstrap4/img_avatar1.png',
    name:'Uson',
    contacts:'0708542819',
    from:'Bishkek',
    to:'Naryn',
    amount:'$41'
  }
]


function App() {
	return(
     <div className='App'>
       <ClientsCard  data={clients}/>
     </div>
  )
}

export default App
