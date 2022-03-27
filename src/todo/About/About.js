import React from "react"
import { Modal, Button } from 'react-bootstrap';

class About extends React.Component {
 render() {
  return(
   <Modal
    show={this.props.show}
    onHide={this.props.onHide}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
   >
    <Modal.Header closeButton>
     <Modal.Title id="contained-modal-title-vcenter">
      О приложении
     </Modal.Title>
    </Modal.Header>
    <Modal.Body className="modalBody" style={ {'fontSize': '18px'} }>
     <p>Данное приложение разработано мной для изучения концепций ReactJS.
      На данный момент реализована только Frontend часть.</p>
     <p>Создано в 2021 - 2022г.</p>
     <p align="right">- korotkir -</p>
    </Modal.Body>
    <Modal.Footer style={ {'justifyContent': 'center'} }>
     <Button style={{'width': '100%'}} onClick={this.props.onHide} size="lg" variant="secondary">Закрыть</Button>
    </Modal.Footer>
   </Modal>
  )
 }
}

export default About
