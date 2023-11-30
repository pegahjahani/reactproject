import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'


const RealState = ({ listImg }) => {

  const [showBody, setShowBody] = useState(false)
  const [textBody, setTextBody] = useState({})
  const showModal = (_item) => {
    setTextBody(_item)

  }
  return (
    <div className=" components ">
      {
        showBody ?
          <div className="parentModal p-4">
            <div
              className="modal show"
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog className="modalBox">
                <Modal.Header className="modalHeader" closeButton onClick={() => { setShowBody(false) }}>
                  <Modal.Title>{textBody.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <div key={textBody.id} className="col-12 modalBody" > {textBody.body} </div>

                </Modal.Body>


              </Modal.Dialog>
            </div>
          </div> :
          <div className="col-12 realState">
            {listImg.map((item) => {
              return (
                <div key={item.id} className="box col-6 col-md-3" onClick={() => { showModal(item); setShowBody(true) }}>
                  <figure className="col-12">
                    <img className="col-12" src={item.url} />
                  </figure>

                  <figcaption className="figCaption col-12"> {item.title} </figcaption>
                </div>
              )
            })}
          </div>

      }


    </div>
  )
}
export default RealState