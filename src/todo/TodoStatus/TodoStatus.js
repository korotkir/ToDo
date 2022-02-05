import React from 'react'
import styles from './TodoStatus.module.css'

const TodoStatus = props => {
  return (
        <div className={styles.TodoStatus}>
          {props.values
            ? props.done
                ? <h2 className="status col-auto">{props.done}/{props.values}</h2>
                : <h2 className="status col-auto">{props.values}</h2>
            : null
          }
        </div>
  )
}

export default TodoStatus
