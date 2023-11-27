import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Modal from 'react-bootstrap/Modal'

// const Gallery = ()=>{
//     return(
//         <div className="border border-danger">

//         </div>
//     )
// } 

const FineArt = () => {
    const [fineArts, setFineArts] = useState([])
    const [show, setShow] = useState(false)
    const [image, setImage] = useState({})

    const getArtData = async () => {
        let res = await axios.get('http://localhost:2000/fineArt')
        setFineArts(res.data)
    }
    const showGallery = (_item) => {
        setImage(_item)

    }
    useEffect(() => {
        getArtData()
    }, [])

    return (
        <div className=" col-12 d-flex flex-column justify-content-center align-items-center">
           
            {
                show ?
                
                    <div className="parentModal p-4">
                    <div
              className="modal show"
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog >
                <Modal.Header className="headModal" closeButton onClick={() => { setShow(false) }}>
                  <Modal.Title>photographer : {image.photographer}</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                <img key={image.id} src={image.url} className="col-12 h-20" />
               
                </Modal.Body>
        
              
              </Modal.Dialog>
            </div>
                    </div>
                    :
                    <div className=" col-12 components fineArts">
                        {
                            fineArts.map((item) => {

                                return (
                                    <div className="picBox col-10 col-md-3" >
                                        <figure>
                                            <img src={item.url} onClick={() => { setShow(true); showGallery(item) }} />
                                        </figure>
                                    </div>
                                )
                            })
                        }

                    </div>
            }


        </div>
    )
}
export default FineArt