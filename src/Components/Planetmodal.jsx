import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SpaceContext } from './Spacestate';

function Planetmodal() {
   const {selectedPlanet, setSelectedPlanet} = useContext(SpaceContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [planets,Setplanets] = useState('')

  useEffect(()=>{
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${selectedPlanet}`)
    .then((res) => {
        return res.json()
    })
    .then((data)=> {
        Setplanets(data.semimajorAxis)

    })
  },[])


  return (
    <>
      <p variant="primary" onClick={handleShow}>
        {planets}
      </p>
     
      <section id='modal'>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPlanet}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{planets}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </section>
      
    </>
  );
}

export default Planetmodal;