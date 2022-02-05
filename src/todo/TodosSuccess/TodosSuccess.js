import React from "react"
import { Modal, Button } from 'react-bootstrap';

class TodosSuccess extends React.Component {
 
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
      Все задачи выполнены!
     </Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <p style={ {'fontSize': '22px'} }>
      Очистить список? :)
     </p>
    </Modal.Body>
    <Modal.Footer style={ {'justifyContent': 'center'} }>
     <Button onClick={this.props.onClear} style={ {'width': '40%'} } size="lg" variant="success">Очистить</Button>
     <Button onClick={this.props.onHide} style={ {'width': '40%'} } size="lg" variant="danger">Оставить</Button>
    </Modal.Footer>
   </Modal>
  )
 }
}

export default TodosSuccess
