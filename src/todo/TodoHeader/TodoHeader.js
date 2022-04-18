import React from 'react'
import NewItem from './NewItem/NewItem'
import StatusBar from './StatusBar/StatusBar'
import styles from './TodoHeader.module.css'
import SettingsBar from './SettingsBar/SettingsBar'

const TodoHeader = (props) => (
    <div className={styles.TodoHeader}>
      <StatusBar />
      <SettingsBar />
      <NewItem
        submit={props.submit}
        change={props.change}
      />
    </div>
  )

export default TodoHeader


