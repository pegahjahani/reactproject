 import './App.css';
 import Menu from '../src/headPage/menu/menu'
//  import {BrowserRouter} from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';






function App() {
  const [list , setList] = useState([])

  const getData = async ()=>{
      let res = await axios.get('http://localhost:2000/posts')
      setList(res.data)
  }
  useEffect(()=>{
    getData()
  }, [])
  return (
    <div className="App col-12 ">
      <div className='col-12' id='topSite'>
    <Menu listImg={list}/>
      </div>
    </div>
  );
}

export default App;
