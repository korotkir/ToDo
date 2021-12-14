import React from "react";
import { Dropdown } from "react-bootstrap";
import {
 Moon, 
 Person, 
 Gear, 
//  GearFill,
//  BrightnessHigh,
//  PersonFill,
} from "react-bootstrap-icons";

class StatusBar extends React.Component {
 render() {
  let size = '27'
  return (
   <ul className="statusBar">
    <li><Moon size={size} /></li>
    <li>
        <Dropdown variant="none">
            <Dropdown.Toggle>
                <Gear size={size} />
            </Dropdown.Toggle>
        </Dropdown>
    </li>
    <li><Person size={size} /></li>
   </ul>
  )
 }
}

export default StatusBar
