import React from 'react'
import NewItem from '../NewItem/NewItem'
import StatusBar from '../StatusBar/StatusBar'
import styles from './TodoHeader.module.css'

const  TodoHeader = props => {
  return (
    <div className={styles.TodoHeader}>
      <div className="col-lg-8 order-lg-1 order-2">
        <NewItem
          submit={props.submit}
          change={props.change}
          value={props.value}
        />
      </div>
      <div className="col-lg-2 order-xl-2 order-1">
        <StatusBar
          themeToggler={props.themeToggler}
          theme={props.theme}
          themeSwitch={props.themeSwitch}
          themeChecked={props.themeChecked}
          modalSwitch={props.modalSwitch}
          modalChecked={props.modalChecked}
          about={props.about}
        />
      </div>
    </div>
  )
}

export default TodoHeader
