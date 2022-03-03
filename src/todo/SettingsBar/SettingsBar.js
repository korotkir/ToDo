import React, {useState} from 'react'
import styles from './SettingsBar.module.css'
import {Form} from 'react-bootstrap'

function SettingsBar(props)  {


    return (
      <div className={styles.SettingsBar}>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.themeSwitch}
              label="Подстраивать тему под системную"
              defaultChecked
              checked={props.themeChecked}
            />
          </Form>

          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onChange={props.modalSwitch}
              label="Показывать модальное окно, когда все выполнено"
              defaultChecked
              checked={props.modalChecked}
            />
          </Form>
      </div>
    )
}

export default SettingsBar
