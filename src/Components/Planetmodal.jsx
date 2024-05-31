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


   fetch(`https://api.le-systeme-solaire.net/rest/bodies/${selectedPlanet}`)
   .then(async response => {
       const data = await response.json()
  

       if (!response.ok) {
           const error = (data && data.message) || response.statusText;
           return Promise.reject(error);
       }

       Setplanets(data)
   })
   .catch(error => {
       this.setState({ errorMessage: error.toString() });
       console.error('There was an error!', error);
   });


  return (
    <>
      <p style={{
        color:"blue",
        fontSize:"15px",
      }} variant="primary" onClick={handleShow}>
        Click Here for Planet info
      </p>
     
      <section id='modal'>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{planets.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Gravity: ${planets.gravity} m/s2`}<br/>
          {`Density ${planets.density}g/cm3`}<br />
          {`Average temp: ${planets.avgTemp}K`}<br />
          {`Escape Velocity: ${planets.escape} km/s`}
          


        </Modal.Body>
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