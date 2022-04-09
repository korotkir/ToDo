import React from 'react'
import styles from './SettingsBar.module.css'
import {Form} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {about, modalSwitch, themeSwitch} from '../../../store/actions/todoList'

const SettingsBar = (props) =>  (
      <CSSTransition
        in={props.status}
        timeout={{
          enter: 1000,
          exit: 500
        }}
        classNames={{
          enter: styles.BarEnter,
          exit: styles.BarExit,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={styles.SettingsBar}>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.themeSwitch}
              label="Подстраивать тему под системную"
              checked={props.autoThemeSwitch}
              data-size="lg"
            />
          </Form>

          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.modalSwitch}
              label="Уведомлять когда все выполнено"
              checked={props.showModalSwitch}
            />
          </Form>
          <p style={{'textDecoration': 'underline'}} onClick={props.about}>О приложении</p>
        </div>
      </CSSTransition>
    )

function mapStateToProps(state) {
  return {
    status: state.header.status,
    autoThemeSwitch: state.todoList.autoThemeSwitch,
    showModalSwitch: state.todoList.showModalSwitch,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    themeSwitch: () => dispatch(themeSwitch()),
    modalSwitch: () => dispatch(modalSwitch()),
    about: bool => dispatch(about(bool)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsBar)
