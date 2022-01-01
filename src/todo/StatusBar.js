import React from "react";
import { Dropdown } from "react-bootstrap";
import {
 Moon, 
 Person, 
 Gear, 
} from "react-bootstrap-icons";

class StatusBar extends React.Component {
 render() {
  let size = '27'
  return (
   <ul className="statusBar">
    <li><Moon className="moon" size={size} onClick={this.props.themeToggler} /></li>
    <li>
        <Gear className="gear" size={size} />
    </li>
    <li><Person className="person" size={size} /></li>
   </ul>
  )
 }
}

export default StatusBar
