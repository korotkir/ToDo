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
    <li><Moon size={size} onClick={this.props.themeToggler} /></li>
    <li>
        <Gear size={size} />
    </li>
    <li><Person size={size} /></li>
   </ul>
  )
 }
}

export default StatusBar
