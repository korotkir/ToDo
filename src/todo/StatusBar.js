import React, {Component} from "react";
import {
 Moon, BrightnessHigh,
 Person, PersonFill,
 Gear, GearFill
} from "react-bootstrap-icons";

class StatusBar extends React.Component {
 render() {
  let size = '27'
  return (
   <ul className="statusBar">
    <li><Moon size={size} /></li>
    <li><Person size={size} /></li>
    <li><Gear size={size} /></li>
   </ul>
  )
 }
}

export default StatusBar
