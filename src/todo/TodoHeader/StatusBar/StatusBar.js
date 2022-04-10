import React from 'react'
import { Link } from 'react-router-dom'
import {Dropdown, Form} from 'react-bootstrap'
import {
  Moon,
  Person,
  Gear,
} from 'react-bootstrap-icons'
import styles from './StatusBar.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {about, modalSwitch, themeSwitch, themeToggler} from '../../../store/actions/todoList'
import {adaptiveSettingsStatus} from '../../../store/actions/header'

export default function StatusBar() {
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.todoList.theme)
  const autoThemeSwitch = useSelector(state => state.todoList.autoThemeSwitch)
  const showModalSwitch = useSelector(state => state.todoList.showModalSwitch)


  const cls = [
    styles.StatusBar,
    'items'
  ]

  let size = '27'
  let theme = themeState === 'light' ? 'light' : 'dark'

  return (
    <ul className={cls.join(' ')}>
      <li><Moon className="moon" size={size} onClick={() => dispatch(themeToggler())}/></li>

      {
        window.innerWidth <= 1000
          ? <li><Gear className="gear" size={size} onClick={() => dispatch(adaptiveSettingsStatus())}/></li>
          : <Dropdown>
            <Dropdown.Toggle variant="custom" className="gear">
              <li><Gear size={size}/></li>
            </Dropdown.Toggle>
            <Dropdown.Menu variant={theme}>
              <Dropdown.ItemText>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={() => dispatch(themeSwitch())}
                    label="Подстраивать тему под системную"
                    checked={autoThemeSwitch}
                  />
                </Form>
              </Dropdown.ItemText>

              <Dropdown.ItemText>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={() => dispatch(modalSwitch())}
                    label="Показывать модальное окно, когда все выполнено"
                    checked={showModalSwitch}
                  />
                </Form>
              </Dropdown.ItemText>
              <Dropdown.Divider/>
              <Dropdown.Item onClick={() => dispatch(about())}>О приложении</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

      }

      <Dropdown>
        <Dropdown.Toggle variant="custom" className="person">
          <li><Person size={size}/></li>
        </Dropdown.Toggle>
        <Dropdown.Menu variant={theme}>
          <Link className="dropdown-item" to="/auth">Авторизация</Link>
          <Dropdown.Item href="#" disabled>Выйти</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ul>
  )
}

