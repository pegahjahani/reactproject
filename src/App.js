 import './App.css';
 import './localStyle.css'
 import Menu from '../src/headPage/menu/menu'
//  import {BrowserRouter} from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './otherComponents/loginPage/loginPage';
import AdminDashboard from './otherComponents/adminDashboard/adminDashboard';






function App() {
  const [list , setList] = useState([])
  const [flag , setFlag] = useState(true)
  const [token , setToken] = useState(false)

 const clickLogin = (_flag)=>{
  setFlag(_flag)
}
  const getData = async ()=>{
      let res = await axios.get('http://localhost:2000/posts')
      setList(res.data)
  }
  useEffect(()=>{
    getData()


    
  }, [])
  return (
    <div className="App col-12 ">
     { flag 
     ?
      <div className='col-12' id='topSite'>
    <Menu listImg={list} clickLogin={clickLogin}/>

      </div>
      :
      <div className='col-12' id='topSite'>
         <LogIn flag={flag} token={setToken}/>
      </div>
}
<div>
{
  token ?
  <AdminDashboard/>
  :
  null
}
</div>

    </div>
  )
}

export default App;
