import React from 'react'
import styles from './TodoStatus.module.css'
import {useSelector} from 'react-redux'

export default function TodoStatus() {
  const done = useSelector(state => state.done)
  const values = useSelector(state => state.items.length)

  return (
        <div className={styles.TodoStatus}>
          {values
            ? done
                ? <h2 className="status col-auto">{done}/{values}</h2>
                : <h2 className="status col-auto">{values}</h2>
            : null
          }
        </div>
  )
}
