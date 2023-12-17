
import {useState } from 'react'
import {Route, Routes , Link } from 'react-router-dom'
import RealState from '../../otherComponents/realState/realState'
import Portraits from "../../otherComponents/portaraits/portraits"
import FineArt from "../../otherComponents/fineArt/fineArt"
import About from "../../otherComponents/about/about"
import Contact from "../../otherComponents/contact/contact"
import { useEffect } from 'react'





function Menu({ listImg }) {
    const [show, setShow] = useState(false)
    const [click, setClick] = useState(false)
    const clickMenu = () => {
        console.log(document.getElementsByTagName('li'))
    }
    const showTitle = ()=>{
   let titels = ['pegah website' , 'react website template' , 'reactRouter template']
   let demo = document.getElementById('title')
   let i = 1
   let x = ''
   let k = 0
   let num = 0
    const setName = ()=>{
        console.log('num' , num);
        x = titels[num]
        k = x.length
        if(num < titels.length-1){
            num++
        } else {
            num = 0
        }
    }
    setName()
    const titleWrite = ()=>{
        if(i<=x.length){
            demo.innerHTML = x.slice(0 , i)
            i++
           
        }else{
            if(k>=0){
                demo.innerHTML = x.slice(0 , k)
                k--
            } else{
                i = 1
                setName()
            }
        }
    }
    setInterval(titleWrite , 250)
    }
    useEffect(() => {
        clickMenu()
        
        showTitle()
        
    }, [])


    return (
        <div>
            <div className=" d-flex flex-nowrap col-12  ">
                {show ?
                    <div className=" col-12 ">


                        <div className=" col-12 d-flex justify-content-center flex-direction-column">

                            <ul className="col-12  listMobile">
                                <div className='col-12 d-flex justify-content-start align-items-start'>
                                    <svg onClick={() => { setShow(false) } } fal xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                                <li onClick={() => { setShow(false); setClick(true) } }><Link to="">RealState</Link></li>
                                <li onClick={() => { setShow(false); setClick(true) } }><Link to="/portraits">Portraits</Link></li>
                                <li onClick={() => { setShow(false); setClick(true) } }><Link to="/fineArt">FineArt</Link></li>
                                <li onClick={() => { setShow(false); setClick(true) } }><Link to="/about">About</Link></li>
                                <li onClick={() => { setShow(false); setClick(true) } }><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>


                    </div>
                    :
                    <div className="col-12 d-flex flex-nowrap justify-content-evenly  flex-md-wrap header">
                        <div className="col-10 col-md-12 ">
                            <h2 className="col-12 title nameWeb" id='title'>
                             
                            </h2>
                        </div>
                        <div className="col-12  d-none d-md-flex">

                            <ul id="list" className="col-12  d-flex flex-nowrap justify-content-evenly">
                                <li><Link to="/">RealState</Link></li>
                                <li><Link to="/portraits">Portraits</Link></li>
                                <li><Link to="/fineArt">FineArt</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>

                        </div>
                        <div className="d-flex d-md-none col-2 align-items-center border">
                            <svg onClick={() => { setShow(true) } } xmlns="http://www.w3.org/2000/svg" color='white' width="50" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                    </div>}



            </div>
            <div className="contentBox col-12">

                <Routes>
                    <Route exact path="/" element={<RealState listImg={listImg} />} />
                    <Route path="portraits" element={<Portraits />} />
                    <Route path="/fineArt" element={<FineArt />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>
        </div>

    )


}
export default Menu