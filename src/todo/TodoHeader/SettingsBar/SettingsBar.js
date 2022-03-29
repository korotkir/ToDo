import React from 'react'
import styles from './SettingsBar.module.css'
import {Form} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'

const SettingsBar = (props) =>  (
      <CSSTransition
        in={props.status}
        timeout={{
          enter: 1000,
          exit: 500
        }}
        classNames={{
          enter: styles.BarEnter,
          enterActive: styles.BarEnterActive,
          exit: styles.BarExit,
          exitActive: styles.BarExitActive
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
              checked={props.themeChecked}
              data-size="lg"
            />
          </Form>

          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.modalSwitch}
              label="Уведомлять когда все выполнено"
              checked={props.modalChecked}
            />
          </Form>
          <p style={{'textDecoration': 'underline'}} onClick={props.about}>О приложении</p>
        </div>
      </CSSTransition>
    )

export default SettingsBar
