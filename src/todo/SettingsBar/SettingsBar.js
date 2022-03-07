import React, {useState} from 'react'
import styles from './SettingsBar.module.css'
import {Form} from 'react-bootstrap'

function SettingsBar(props)  {

    let cls = [styles.SettingsBar]

    if (props.status) {
      cls.push(styles.status)
    }

    return (
      <div className={cls.join(' ')}>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.themeSwitch}
              label="Подстраивать тему под системную"
              checked={props.themeChecked}
              data-size="lg"
            />
          </Form>

          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.modalSwitch}
              label="Показывать модальное окно, когда все выполнено"
              checked={props.modalChecked}
            />
          </Form>
        <p onClick={props.about}>О приложении</p>
      </div>
    )
}

export default SettingsBar
