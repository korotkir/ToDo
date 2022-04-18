import React from "react"
import { Modal, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {modal, onClear} from '../../store/actions/todoList'

export default function TodosSuccess() {
 const dispatch = useDispatch()
 const showModal = useSelector(state => state.showModal)

 return (
   <Modal
    show={showModal}
    onHide={() => dispatch(modal(false))}
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
     <Button onClick={() => dispatch(onClear(false))} style={ {'width': '40%'} } size="lg" variant="success">Очистить</Button>
     <Button onClick={() => dispatch(modal(false))} style={ {'width': '40%'} } size="lg" variant="danger">Оставить</Button>
    </Modal.Footer>
   </Modal>
 )
}
