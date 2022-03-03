import React from 'react'
import NewItem from './NewItem/NewItem'
import StatusBar from './StatusBar/StatusBar'
import styles from './TodoHeader.module.css'
import SettingsBar from '../SettingsBar/SettingsBar'


const  TodoHeader = props => {
  return (
    <div className={styles.TodoHeader}>
      <StatusBar
        themeToggler={props.themeToggler}
        theme={props.theme}
        themeSwitch={props.themeSwitch}
        themeChecked={props.themeChecked}
        modalSwitch={props.modalSwitch}
        modalChecked={props.modalChecked}
        about={props.about}
      />
      <SettingsBar
        themeSwitch={props.themeSwitch}
        themeChecked={props.themeChecked}
      />
      <NewItem
        submit={props.submit}
        change={props.change}
        value={props.value}
      />
    </div>
  )
}

export default TodoHeader
