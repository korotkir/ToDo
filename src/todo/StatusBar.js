import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import {
 Moon, 
 Person, 
 Gear, 
} from "react-bootstrap-icons";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

class StatusBar extends React.Component {
 render() {
  let size = '27'
  let theme = this.props.theme === 'light' ? 'light' : 'dark'
  return (
   <ul className="statusBar">
       <li><Moon className="moon" size={size} onClick={this.props.themeToggler} /></li>

        <Dropdown>
            <Dropdown.Toggle variant="custom" className="gear">
                <li><Gear size={size} /></li>
            </Dropdown.Toggle>
            <Dropdown.Menu variant={theme}>
                
                <Dropdown.ItemText>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Подстраивать тему под системную"
                        />
                    </Form>
                </Dropdown.ItemText>

                <Dropdown.ItemText>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Показывать модальное окно, когда все выполнено"
                        />
                    </Form>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">О приложении</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
            <Dropdown.Toggle variant="custom" className="person">
            <li><Person size={size} /></li>
            </Dropdown.Toggle>
            <Dropdown.Menu variant={theme}>
                <Dropdown.Item href="#/action-1">Выйти</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
   </ul>
  )
 }
}

export default StatusBar
