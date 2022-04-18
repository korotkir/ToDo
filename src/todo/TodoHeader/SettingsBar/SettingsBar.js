import React from 'react'
import styles from './SettingsBar.module.css'
import {Form} from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'
import {useDispatch, useSelector} from 'react-redux'
import {about, modalSwitch, themeSwitch} from '../../../store/actions/todoList'

export default function SettingsBar() {
  const dispatch = useDispatch()
  const status = useSelector(state => state.status)
  const autoThemeSwitch = useSelector(state => state.autoThemeSwitch)
  const showModalSwitch = useSelector(state => state.showModalSwitch)

  return (
    <CSSTransition
      in={status}
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
            onChange={() => dispatch(themeSwitch())}
            label="Подстраивать тему под системную"
            checked={autoThemeSwitch}
            data-size="lg"
          />
        </Form>

        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={() => dispatch(modalSwitch())}
            label="Уведомлять когда все выполнено"
            checked={showModalSwitch}
          />
        </Form>
        <p style={{'textDecoration': 'underline'}} onClick={() => dispatch(about(true))}>О приложении</p>
      </div>
    </CSSTransition>
  )
}
