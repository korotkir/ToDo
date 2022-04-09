import React from 'react'
import styles from './TodoStatus.module.css'
import {connect} from 'react-redux'


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

let mapStateToProps = (state) => {
  return {
    done: state.todoList.done,
    values: state.todoList.items.length,
  }
}

export default connect(mapStateToProps)(TodoStatus)
