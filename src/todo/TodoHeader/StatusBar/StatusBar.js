import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Dropdown, Form} from 'react-bootstrap'
import {
  Moon,
  Person,
  Gear,
} from 'react-bootstrap-icons'
import styles from './StatusBar.module.css'


class StatusBar extends React.Component {

  render() {
   const cls = [
     styles.StatusBar,
     'items'
   ]

  let size = '27'
  let theme = this.props.theme === 'light' ? 'light' : 'dark'


   return (
       <ul className={cls.join(' ')}>
         <li><Moon className="moon" size={size} onClick={this.props.themeToggler}/></li>

         {
           window.innerWidth <= 768
            ? <li><Gear className="gear" size={size} onClick={this.props.adaptiveSettings}/></li>
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
                       onChange={this.props.themeSwitch}
                       label="Подстраивать тему под системную"
                       checked={this.props.themeChecked}
                     />
                   </Form>
                 </Dropdown.ItemText>

                 <Dropdown.ItemText>
                   <Form>
                     <Form.Check
                       type="switch"
                       id="custom-switch"
                       onChange={this.props.modalSwitch}
                       label="Показывать модальное окно, когда все выполнено"
                       checked={this.props.modalChecked}
                     />
                   </Form>
                 </Dropdown.ItemText>
                 <Dropdown.Divider/>
                 <Dropdown.Item onClick={this.props.about}>О приложении</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>

         }

         <Dropdown>
           <Dropdown.Toggle variant="custom" className="person">
             <li><Person size={size}/></li>
           </Dropdown.Toggle>
           <Dropdown.Menu variant={theme}>
             <Dropdown.Item><Link to="/auth">Авторизация</Link></Dropdown.Item>
             <Dropdown.Item href="#" disabled>Выйти</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
       </ul>
   )
 }
}

export default StatusBar
