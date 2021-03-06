import React, {useEffect} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {Dropdown, Form} from 'react-bootstrap'
import {
  Moon,
  Person,
  Gear,
} from 'react-bootstrap-icons'
import styles from './StatusBar.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {about, modalSwitch, themeSwitch, themeToggler} from '../../../store/actions/todoList'
import {adaptiveSettingsStatus} from '../../../store/actions/todoList'

export default function StatusBar() {
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.todo.theme)
  const autoThemeSwitch = useSelector(state => state.todo.autoThemeSwitch)
  const showModalSwitch = useSelector(state => state.todo.showModalSwitch)
  const navigate = useNavigate()

  const cls = [
    styles.StatusBar,
    'items'
  ]

  let size = '27'
  let theme = themeState === 'light' ? 'light' : 'dark'

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

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
              <Dropdown.Item onClick={() => dispatch(about(true))}>О приложении</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

      }

      <Dropdown>
        <Dropdown.Toggle variant="custom" className="person">
          <li><Person size={size}/></li>
        </Dropdown.Toggle>
        <Dropdown.Menu variant={theme}>
          <Dropdown.Item disabled style={{color: 'white'}}>1</Dropdown.Item>
          {/*<Dropdown.Item onClick={logout}>Выйти</Dropdown.Item>*/}
          <Dropdown.Item><NavLink to={'/login'}>Выйти</NavLink></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ul>
  )
}

