import React, {useCallback, useEffect, useState} from 'react'
import {Trash} from 'react-bootstrap-icons'
import styles from './Item.module.css'

export default function Item(props) {
  const [task, setTask] = useState(['form-control'])
  const [backgroundForm, setBackgroundForm] = useState(['input-group-text'])
  const [tick] = useState(false)

  const remove = () => {
    tick && props.performed('minus')
    props.remove()
  }

  const handleStylization = useCallback((condition) => {
    if (condition === 'add') {
      setTask([...task, 'task'])
      setBackgroundForm([...backgroundForm, 'success'])
    }
    if (condition === 'remove') {
      setTask([...task].splice(0, 1))
      setBackgroundForm([...backgroundForm].splice(0, 1))
    }
  }, [task, backgroundForm])

  const handleChange = () => {
    if (!props.checked) {
      props.performed('plus', props.index)
      handleStylization('add')

    } else {
      props.performed('minus', props.index)
      handleStylization('remove')
    }
  }

  useEffect(() => {
    if (props.checked) {
      return handleStylization('add')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checked])

  const cls = [
    styles.Item,
    'input-group',
    'col-6',
    'col-lg-1'
  ]

  return(
    <div className={cls.join(' ')}>
     <div className={[...backgroundForm].join(' ')}>
      <input
        key={props.key}
        className="form-check-input mt-0"
        type="checkbox"
        onChange={handleChange}
        checked={props.checked}
        />
     </div>
     <input type="text" className={[...task].join(' ')} defaultValue={props.value}/>
     <Trash className="trash" size={25} onClick={remove}/>
    </div>
  )
}
