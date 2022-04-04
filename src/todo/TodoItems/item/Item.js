import React, {useEffect, useState} from 'react'
import {Trash} from 'react-bootstrap-icons'
import styles from './Item.module.css'

function Item(props) {

  const [task, setTask] = useState(['form-control'])
  const [backgroundForm, setBackgroundForm] = useState(['input-group-text'])
  const [checked] = useState(false)

  const remove = () => {
    checked && props.performed('minus')
    props.remove()
  }

  const handleStylization = (condition) => {
    if (condition === 'add') {
      setTask([...task, 'task'])
      setBackgroundForm([...backgroundForm, 'success'])
    }
    if (condition === 'remove') {
      setTask([...task].splice(0, 1))
      setBackgroundForm([...backgroundForm].splice(0, 1))
    }
  }

  const handleChange = () => {
    if (!props.checkeds) {
      props.performed('plus', props.index)
      handleStylization('add')

    } else {
      props.performed('minus', props.index)
      handleStylization('remove')
    }
  }

  useEffect(() => {
    if (props.checkeds) {
      handleStylization('add')
    }
  }, [props.checkeds])

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
        checked={props.checkeds}
        />
     </div>
     <input type="text" className={[...task].join(' ')} defaultValue={props.value}/>
     <Trash className="trash" size={25} onClick={remove}/>
    </div>
  )
}

export default Item
