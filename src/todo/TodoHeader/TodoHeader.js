import React from 'react'
import NewItem from './NewItem/NewItem'
import StatusBar from './StatusBar/StatusBar'
import styles from './TodoHeader.module.css'
import SettingsBar from './SettingsBar/SettingsBar'
import {connect} from 'react-redux'
import {adaptiveSettingsStatus, setSettingsBarVisible} from '../../store/actions/header'

const TodoHeader = props => {
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
        adaptiveSettings={props.adaptiveSettingsStatus}
      />
      <SettingsBar
        themeSwitch={props.themeSwitch}
        themeChecked={props.themeChecked}
        modalSwitch={props.modalSwitch}
        modalChecked={props.modalChecked}
        about={props.about}
        visible={props.status}
      />
      <NewItem
        submit={props.submit}
        change={props.change}
        value={props.value}
        settingsBarVisible={props.setSettingsBarVisible}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    status: state.header.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    adaptiveSettingsStatus: () => dispatch(adaptiveSettingsStatus()),
    setSettingsBarVisible: bool => dispatch(setSettingsBarVisible(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)
