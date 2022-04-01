import React from 'react'
import { Link } from 'react-router-dom'
import {Dropdown, Form} from 'react-bootstrap'
import {
  Moon,
  Person,
  Gear,
} from 'react-bootstrap-icons'
import styles from './StatusBar.module.css'


export default function StatusBar(props) {
  const cls = [
    styles.StatusBar,
    'items'
  ]

  let size = '27'
  let theme = props.theme === 'light' ? 'light' : 'dark'

  return (
    <ul className={cls.join(' ')}>
      <li><Moon className="moon" size={size} onClick={props.themeToggler}/></li>

      {
        window.innerWidth <= 1000
          ? <li><Gear className="gear" size={size} onClick={props.adaptiveSettings}/></li>
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
                    onChange={props.themeSwitch}
                    label="Подстраивать тему под системную"
                    checked={props.themeChecked}
                  />
                </Form>
              </Dropdown.ItemText>

              <Dropdown.ItemText>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={props.modalSwitch}
                    label="Показывать модальное окно, когда все выполнено"
                    checked={props.modalChecked}
                  />
                </Form>
              </Dropdown.ItemText>
              <Dropdown.Divider/>
              <Dropdown.Item onClick={props.about}>О приложении</Dropdown.Item>
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
