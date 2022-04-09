import React from "react"
import { Modal, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import {about} from '../../store/actions/todoList'

const About = (props) => (
   <Modal
    show={props.show}
    onHide={() => props.onHide(false)}
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
     <Button style={{'width': '100%'}} onClick={() => props.onHide(false)} size="lg" variant="secondary">Закрыть</Button>
    </Modal.Footer>
   </Modal>
  )

const mapStateToProps = (state) => {
 return {
  show: state.todoList.showAbout,
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  onHide: bool => dispatch(about(bool)),
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
