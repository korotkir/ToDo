import React from "react"
import { Modal, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import {about} from '../../store/actions/todoList'

const About = () => {
 const dispatch = useDispatch()
 const show = useSelector((state) => state.todoList.showAbout)

 return (
 <Modal
   show={show}
   onHide={() => dispatch(about(false))}
   size="md"
   aria-labelledby="contained-modal-title-vcenter"
   centered
 >
  <Modal.Header closeButton>
   <Modal.Title id="contained-modal-title-vcenter">
    О приложении
   </Modal.Title>
  </Modal.Header>
  <Modal.Body className="modalBody" style={{'fontSize': '18px'}}>
   <p>Данное приложение разработано мной для изучения концепций ReactJS.
    На данный момент реализована только Frontend часть.</p>
   <p>Создано в 2021 - 2022г.</p>
   <p align="right">- korotkir -</p>
  </Modal.Body>
  <Modal.Footer style={{'justifyContent': 'center'}}>
   <Button style={{'width': '100%'}} onClick={() => dispatch(about(false))} size="lg" variant="secondary">Закрыть</Button>
  </Modal.Footer>
 </Modal>
 )
}

export default About
