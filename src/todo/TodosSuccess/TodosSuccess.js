import React from "react"
import { Modal, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import {modal, onClear} from '../../store/actions/todoList'

const TodosSuccess = (props) => (
   <Modal
    show={props.showModal}
    onHide={() => props.onHide(false)}
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
     <Button onClick={() => props.onClear(false)} style={ {'width': '40%'} } size="lg" variant="success">Очистить</Button>
     <Button onClick={() => props.onHide(false)} style={ {'width': '40%'} } size="lg" variant="danger">Оставить</Button>
    </Modal.Footer>
   </Modal>
)

const mapStateToProps = (state) => {
 return {
  showModal: state.todoList.showModal,
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  onHide: bool => dispatch(modal(bool)),
  onClear: bool => dispatch(onClear(bool)),
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosSuccess)
