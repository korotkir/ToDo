import React, {useState} from 'react'
import NewItem from './NewItem/NewItem'
import StatusBar from './StatusBar/StatusBar'
import styles from './TodoHeader.module.css'
import SettingsBar from './SettingsBar/SettingsBar'

const  TodoHeader = props => {
  const [status, setStatus] = useState(false)

  function adaptiveSettings() {
    const switcher = status
    setStatus(!switcher)
  }

  const closeSettingsHandler = () => setStatus(false)

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
        adaptiveSettings={adaptiveSettings}
      />
      <SettingsBar
        themeSwitch={props.themeSwitch}
        themeChecked={props.themeChecked}
        modalSwitch={props.modalSwitch}
        modalChecked={props.modalChecked}
        about={props.about}
        status={status}
      />
      <NewItem
        submit={props.submit}
        change={props.change}
        value={props.value}
        close={closeSettingsHandler}

      />
    </div>
  )
}

export default TodoHeader
